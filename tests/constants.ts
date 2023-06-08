import { AnnotationLayer } from "pdfjs-dist";
import { documentMetadata } from "../src/app.js";

export const cleanDocumentMetadata: documentMetadata = {
  info: {
    PDFFormatVersion: "1.6",
    Language: "EN-US",
    EncryptFilterName: null,
    IsLinearized: true,
    IsAcroFormPresent: false,
    IsXFAPresent: false,
    IsCollectionPresent: false,
    IsSignaturesPresent: false,
    Author: "Marina Tsallagova",
    Custom: {
      Comments: "",
      Company: "",
      SourceModified: "D:20230508111053",
    },
    CreationDate: "D:20230508111105Z",
    Creator: "Acrobat PDFMaker 21 for Word",
    ModDate: "D:20230512115222-07'00'",
    Producer: "Adobe PDF Library 21.1.174",
    Subject: "",
    Title: "myA11y Playbook",
  },
  metadata: {},
};

export const documentMetadataWithoutTitle: documentMetadata = {
  ...cleanDocumentMetadata,
  info: { ...cleanDocumentMetadata.info, Title: null },
};

export const documentMetadataWithoutLanguage: documentMetadata = {
  ...cleanDocumentMetadata,
  info: { ...cleanDocumentMetadata.info, Language: null },
};

export const structTree = {
  children: [
    {
      role: "Sect",
      children: [
        { role: "H1", children: [{ type: "content", id: "p1R_mc0" }] },
        { role: "P", children: [{ type: "content", id: "p1R_mc1" }] },
        { role: "P", children: [{ type: "content", id: "p1R_mc2" }] },
        { role: "P", children: [{ type: "content", id: "p1R_mc3" }] },
        { role: "P", children: [{ type: "content", id: "p1R_mc4" }] },
        { role: "P", children: [{ type: "content", id: "p1R_mc5" }] },
        {
          role: "Figure",
          children: [{ type: "content", id: "p1R_mc8" }],
          alt: "A graphic of the 508 team. Incudes the team positions and role descriptions. Roles include, Program Manager, Manual Testers (Exploratory), Automation Engineering & DevOps, and Experience Design. \u0000",
        },
        { role: "P", children: [{ type: "content", id: "p1R_mc6" }] },
        { role: "P", children: [{ type: "content", id: "p1R_mc7" }] },
      ],
    },
  ],
  role: "Root",
};

export const structTreeNoAltText = {
  ...structTree,
  children: [
    {
      role: "Figure",
      children: [{ type: "content", id: "p1R_mc8" }],
    },
    {
      role: "Figure",
      children: [{ type: "content", id: "p1R_mc8" }],
    },
  ],
};

export const structTreeNoFigures = {
  children: [
    {
      role: "Sect",
      children: [
        { role: "H1", children: [{ type: "content", id: "p1R_mc0" }] },
      ],
    },
  ],
  role: "Root",
};

export const pageWithLinks: AnnotationLayer = [
  {
    annotationFlags: 4,
    borderStyle: {
      width: 0,
      style: 1,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    },
    color: { "0": 0, "1": 0, "2": 0 },
    backgroundColor: null,
    borderColor: null,
    rotation: 0,
    contentsObj: { str: "", dir: "ltr" },
    hasAppearance: false,
    id: "6863R",
    modificationDate: null,
    rect: [122.4, 536.4, 518.4, 550.8],
    subtype: "Widget",
    hasOwnCanvas: true,
    noRotate: false,
    noHTML: false,
    annotationType: 20,
    fieldName: "topmostSubform[0].Page1[0].list[0].item1[0].link[0]",
    actions: null,
    fieldValue: "",
    defaultFieldValue: null,
    alternativeText: "What you need to know. Go to page 1.",
    defaultAppearanceData: {
      fontSize: 10,
      fontName: "ArialMT",
      fontColor: { "0": 0, "1": 0, "2": 0 },
    },
    fieldType: "Btn",
    fieldFlags: 65536,
    readOnly: false,
    required: false,
    hidden: false,
    checkBox: false,
    radioButton: false,
    pushButton: true,
    isTooltipOnly: true,
  },
  {
    annotationFlags: 4,
    borderStyle: {
      width: 0,
      style: 1,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    },
    color: { "0": 0, "1": 0, "2": 0 },
    backgroundColor: null,
    borderColor: null,
    rotation: 0,
    contentsObj: { str: "", dir: "ltr" },
    hasAppearance: false,
    id: "6864R",
    modificationDate: null,
    rect: [122.4, 514.8, 518.4, 529.2],
    subtype: "Widget",
    hasOwnCanvas: true,
    noRotate: false,
    noHTML: false,
    annotationType: 20,
    fieldName: "topmostSubform[0].Page1[0].list[0].item2[0].link[0]",
    actions: null,
    fieldValue: "",
    defaultFieldValue: null,
    alternativeText: "Paying for your offer. Go to page 3.",
    defaultAppearanceData: {
      fontSize: 10,
      fontName: "ArialMT",
      fontColor: { "0": 0, "1": 0, "2": 0 },
    },
    fieldType: "Btn",
    fieldFlags: 65536,
    readOnly: false,
    required: false,
    hidden: false,
    checkBox: false,
    radioButton: false,
    pushButton: true,
    isTooltipOnly: true,
  },
  {
    annotationFlags: 4,
    borderStyle: {
      width: 0,
      style: 1,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    },
    color: { "0": 0, "1": 0, "2": 0 },
    backgroundColor: null,
    borderColor: null,
    rotation: 0,
    contentsObj: { str: "", dir: "ltr" },
    hasAppearance: false,
    id: "6865R",
    modificationDate: null,
    rect: [122.4, 496.8, 518.4, 511.2],
    subtype: "Widget",
    hasOwnCanvas: true,
    noRotate: false,
    noHTML: false,
    annotationType: 20,
    fieldName: "topmostSubform[0].Page1[0].list[0].item3[0].link[0]",
    actions: null,
    fieldValue: "",
    defaultFieldValue: null,
    alternativeText: "How to apply. Go to page 4.",
    defaultAppearanceData: {
      fontSize: 10,
      fontName: "ArialMT",
      fontColor: { "0": 0, "1": 0, "2": 0 },
    },
    fieldType: "Btn",
    fieldFlags: 65536,
    readOnly: false,
    required: false,
    hidden: false,
    checkBox: false,
    radioButton: false,
    pushButton: true,
    isTooltipOnly: true,
  },
  {
    annotationFlags: 4,
    borderStyle: {
      width: 0,
      style: 1,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    },
    color: { "0": 0, "1": 0, "2": 0 },
    backgroundColor: null,
    borderColor: null,
    rotation: 0,
    contentsObj: { str: "", dir: "ltr" },
    hasAppearance: false,
    id: "6866R",
    modificationDate: null,
    rect: [122.4, 478.8, 518.4, 493.2],
    subtype: "Widget",
    hasOwnCanvas: true,
    noRotate: false,
    noHTML: false,
    annotationType: 20,
    fieldName: "topmostSubform[0].Page1[0].list[0].item4[0].link[0]",
    actions: null,
    fieldValue: "",
    defaultFieldValue: null,
    alternativeText: "Completing the application package. Go to page 5.",
    defaultAppearanceData: {
      fontSize: 10,
      fontName: "ArialMT",
      fontColor: { "0": 0, "1": 0, "2": 0 },
    },
    fieldType: "Btn",
    fieldFlags: 65536,
    readOnly: false,
    required: false,
    hidden: false,
    checkBox: false,
    radioButton: false,
    pushButton: true,
    isTooltipOnly: true,
  },
  {
    annotationFlags: 4,
    borderStyle: {
      width: 0,
      style: 1,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    },
    color: { "0": 0, "1": 0, "2": 0 },
    backgroundColor: null,
    borderColor: null,
    rotation: 0,
    contentsObj: { str: "", dir: "ltr" },
    hasAppearance: false,
    id: "6867R",
    modificationDate: null,
    rect: [122.4, 460.8, 518.4, 475.2],
    subtype: "Widget",
    hasOwnCanvas: true,
    noRotate: false,
    noHTML: false,
    annotationType: 20,
    fieldName: "topmostSubform[0].Page1[0].list[0].item5[0].link[0]",
    actions: null,
    fieldValue: "",
    defaultFieldValue: null,
    alternativeText: "Important information. Go to page 6.",
    defaultAppearanceData: {
      fontSize: 10,
      fontName: "ArialMT",
      fontColor: { "0": 0, "1": 0, "2": 0 },
    },
    fieldType: "Btn",
    fieldFlags: 65536,
    readOnly: false,
    required: false,
    hidden: false,
    checkBox: false,
    radioButton: false,
    pushButton: true,
    isTooltipOnly: true,
  },
  {
    annotationFlags: 4,
    borderStyle: {
      width: 0,
      style: 1,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    },
    color: { "0": 0, "1": 0, "2": 0 },
    backgroundColor: null,
    borderColor: null,
    rotation: 0,
    contentsObj: { str: "", dir: "ltr" },
    hasAppearance: false,
    id: "6868R",
    modificationDate: null,
    rect: [122.4, 406.8, 518.4, 457.2],
    subtype: "Widget",
    hasOwnCanvas: true,
    noRotate: false,
    noHTML: false,
    annotationType: 20,
    fieldName: "topmostSubform[0].Page1[0].list[0].item6[0].link[0]",
    actions: null,
    fieldValue: "",
    defaultFieldValue: null,
    alternativeText:
      "Removable Forms - Form 433-A (OIC), Collection Information Statement for Wage Earners and Self-Employed; Form 433-B (OIC), Collection Information Statement for Businesses; Form 656, Offer in Compromise. Starts on page 7.",
    defaultAppearanceData: {
      fontSize: 10,
      fontName: "ArialMT",
      fontColor: { "0": 0, "1": 0, "2": 0 },
    },
    fieldType: "Btn",
    fieldFlags: 65536,
    readOnly: false,
    required: false,
    hidden: false,
    checkBox: false,
    radioButton: false,
    pushButton: true,
    isTooltipOnly: true,
  },
  {
    annotationFlags: 4,
    borderStyle: {
      width: 0,
      style: 1,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    },
    color: { "0": 0, "1": 0, "2": 0 },
    backgroundColor: null,
    borderColor: null,
    rotation: 0,
    contentsObj: { str: "", dir: "ltr" },
    hasAppearance: false,
    id: "6869R",
    modificationDate: null,
    rect: [122.4, 385.2, 518.4, 399.6],
    subtype: "Widget",
    hasOwnCanvas: true,
    noRotate: false,
    noHTML: false,
    annotationType: 20,
    fieldName: "topmostSubform[0].Page1[0].list[0].item7[0].link[0]",
    actions: null,
    fieldValue: "",
    defaultFieldValue: null,
    alternativeText: "Application Checklist. Go to page 29.",
    defaultAppearanceData: {
      fontSize: 10,
      fontName: "ArialMT",
      fontColor: { "0": 0, "1": 0, "2": 0 },
    },
    fieldType: "Btn",
    fieldFlags: 65536,
    readOnly: false,
    required: false,
    hidden: false,
    checkBox: false,
    radioButton: false,
    pushButton: true,
    isTooltipOnly: true,
  },
  {
    annotationFlags: 4,
    borderStyle: {
      width: 0,
      style: 1,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    },
    color: { "0": 0, "1": 0, "2": 0 },
    backgroundColor: null,
    borderColor: null,
    rotation: 0,
    contentsObj: { str: "", dir: "ltr" },
    hasAppearance: false,
    id: "6870R",
    modificationDate: null,
    rect: [216, 295.2, 414, 306],
    subtype: "Widget",
    hasOwnCanvas: true,
    noRotate: false,
    noHTML: false,
    annotationType: 20,
    fieldName: "topmostSubform[0].Page1[0].Button1[0]",
    actions: null,
    fieldValue: "",
    defaultFieldValue: null,
    alternativeText: "https://www.irs.gov/payments/offer-in-compromise.",
    defaultAppearanceData: {
      fontSize: 10,
      fontName: "Arial-BoldMT",
      fontColor: { "0": 0, "1": 0, "2": 0 },
    },
    fieldType: "Btn",
    fieldFlags: 65536,
    readOnly: false,
    required: false,
    hidden: false,
    checkBox: false,
    radioButton: false,
    pushButton: true,
    isTooltipOnly: true,
  },
  {
    annotationFlags: 4,
    borderStyle: {
      width: 0,
      style: 1,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    },
    color: { "0": 0, "1": 0, "2": 0 },
    backgroundColor: null,
    borderColor: null,
    rotation: 0,
    contentsObj: { str: "", dir: "ltr" },
    hasAppearance: false,
    id: "6871R",
    modificationDate: null,
    rect: [219.6, 252, 273.6, 262.8],
    subtype: "Widget",
    hasOwnCanvas: true,
    noRotate: false,
    noHTML: false,
    annotationType: 20,
    fieldName: "topmostSubform[0].Page1[0].Button1[1]",
    actions: null,
    fieldValue: "",
    defaultFieldValue: null,
    alternativeText: "I R S website.",
    defaultAppearanceData: {
      fontSize: 10,
      fontName: "Arial-BoldMT",
      fontColor: { "0": 0, "1": 0, "2": 0 },
    },
    fieldType: "Btn",
    fieldFlags: 65536,
    readOnly: false,
    required: false,
    hidden: false,
    checkBox: false,
    radioButton: false,
    pushButton: true,
    isTooltipOnly: true,
  },
  {
    annotationFlags: 4,
    borderStyle: {
      width: 0,
      style: 1,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    },
    color: { "0": 0, "1": 0, "2": 0 },
    backgroundColor: null,
    borderColor: null,
    rotation: 0,
    contentsObj: { str: "", dir: "ltr" },
    hasAppearance: false,
    id: "6872R",
    modificationDate: null,
    rect: [349.2, 158.4, 453.6, 169.2],
    subtype: "Widget",
    hasOwnCanvas: true,
    noRotate: false,
    noHTML: false,
    annotationType: 20,
    fieldName: "topmostSubform[0].Page1[0].Button1[2]",
    actions: null,
    fieldValue: "",
    defaultFieldValue: null,
    alternativeText: "taxpayeradvocate.irs.gov.",
    defaultAppearanceData: {
      fontSize: 10,
      fontName: "Arial-BoldMT",
      fontColor: { "0": 0, "1": 0, "2": 0 },
    },
    fieldType: "Btn",
    fieldFlags: 65536,
    readOnly: false,
    required: false,
    hidden: false,
    checkBox: false,
    radioButton: false,
    pushButton: true,
    isTooltipOnly: true,
  },
  {
    annotationFlags: 4,
    borderStyle: {
      width: 0,
      style: 1,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    },
    color: { "0": 0, "1": 0, "2": 0 },
    backgroundColor: null,
    borderColor: null,
    rotation: 0,
    contentsObj: { str: "", dir: "ltr" },
    hasAppearance: false,
    id: "6873R",
    modificationDate: null,
    rect: [169.2, 169.2, 273.6, 180],
    subtype: "Widget",
    hasOwnCanvas: true,
    noRotate: false,
    noHTML: false,
    annotationType: 20,
    fieldName: "topmostSubform[0].Page1[0].Button1[3]",
    actions: null,
    fieldValue: "",
    defaultFieldValue: null,
    alternativeText: "taxpayeradvocate.irs.gov.",
    defaultAppearanceData: {
      fontSize: 10,
      fontName: "Arial-BoldMT",
      fontColor: { "0": 0, "1": 0, "2": 0 },
    },
    fieldType: "Btn",
    fieldFlags: 65536,
    readOnly: false,
    required: false,
    hidden: false,
    checkBox: false,
    radioButton: false,
    pushButton: true,
    isTooltipOnly: true,
  },
  {
    annotationFlags: 4,
    borderStyle: {
      width: 0,
      style: 1,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    },
    color: { "0": 0, "1": 0, "2": 0 },
    backgroundColor: null,
    borderColor: null,
    rotation: 0,
    contentsObj: { str: "", dir: "ltr" },
    hasAppearance: false,
    id: "6874R",
    modificationDate: null,
    rect: [86.4, 86.4, 241.2, 97.2],
    subtype: "Widget",
    hasOwnCanvas: true,
    noRotate: false,
    noHTML: false,
    annotationType: 20,
    fieldName: "topmostSubform[0].Page1[0].Button1[4]",
    actions: null,
    fieldValue: "",
    defaultFieldValue: null,
    alternativeText: "www.taxpayeradvocate.irs.gov/litcmap.",
    defaultAppearanceData: {
      fontSize: 10,
      fontName: "Arial-BoldMT",
      fontColor: { "0": 0, "1": 0, "2": 0 },
    },
    fieldType: "Btn",
    fieldFlags: 65536,
    readOnly: false,
    required: false,
    hidden: false,
    checkBox: false,
    radioButton: false,
    pushButton: true,
    isTooltipOnly: true,
  },
  {
    annotationFlags: 4,
    borderStyle: {
      width: 0,
      style: 1,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    },
    color: { "0": 0, "1": 0, "2": 0 },
    backgroundColor: null,
    borderColor: null,
    rotation: 0,
    contentsObj: { str: "", dir: "ltr" },
    hasAppearance: false,
    id: "6875R",
    modificationDate: null,
    rect: [270, 86.4, 338.4, 97.2],
    subtype: "Widget",
    hasOwnCanvas: true,
    noRotate: false,
    noHTML: false,
    annotationType: 20,
    fieldName: "topmostSubform[0].Page1[0].Button1[5]",
    actions: null,
    fieldValue: "",
    defaultFieldValue: null,
    alternativeText: "Publication 4134.",
    defaultAppearanceData: {
      fontSize: 10,
      fontName: "Arial-BoldMT",
      fontColor: { "0": 0, "1": 0, "2": 0 },
    },
    fieldType: "Btn",
    fieldFlags: 65536,
    readOnly: false,
    required: false,
    hidden: false,
    checkBox: false,
    radioButton: false,
    pushButton: true,
    isTooltipOnly: true,
  },
];

const t = {
  children: [
    {
      role: "Part",
      children: [
        {
          role: "L",
          children: [
            {
              role: "LI",
              children: [
                {
                  role: "Lbl",
                  children: [{ type: "content", id: "p11R_mc0" }],
                },
                {
                  role: "LBody",
                  children: [{ type: "content", id: "p11R_mc1" }],
                },
              ],
            },
            {
              role: "L",
              children: [
                {
                  role: "LI",
                  children: [
                    {
                      role: "Lbl",
                      children: [{ type: "content", id: "p11R_mc2" }],
                    },
                    {
                      role: "LBody",
                      children: [
                        { type: "content", id: "p11R_mc3" },
                        {
                          role: "Span",
                          children: [
                            {
                              role: "Link",
                              children: [
                                { type: "object", id: "217R" },
                                { type: "content", id: "p11R_mc4" },
                              ],
                            },
                            { type: "content", id: "p11R_mc5" },
                          ],
                        },
                        { type: "content", id: "p11R_mc6" },
                      ],
                    },
                  ],
                },
                {
                  role: "LI",
                  children: [
                    { type: "content", id: "p11R_mc7" },
                    {
                      role: "Span",
                      children: [
                        {
                          role: "Link",
                          children: [
                            { type: "object", id: "216R" },
                            { type: "content", id: "p11R_mc8" },
                          ],
                        },
                        { type: "content", id: "p11R_mc9" },
                      ],
                    },
                    { type: "content", id: "p11R_mc10" },
                  ],
                },
              ],
            },
            {
              role: "LI",
              children: [
                {
                  role: "Lbl",
                  children: [{ type: "content", id: "p11R_mc11" }],
                },
                {
                  role: "LBody",
                  children: [{ type: "content", id: "p11R_mc12" }],
                },
              ],
            },
            {
              role: "LI",
              children: [
                {
                  role: "Lbl",
                  children: [{ type: "content", id: "p11R_mc13" }],
                },
                {
                  role: "LBody",
                  children: [{ type: "content", id: "p11R_mc14" }],
                },
              ],
            },
          ],
        },
        {
          role: "P",
          children: [
            { type: "content", id: "p11R_mc15" },
            { type: "content", id: "p11R_mc16" },
          ],
        },
        {
          role: "L",
          children: [
            {
              role: "LI",
              children: [
                {
                  role: "Lbl",
                  children: [{ type: "content", id: "p11R_mc17" }],
                },
                {
                  role: "LBody",
                  children: [{ type: "content", id: "p11R_mc18" }],
                },
              ],
            },
            {
              role: "L",
              children: [
                {
                  role: "LI",
                  children: [
                    {
                      role: "Lbl",
                      children: [{ type: "content", id: "p11R_mc19" }],
                    },
                    {
                      role: "LBody",
                      children: [{ type: "content", id: "p11R_mc20" }],
                    },
                  ],
                },
                {
                  role: "LI",
                  children: [{ type: "content", id: "p11R_mc21" }],
                },
              ],
            },
            {
              role: "L",
              children: [
                {
                  role: "LI",
                  children: [
                    {
                      role: "Lbl",
                      children: [{ type: "content", id: "p11R_mc22" }],
                    },
                    {
                      role: "LBody",
                      children: [{ type: "content", id: "p11R_mc23" }],
                    },
                  ],
                },
                {
                  role: "L",
                  children: [
                    {
                      role: "LI",
                      children: [
                        {
                          role: "Lbl",
                          children: [{ type: "content", id: "p11R_mc24" }],
                        },
                        {
                          role: "LBody",
                          children: [{ type: "content", id: "p11R_mc25" }],
                        },
                      ],
                    },
                    {
                      role: "LI",
                      children: [
                        {
                          role: "Lbl",
                          children: [{ type: "content", id: "p11R_mc26" }],
                        },
                        {
                          role: "LBody",
                          children: [{ type: "content", id: "p11R_mc27" }],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  role: "Root",
};
