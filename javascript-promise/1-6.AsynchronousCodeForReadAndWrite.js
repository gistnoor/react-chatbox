var fs = require('fs');
var timestamp = new Date().toString();

fs.writeFile('data.txt', timestamp, function (err) {
    if(err) throw err;

    fs.readFile('data.txt', function (err, contents){
        if (err) throw err;
        console.log('Checking the contents');
        console.log( contents == timestamp );
    });
});

console.log('I am the last line of the scripts');


:-> output
"I am the last line of the scripts"
"Checking the contents"
"boolean value of contents == timestamp"
