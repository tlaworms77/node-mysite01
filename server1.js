let connect = require('connect');

let logger = function(reg, resp, next){
    console.log('%s %s', reg.method, reg.url);
    next();
}

let hello = function(req, resp, next){
    resp.setHeader('Content-Type', 'text/html');
    resp.end('<h1>Hello World</h1>');
    next()
}

let app = connect();
app.use(hello, null);
app.use(logger, null);
app.listen( 3000 );