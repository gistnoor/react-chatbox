// Assume bluebird has been loaded using <script src="bluebird.js"></script>
var Bluebird = Promise.noConflict(); // restore previous reference to promise
var nativePromise = Promise.resolve(); // Native Promise
var b = Bluebird.resolve(nativePromise); // Wrap native promise with bluebird promise

// forec eventloop to run
setTimeout(function() {
    console.log(' Pending ?' + b.isPending()); // pending? false
    console.log( 'Fullfilled ? ' + b.isFulFilled()); // Fulfilled? true
    console.log(' Rejected? ' + b.isRejected()); // Rejected? false
}, 0);
