"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const folders = ["models", "queries", "scripts"];
function getAllDomainInfo() {
    const domainInfo = {};
    folders.map(folderName => {
        const dirPaths = path.join(process.cwd(), folderName);
        domainInfo[folderName] = dirPaths;
    });
    console.log("Complete Domain Info", domainInfo);
}
exports.getAllDomainInfo = getAllDomainInfo;
// function getAllFilesFromDir(directoryPath) {
//   return fs.readdirSync(directoryPath);
// }
//# sourceMappingURL=start.js.map