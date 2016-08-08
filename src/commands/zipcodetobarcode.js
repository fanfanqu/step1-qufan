let {printBarcode} = require('../core/zipcode-to-barcode');
function zipcodetobarcode(zipcode) {
    let barcode = printBarcode(zipcode);
    if (barcode.startsWith('invalid number')) {
        return {
            error: 'please input right zip code'
        };
    } else {
        return {
            barcode,
            reset: true
        }
    }

}
 // console.log(zipcodetobarcode('1245'));
module.exports = zipcodetobarcode;