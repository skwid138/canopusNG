var router = require('express').Router();
var bands = ['band1', 'bND2', 'band3'];

router.get('/', function(req, res) {
    console.log('in bands get router');
    res.send(bands);
});

module.exports = router;