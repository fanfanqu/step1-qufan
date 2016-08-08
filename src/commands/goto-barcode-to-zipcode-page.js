function commandsBarcodeToZipcode(input) {
    return {
        text: 'please input barcode',
        newMapping:{
            '#': require('./barcodetozipcode')
        }
    };
}
// console.log(commandsBarcodeToZipcode(2));
module.exports = commandsBarcodeToZipcode;