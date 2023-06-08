import { exportedForTesting, messages } from "../src/app.js";

import {
  cleanDocumentMetadata,
  documentMetadataWithoutTitle,
  documentMetadataWithoutLanguage,
  structTree,
  structTreeNoAltText,
  structTreeNoFigures,
} from "./constants.js";

const {
  checkTitle,
  checkPermissions,
  checkLanguage,
  checkFigures,
  checkTaggedDocument,
} = exportedForTesting;

describe("Test app", () => {
  let messages: messages;

  beforeEach(() => {
    messages = {};
  });

  describe("Test document properties", () => {
    describe("checkTaggedDocument", () => {
      it("should set correct messages when document is untagged", () => {
        const expectedMessages = checkTaggedDocument(messages, {});
        expect(expectedMessages[0].high).toContain(
          "No source tree generated. Check that document is tagged and that it is not a scanned page or image-only PDF."
        );
      });
      it("should set no messages when document is tagged", () => {
        const expectedMessages = checkTaggedDocument(messages, structTree);
        expect(expectedMessages[0].high).toHaveLength(0);
      });
    });
    describe("checkTitle", () => {
      it("should set correct messages when title present", () => {
        const expectedMessages = checkTitle(messages, cleanDocumentMetadata);
        expect(expectedMessages[0].high).toHaveLength(0);
        expect(expectedMessages[0].low).toContain(
          "Check that filename identifies the document or its purpose"
        );
      });

      it("should set correct messages when no title present", () => {
        const expectedMessages = checkTitle(
          messages,
          documentMetadataWithoutTitle
        );
        expect(expectedMessages[0].high).toContain(
          "PDF must have descriptive name"
        );
        expect(expectedMessages[0].low).toContain(
          "Check that filename identifies the document or its purpose"
        );
      });
    });

    describe("checkPermissions", () => {
      it("should set correct messages when accessible copy permissions set", () => {
        const permissions = [4, 16, 2048];
        const expectedMessages = checkPermissions(messages, permissions);
        expect(expectedMessages[0].high).toHaveLength(0);
      });

      it("should set correct messages when no permissions set", () => {
        const permissions = null;
        const expectedMessages = checkPermissions(messages, permissions);
        expect(expectedMessages[0].high).toHaveLength(0);
      });

      it("should set correct messages when accessible copy permissions set", () => {
        const permissions = [4, 16];
        const expectedMessages = checkPermissions(messages, permissions);
        expect(expectedMessages[0].high).toContain(
          "Content copying for accessibility permissions must be enabled"
        );
      });
    });

    describe("checkLanguage", () => {
      it("should set correct messages when document language is provided", () => {
        const expectedMessages = checkLanguage(messages, cleanDocumentMetadata);
        expect(expectedMessages[0].high).toHaveLength(0);
      });

      it("should set correct messages when document language is not provided", () => {
        const expectedMessages = checkLanguage(
          messages,
          documentMetadataWithoutLanguage
        );
        expect(expectedMessages[0].high).toContain(
          "Document language must be set"
        );
      });
    });
  });

  describe("Object", () => {
    describe("Images and other objects have alternative text", () => {
      describe("checkFigures", () => {
        it("should set correct messages when figures have alt text", () => {
          const expectedMessages = checkFigures(messages, structTree, 1);

          expect(expectedMessages[1].high).toHaveLength(0);
          expect(expectedMessages[1].low).toContain(
            "Check that all captions describe the purpose/function of associated images/objects."
          );
          expect(expectedMessages[1].low).toContain(
            "Check that all descriptive text conveys the purpose and/or function of the image/object."
          );
        });

        it("should set correct messages when figures do not have alt text", () => {
          const expectedMessages = checkFigures(
            messages,
            structTreeNoAltText,
            1
          );

          expect(expectedMessages[1].high).toContain(
            "All images and figures must have alternative text that describes its purpose/function."
          );
          expect(expectedMessages[1].low).toContain(
            "Check that all captions describe the purpose/function of associated images/objects."
          );
          expect(expectedMessages[1].low).toContain(
            "Check that all descriptive text conveys the purpose and/or function of the image/object."
          );
        });

        it("should only set messages once", () => {
          const expectedMessages = checkFigures(
            messages,
            structTreeNoAltText,
            1
          );

          expect(expectedMessages[1].high).toHaveLength(1);
          expect(expectedMessages[1].low).toHaveLength(2);
        });

        it("should not set messages if no figures in tree", () => {
          const expectedMessages = checkFigures(
            messages,
            structTreeNoFigures,
            1
          );
          expect(expectedMessages[1]).toBeFalsy();
        });
      });
    });
  });
});
