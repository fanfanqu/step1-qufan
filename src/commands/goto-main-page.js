let commandsZipcodeToBarcode = require('./goto-zipcode-to-barcode-page');
let commandsBarcodeToZipcode =require('./goto-barcode-to-zipcode-page')
let commandsExit = require('./exit');
let commandsInvalidInput = require('./invalidinput');
function printMainPage(input) {
    return {
        text: `
            1.please input zip code to barcode.
            2.please input barcode to zip code.
            3.exit.
            please input you choice(1~3).`,
        newMapping: {
            '1': commandsZipcodeToBarcode,
            '2':commandsBarcodeToZipcode,
            '3':commandsExit,
            '#':commandsInvalidInput
        }
    }
}
 // console.log(printMainPage(1));
module.exports = printMainPage;