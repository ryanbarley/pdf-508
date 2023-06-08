import * as pdfjsLib from "pdfjs-dist";
import fs from "fs";
import { findAll } from "obj-traverse";

import { AnnotationLayer } from "pdfjs-dist";
import { StructTreeNode } from "pdfjs-dist/types/src/display/api";

export type documentMetadata = {
  info: {
    PDFFormatVersion: string;
    Language: string;
    EncryptFilterName?: string;
    IsLinearized: boolean;
    IsAcroFormPresent: boolean;
    IsXFAPresent: boolean;
    IsCollectionPresent: boolean;
    IsSignaturesPresent: boolean;
    Author: string;
    Custom: { Comments: string; Company: string; SourceModified: string };
    CreationDate: string;
    Creator: string;
    ModDate: string;
    Producer: string;
    Subject: string;
    Title: string;
  };
  metadata: {};
};

export type messages = {
  [pageNumber: number]: { high: string[]; low: string[] };
};

export type Figure = {
  role: "Figure";
  children: Object[];
  alt?: string;
};

let messages: messages = {};

const loadDocument = async (
  pdfPath: string
): Promise<pdfjsLib.PDFDocumentProxy> => {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const CMAP_URL = "../../../../node_modules/pdfjs-dist/cmaps/";
  const CMAP_PACKED = true;

  const loadingTask = pdfjsLib.getDocument({
    data,
    cMapUrl: CMAP_URL,
    cMapPacked: CMAP_PACKED,
  });

  return await loadingTask.promise;
};

const readAllPages = async (pdfDocument: pdfjsLib.PDFDocumentProxy) => {
  const numPages = pdfDocument.numPages;
  const range = [...Array(numPages).keys()];
  const pageLoadPromises = range.map((n) => pdfDocument.getPage(n + 1));

  return await Promise.all(pageLoadPromises);
};

const checkTaggedDocument = (
  prevState: messages,
  structTree: any
): messages => {
  let newHighMessages = [];

  if (!Object.keys(structTree).length) {
    newHighMessages = [
      "No source tree generated. Check that document is tagged and that it is not a scanned page or image-only PDF.",
    ];
  }

  return setNewMessageState(prevState, 0, newHighMessages);
};

const checkTitle = (prevState: messages, documentMetadata: any): messages => {
  let newHighMessages = [];
  let newLowMessages = [];

  if (!documentMetadata.info.Title) {
    newHighMessages = ["PDF must have descriptive name"];
  }
  newLowMessages = [
    "Check that filename identifies the document or its purpose",
  ];

  return setNewMessageState(prevState, 0, newHighMessages, newLowMessages);
};

const checkPermissions = (
  prevState: messages,
  documentPermissions: number[]
): messages => {
  let newHighMessages = [];

  if (documentPermissions && !documentPermissions.includes(2048)) {
    newHighMessages = [
      "Content copying for accessibility permissions must be enabled",
    ];
  }
  return setNewMessageState(prevState, 0, newHighMessages);
};

const checkLanguage = (
  prevState: messages,
  documentMetadata: documentMetadata
): messages => {
  let newHighMessages = [];

  if (!documentMetadata.info.Language) {
    newHighMessages = ["Document language must be set"];
  }

  return setNewMessageState(prevState, 0, newHighMessages);
};

const checkFigures = (
  prevState: messages,
  structTree: any,
  pageNumber: number
): messages => {
  let newHighMessages = [];
  let newLowMessages = [];

  const figures: Figure[] = findAll(structTree, "children", { role: "Figure" });
  if (!figures.length) return prevState;
  for (let figure of figures) {
    if (!figure.alt) {
      newHighMessages.push(
        "All images and figures must have alternative text that describes its purpose/function."
      );
      break;
    }
  }
  newLowMessages.push(
    LowPriorityMessages.CAPTIONS_DESCRIBE_PURPOSE,
    LowPriorityMessages.ALT_TEXT_CONVEYS_MEANING
  );

  return setNewMessageState(
    prevState,
    pageNumber,
    newHighMessages,
    newLowMessages
  );
};

const checkLinks = (
  prevState: messages,
  annotationLayer: AnnotationLayer,
  pageNumber: number
): messages => {
  let newHighMessages = [];
  let newLowMessages = [];

  // const links: Figure[] = findAll(annotationLayer, "children", { role: "" });
  return setNewMessageState(
    prevState,
    pageNumber,
    newHighMessages,
    newLowMessages
  );
};

const checkValidTags = (
  prevState: messages,
  structTree: StructTreeNode,
  pageNumber: number
): messages => {
  const validTags = new Set([
    "Root",
    "Document",
    "Part",
    "Div",
    "Art",
    "Sect",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "P",
    "L",
    "LI",
    "LBL",
    "LBody",
    "BlockQuote",
    "Caption",
    "Index",
    "TOC",
    "TOCI",
    "Table",
    "TR",
    "TD",
    "TH",
    "BibEntry",
    "Quote",
    "Span",
    "Code",
    "Figure",
    "Form",
    "Formula",
    "Link",
    "Note",
    "Reference",
  ]);

  let newHighMessages = [];
  let newLowMessages = [];

  const roles = new Set<string>(findAllByKey(structTree, "role"));
  if (difference(roles, validTags).size > 0) {
    newHighMessages.push("");
  }
  return setNewMessageState(prevState, pageNumber);
};

function findAllByKey(obj, keyToFind) {
  return Object.entries(obj).reduce(
    (acc, [key, value]) =>
      key === keyToFind
        ? acc.concat(value)
        : typeof value === "object"
        ? acc.concat(findAllByKey(value, keyToFind))
        : acc,
    []
  );
}

function difference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

(async function () {
  try {
    const pdfDocument = await loadDocument("tests/pdfs/f656b_accessible.pdf");
    const pages = await readAllPages(pdfDocument);
    // const meta = await pdfDocument.getMetadata();
    // messages = checkTitle(messages, meta);
    const structTree = await pages[0].getStructTree();

    // const flat = findAll(structTree, "children", { role: // });
    // for (let page of pages) {
    //   const pageNumber = page.pageNumber;
    //   const structTree = await page.getStructTree();
    //   const flat = flatten(structTree);

    //   const annotationLayer = await page.getAnnotations();

    //   // messages = checkFigures(messages, structTree, pageNumber);
    //   messages = checkLinks(messages, annotationLayer, pageNumber);
    //   page.cleanup();
    // }
    // console.log(JSON.stringify(flat));
    // console.log("\n\n\n\n");
    // console.log(JSON.stringify(structTree));
  } catch (reason) {
    console.log(reason);
  }
})();

export const exportedForTesting = {
  checkTitle,
  checkPermissions,
  checkLanguage,
  checkFigures,
  checkTaggedDocument,
};

enum LowPriorityMessages {
  DOCUMENT_HAS_DESCRIPTIVE_FILENAME = "Check that the filename identifies the document or its purpose.",
  MEANINGFUL_CONTENT_TAGGED = "Check that all meaningful content is also tagged content.",
  TAGS_FOLLOW_VISUAL_ORDER = "Check that all tags follow the visual/logical order of the page.",

  CAPTIONS_DESCRIBE_PURPOSE = "Check that all captions describe the purpose/function of associated images/objects.",
  ALT_TEXT_CONVEYS_MEANING = "Check that all descriptive text conveys the purpose and/or function of the image/object.",
}

const setNewMessageState = (
  prevState: messages,
  pageNumber: number = 0,
  newHighMessages: string[] = [],
  newLowMessages: string[] = []
): messages => {
  if (!prevState[pageNumber]) {
    prevState[pageNumber] = { high: newHighMessages, low: newLowMessages };
    return prevState;
  }

  return {
    ...prevState,
    [pageNumber]: {
      high: [...prevState[pageNumber]?.high, ...newHighMessages],
      low: [...prevState[pageNumber]?.low, ...newLowMessages],
    },
  };
};
