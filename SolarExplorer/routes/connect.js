var mongoose = require('mongoose');

var connect = {

    connected: false,

    simpleConnect: function() {
        var url = 'mongodb://127.0.0.1:27017/renew';
        mongoose.connect(url);
        connect.connected = true;
        // This part is optional
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connected = true;
            console.log('Opened connection to local MongoDb');
        });
    },

    mlabConnect: function() {
        connect.connected = true;
        var userName = 'rasmniel';
        var password = '1337haxxor';
        var siteAndPort = 'ds013004.mlab.com:13004';
        var databaseName = 'prog219-nielsen';
        var url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
        mongoose.connect(url);
        connect.connected = true;
        // This part is optional
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connected = true;
            console.log('Opened connection to MLab');
        });
    },

    doConnection: function(useSimple) {
        var connectType = useSimple || true;
        if (connectType) {
            connect.simpleConnect();
        }
        else {
            connect.mlabConnect();
        }
    }
};

module.exports = connect;