'use strict';
let _ = require('lodash');
const allCodes = {"||:::":0, ":::||":1, "::|:|":2, "::||:":3, ":|::|":4, ":|:|:":5,
    ":||::":6, "|:::|":7, "|::|:":8, "|:|::":9};
function judgeBarcode(barcode) {
    let array = barcode.slice(1, barcode.length - 1).split('').map(n=> {
        return n === "|" ? 1 : 0;});
    let barcodeArray1 = _(array).chunk(5).map(n=>_.sum(n) === 2);
    let correctNumber = [30, 50].includes(array.length);
    return (correctNumber && barcodeArray1 && barcode.startsWith('|') && barcode.endsWith('|'));
}
function getZipCode(allCodes, barcode) {
    let barcodes = _.chain(barcode).slice(1, barcode.length - 1).chunk(5)
        .map(n=>n.join(''))
        .value();
    return barcodes.map(code=>allCodes[code]);
}
function judgeCheckCode(zipCode) {
    let sum = _.sum(zipCode);
    return sum % 10 === 0;
}
function buildZipCodeString(zipCode) {
    zipCode.pop();
    return zipCode.join('');
}
function printZipCode(barcode) {
    if (judgeBarcode(barcode)) {
        let zipCode = getZipCode(allCodes, barcode);
        if (judgeCheckCode(zipCode)) {
            return buildZipCodeString(zipCode);
        }
    }
    return 'please input right barcode';
}
module.exports = {
    judgeBarcode,
    getZipCode,
    judgeCheckCode,
    buildZipCodeString,
    printZipCode
};


