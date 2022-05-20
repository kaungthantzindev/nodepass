const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '0123456789';
const sym = '!@#$%^&*_-+=';

function createPasssword(length, number, symbol) {
    let char = alpha;
    number && (char += num);
    symbol && (char += sym);
    return generateRandom(length, char);
}

function generateRandom(passlength, char) {
    let password = "";
    for (let i = 0; i < passlength; i++) {
        password += char.charAt(Math.floor(Math.random() * char.length))
    }
    return password;
}

module.exports = createPasssword;