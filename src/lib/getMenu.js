export let fileNames = [];

import * as fs from "fs";

// const fs = require("fs");

fs.readdir("../../public/content/_menu", (err, files) => {
  if (err) {
    return console.log(`Unable to scan directory: ${err}`);
  }

  files.forEach((file) => {
    fileNames.push(file);
  });
});
