let {printZipCode} = require('../core/barcode-to-zipcode');
function barcodeConvert(barcode) {
    let zipcode = printZipCode(barcode);
    if (zipcode.startsWith('invalid input')) {
        return {
            error: 'please give right barcode'
        };
    } else {
        return {
            zipcode,
            reset: true
        };
    }
}
 // console.log(barcodeConvert('|:::||::|:|::||::|::|:|:|::|:|:|'))
module.exports = barcodeConvert;