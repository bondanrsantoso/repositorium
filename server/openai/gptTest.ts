import { TextLoader } from "langchain/document_loaders/fs/text";
import path from "path";

const sampleTextLoader = new TextLoader(
  path.join(__dirname, "..", "..", "test", "sampleprojectcontract.html")
);

sampleTextLoader.load().then((document) => {
  console.log("Document Loaded");
  console.log(document);
});
