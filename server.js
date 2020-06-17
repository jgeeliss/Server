var http = require("http");
var url = require("url");

function start(route, handleList){
	
function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("request for " + pathname + " received");
	route(handleList, pathname, response);
	
	//response.writeHead(200, {"Content-Type": "text/plain"});
	//response.write("test reply server zondag");
	//response.end();
};
console.log("server has started");

http.createServer(onRequest).listen(8888);

}

exports.startupserver = start;