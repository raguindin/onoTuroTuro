const fs = require("fs");

const folders = ["combos", "additionalmenu", "calendar"];
const files = ["menusettings", "ourstory", "settings"];

let content = {};
let fileNames = [];
let fileObjs;
let dirent;
let filent;

for (let folder of folders) {
  try {
    dirent = fs.readdirSync(`public/content/_${folder}`, {
      withFileTypes: true,
    });
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`Folder "${folder}" not found, continuing...`);
      content[folder] = [];
      continue;
    } else {
      throw err;
    }
  }
  fileNames = dirent
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);
  fileObjs = [];
  fileNames.forEach((file) => {
    // console.log(file);
    let rawdata = fs.readFileSync(`public/content/_${folder}/${file}`);
    let fileObj = JSON.parse(rawdata);
    fileObjs.push(fileObj);
  });
  content[folder] = fileObjs;
}

for (let file of files) {
  try {
    fileData = fs.readFileSync(`public/content/${file}.json`);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`file "${file}" not found, continuing...`);
      content[file] = {};
      continue;
    } else {
      throw err;
    }
  }
  let fileObj = JSON.parse(fileData);
  content[file] = fileObj;
}

let data = JSON.stringify(content);

fs.writeFileSync("src/lib/CMSData.json", data, (err) => {
  if (err) throw err;
});

console.log("Data written to file");
