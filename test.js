const IndentBrackets = require('./');
const fs = require('fs');

fs.createReadStream('C:\\Users\\Artem\\.IntelliJIdea2018.3\\config\\scratches\\scratch_139.txt')
    .pipe(new IndentBrackets())
    .pipe(fs.createWriteStream('./indented.txt'));