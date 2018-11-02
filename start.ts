import * as path from "path";
const folders = ["models", "queries", "scripts"];

export function getAllDomainInfo() {
  const domainInfo = {};
  folders.map(folderName => {
    const dirPaths = path.join(process.cwd(), folderName);
    domainInfo[folderName] = dirPaths;
  });
  console.log("Complete Domain Info", domainInfo);
}

// function getAllFilesFromDir(directoryPath) {
//   return fs.readdirSync(directoryPath);
// }
