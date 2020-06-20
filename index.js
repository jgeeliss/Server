

var http = require("http")

function onRequest(request,response) {
    response.writeHead(200, {"content-Type": "text/plain"})
    response.write("Hello World")
    response.end()
}

http.createServer(onRequest).listen(8888)


/*var server = require ("./server");
var router = require ("./router");
var requestHandlers = require ("./requestHandlers");

var handlesList = {}
handlesList["/"] = requestHandlers.start;
handlesList["/start"] = requestHandlers.start;
handlesList["/upload"] = requestHandlers.upload;

server.startupserver(router.runrouter, handlesList);*/