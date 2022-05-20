const program = require('commander');
const createPassword = require('./src/createPassword');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const savePassword = require('./src/savePassword');

program.version("1.0.0").description("CLI password generator");

program
    .option('-l, --length <number> ', 'length of password', '10')
    .option('-s, --save <filename> ', 'save password')
    .option('-nn, --no-number ', 'password without number')
    .option('-ns, --no-symbol ', 'password without symbol')
    .parse();

const { length, save, number, symbol } = program.opts();

const password = createPassword(length, number, symbol);

clipboardy.writeSync(password)

if (save) {
    savePassword(password, save);
}

console.log(chalk.yellow(`password: ${password}`));
console.log(chalk.greenBright("copied to clipboard"))