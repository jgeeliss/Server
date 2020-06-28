

var server = require ("./server");
var router = require ("./router");
var requestHandlers = require ("./requestHandlers");

var handlesList = {}
handlesList["/"] = requestHandlers.start;
handlesList["/start"] = requestHandlers.start;
handlesList["/upload"] = requestHandlers.upload;

server.startupserver(router.runrouter, handlesList);