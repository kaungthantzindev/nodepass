const program = require('commander');
const createPassword = require('./src/createPassword');

program.version("1.0.0").description("CLI password generator");

program
    .option('-l, --length <number> ', 'length of password', '6')
    .option('-s, --save ', 'save password')
    .option('-nn, --no-number ', 'password without number')
    .option('-ns, --no-symbol ', 'password without symbol')
    .parse();

const { length, number, symbol } = program.opts();

createPassword(length, number, symbol)