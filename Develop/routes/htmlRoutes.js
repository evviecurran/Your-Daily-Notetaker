const path = require('path');
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(_dirname, '../Professional-noteTaker/Develop/public/index.html'));

    });
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(_dirname, '../Professional-noteTaker/Develop/public/notes.html'));
    });
};