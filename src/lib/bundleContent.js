const fs = require("fs/promises");

const folders = ["combos", "additionalmenu", "calendar"];

let fileNames = {};

const readFiles = async () => {
  for (let folder of folders) {
    fileNames[folder] = await fs.readdir(`public/content/_${folder}`, () => {
      
    });
  }
};

readFiles().then(() => {
  let data = JSON.stringify(fileNames);
  fs.writeFile("src/lib/filenames.json", data, (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });
});
