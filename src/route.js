let printMainPage = require('./commands/goto-main-page');
let defaultMapping = {
    "#": printMainPage
};
let mapping = defaultMapping;
// console.log(mapping);
function route(input) {
    let command = mapping[input] || mapping['#'];
    let response = command(input);
    // console.log(response);
    if (response.error) {
        return {
            text: response.error
        };
    }
    if (response.reset) {
        mapping = defaultMapping;
        return {
            text: response.text,
            rerun: true
        };
    }
    if (response.newMapping) {
        mapping = response.newMapping;
        return {
            text: response.text
        };
    }
    return {
        text: response.text
    };
}
// console.log(route(1));
module.exports = route;