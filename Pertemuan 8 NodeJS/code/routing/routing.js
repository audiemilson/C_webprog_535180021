const routeResponseMap = {
    "/info":"<h1>Info page</h1>",
    "/contact":"<h1>Contact Us</h1>",
    "/about":"<h1>Learn More About Us</h1>",
    "/hello":"<h1>Say hello by emailing us here</h1>",
    "/error":"<h1>Sorry the page you are looking for is not here</h1>"
}

const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');
let app = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html"});

    if(routeResponseMap[req.url]){
        res.end(routeResponseMap[req.url]);
    }else{
        res.end("<h1>Welcome!</h1>");
    }
}).listen(Number(port));

console.log(`The server has started and is listening on port number : ${port}`);