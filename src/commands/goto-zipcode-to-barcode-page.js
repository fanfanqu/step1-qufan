function commandsZipcodeToBarcode(input) {
    return {
        text: 'please input zip code ',
        newMapping: {
            '#': require('./zipcodetobarcode')
        }
    };
}
  // console.log(commandsZipcodeToBarcode(1));
module.exports = commandsZipcodeToBarcode;