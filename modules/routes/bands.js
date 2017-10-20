var router = require('express').Router();
var bands = ['band1', 'bND2', 'band3'];

router.get('/', function(req, res) {
    console.log('in bands get router');
    res.send(bands);
});

router.post('/', function(req, res){
    console.log('in bands post router', req.body);
    bands.push(req.body);
    res.sendStatus(200); 
});

module.exports = router;