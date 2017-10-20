// requires
var express = require( 'express' );
var app = express();
var index  = require( './modules/routes/index' );
var bands = require('./modules/routes/bands');
var bodyParser = require('body-parser');

//uses
app.use( express.static( 'public' ) );
app.use( '/', index );
app.use('/bands', bands);
app.use(bodyParser.json());

// globals
var port = 5318;

// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end spin up