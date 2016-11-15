require('bluebird');
// using the enclosing scope through function.bind() or aliasing
var printer = {
    pageSize: 'US LETTER',

    connect: function() {
        // Return a promise that is fulfilled when a connection 
        // to the printer is established
    },

    configure: function(pageSize) {
        return this.connect().then(function () {
            console.log('setting page size to ' + pageSize);
            this.pageSize = pageSize;
        }.bind(this)); // usinge bind to set the context
    },

    print: function (job) {
        //Aliasing the outer context
        //_this, that and self are some other common alias name
        var me = this;

        return this.connect().then(function () {
            console.log('Printing job using page size ' + me.pageSize);
        });
    }
}

printer.configure('A4').then(function () {
    return printer.print('Test page');
});

// Setting page size A4
// Printing job using page size A4
