import csv from "csv-parser";
import fs from "fs";

export const findInCSV = async (file, columnIndex, searchKey) => {
  try {
    const csvData = [];
    let results = "";

    fs.createReadStream(file)
      .pipe(csv({ headers: false }))
      .on("error", (error) => {
        console.log(`error caught: ${error}`);
      })
      .on("data", (data) => csvData.push(data))
      .on("end", () => {
        const filteredData = csvData.filter(
          (item) => item[columnIndex] === searchKey
        );
        filteredData.forEach((item) => {
          const itemString = `${Object.values(item).join(",")};\n`;
          results += itemString;
        });
        if (results) console.log(results);
        else console.log("Data not found");
      });
  } catch (error) {
    console.log(`error caught: ${error}`);
  }
};
