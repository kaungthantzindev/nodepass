const fs = require("fs");
const path = require("path");

function savePassword(password, filename = "password.txt") {
    const filepath = path.join(__dirname, "../", filename)
    fs.appendFile(filepath, password + "\n", 'utf-8', () => {
        console.log(`file saved to ${filename}`)
    })
}

module.exports = savePassword