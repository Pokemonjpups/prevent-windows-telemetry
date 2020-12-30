const fs = require('fs');
const path = require('path');
/**
 * @type {{processList: string[], log?: boolean, testMode?: boolean}}
 */
module.exports = JSON.parse(fs.readFileSync(path.join(__dirname, '../config.json')).toString());