"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
var folders = ["models", "queries", "scripts"];
class GetAllFiles {
    constructor() {
        this.getPackageDir = () => {
            folders.map(folderName => {
                return path.join(process.cwd(), folderName);
            });
        };
    }
}
exports.GetAllFiles = GetAllFiles;
exports.default = new GetAllFiles();
//# sourceMappingURL=index.js.map