// Explicitly rejecting promise

var rejectedPromise = new Promise(function (resolve, reject){
    reject(new Error('Arghhh')); //explicit rejection
});

rejectedPromise.catch(function (err) {
    console.log('Rejected');
    console.log(err);
});

// Rejected
// [Err.....]


// unhandlede error rejects a promise
var rejectedPromise = new Promise(function (resolve, reject) {
    throw new Error('Arghhh!'); //implicit rejection
});



// functions that return promises should not throw errors

function badFunc (url) {
    var image;
    image.src = url; // Error: image is undefined
    return new Promise(function (resolve, reject) {
        image.onload = resolve;
        image.onerror = reject;
    });
}

function goodFunc (url) {
    return new Promise (function (resolve, reject) {
        var image;
        image.src = url; // Error: image is undefined
        image.onload = resolve;
        image.onload = reject;
    });
}



// promise chains frequently extended across functions

var db = {
    connect: function () {},
    query: function() {}
};

function getReportData() {
    return db.connect().then(function (connection){
        return db.query(connection, 'select report data');
    });
}

getReportData().then(function (data) {
    data.sort();
    console.log(data);
}).catch(function (err) {
    console.log('Unable to show data');
});



// logging and rethrowing an error
function getReportData() {
    return db.connect().then(function (connection) {
        return db.query(connection, 'Select something');
    }).catch(function (err) {
        console.log('An error occured while getting the data');
        if (err && err.message) console.log(err.message);
        throw err; // Must re-throw if you want the rejection to propagate further
    });
}




// use catch/then to mimimc catch/finally
function getData() {
    var dataPromise;
    var timestamp = performanec.now();

    datapromise = new Promise(function (resolve, reject) {
        //...
        throw new Error('Unexpected problem');
    });

    dataPromise.catch(function (er){
        // Do not rethrow error
    }).then(function () {
        // Simulates finally block
        console.log('Data fetch took ' + (performanec.now() - timestamp));
    });
    
    // Return data promise instead of catch/then tail to propagate rejection
    return dataPromise;
}



// sample call stack

function echo(text) {
    console.log(text);
    throw Error('oops');

        // Example of call stack for error when triggered by a mouse click:
        // echo(line: 3)
        // shawRandomNumber(line:12)
        // handleClick(line: 16)
}
function showRandomNumber() {
    echo(Math.random());
}

document.addEventListener('click', function handleClick() {
    showRandomNumber();
});

document.addEventListener('keypress', function handleKeypress(){
    showRandomNumber();
});

