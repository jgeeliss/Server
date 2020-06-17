function route(handleList, pathname, response) {
	console.log("about to route a request for " + pathname);
	
	if (typeof handleList[pathname] === 'function') //checkt of het type van de waarde een functie is
	{
		handleList[pathname](response); //zo ja dan die functie gebruiken! Deze functies zitten als properties in object handleList!!
	}
	else{
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end;
		}
}
	
exports.runrouter = route;