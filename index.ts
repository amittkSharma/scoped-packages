import * as path from "path"
var folders = ["models", "queries", "scripts"]

export class GetAllFiles {
  getPackageDir = () => {
    folders.map(folderName => {
      return path.join(process.cwd(), folderName)
    })
  }
}

export default new GetAllFiles()
