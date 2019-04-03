let connect = require('connect');
let connectRoute = require('connect-route');
let url = require('url');


let requestHandlers = function(router){
    // get방식의 포워딩(java) -- node mapping
    router.get('/', function (req, resp) {
        resp.setHeader('Content-Type', 'text/html');
        resp.end('<h1>Main</h1>');
    });

    router.get('/hello', function (req, resp) {
        let query = url.parse(req.url, true).query;
        console.log(query);

        resp.setHeader('Content-Type', 'text/html');
        resp.end('<h1>Hello</h1>');
    });

    // pathVariable 처리
    router.get('/board/view/:no', function (req, resp) {
        console.log(req.params['no']);

        resp.setHeader('Content-Type', 'text/html');
        resp.end('<h1>board-view</h1>');
    });

    //json 응답 - api
    router.get('/api/user/checkemail', function (req, resp) {
        let result = {
            result: true,
            data: "exists"
        }

        resp.setHeader('Content-Type', 'application/json');
        resp.end( JSON.stringify(result) );
    });

}

let app = connect();
app.use(connectRoute(requestHandlers), null);

app.listen( 3000 );