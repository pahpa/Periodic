'use babel';
/* @flow */

import fs from "fs";
import path from "path";

function isPathValid(filePath: string): boolean {
  return [ ".sqlite", ".db" , ".sqlite3"].indexOf(path.extname(filePath)) !== -1 && fs.existsSync(filePath);
}

export default { isPathValid };
