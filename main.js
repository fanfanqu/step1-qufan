let route = require('./route');
function main() {
    let response = route();
    console.log(response.text);
}
main();
module.exports = main;
