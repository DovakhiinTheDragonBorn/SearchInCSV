import { findInCSV } from "./utils.js";
import fs from "fs";

try {
  const args = process.argv.slice(2);
  const [file, columnIndex, searchKey] = args;
  if (fs.existsSync(file)) {
    const fileSplit = file.split(".");
    if (fileSplit[fileSplit.length - 1] === "csv")
      findInCSV(file, columnIndex, searchKey);
    else console.log("Please Select a CSV File");
  } else console.log("File Not Found");
} catch (error) {
  console.log(`error caught: ${error}`);
}
