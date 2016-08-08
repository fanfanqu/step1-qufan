let readline = require('readline');
let route = require('./route');
function main(line) {
    let response = route(line).text;
     console.log(response);
    if (response.rerun) {
        main(line);
    }
}
function spy(line) {
    let rl = readline.createInterface({
        input: process.stdin,
        output:process.stdout,
        terminal:false
    });
    rl.on('line', function (line) {
        main(line);
    });
}
main();
module.exports =spy;