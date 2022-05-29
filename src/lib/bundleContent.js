const fs = require("fs");

const folders = ["combos", "additionalmenu", "calendar"];

let content = {};
let files = [];
let folder;
let fileObjs;
let dirent;

for (folder of folders) {
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
  files = dirent
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);
  fileObjs = [];
  files.forEach((file) => {
    // console.log(file);
    let rawdata = fs.readFileSync(`public/content/_${folder}/${file}`);
    let fileObj = JSON.parse(rawdata);
    fileObjs.push(fileObj);
  });
  content[folder] = fileObjs;
}

let data = JSON.stringify(content);

fs.writeFileSync("src/lib/CMSData.json", data, (err) => {
  if (err) throw err;
});

console.log("Data written to file");
