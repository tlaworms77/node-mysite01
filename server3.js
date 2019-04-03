let connect = require('connect');
let connectRoute = require('connect-route');
let url = require('url');
let serveStatic = require('serve-static');
let fs = require('fs');

let app = connect();
app.use(serveStatic(__dirname + "/htdocs"), null);
app.use(connectRoute(function(router){
    router.get('/', function (req, resp) {
        fs.readFile( __dirname + "/htdocs/main/index.html", "utf-8", function (error, data) {
            resp.writeHead(200, {
                'Content-Type': 'text/html'
            });
            resp.end( data );
        } )
    });
}), null);

app.listen( 4000 );