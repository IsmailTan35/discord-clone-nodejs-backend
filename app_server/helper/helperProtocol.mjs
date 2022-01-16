import { Server } from "socket.io";
import {createServer as httpCreate} from "http";
import {createServer as httpsCreate} from "https";
import * as fs from'fs';


const httpServer = (app,port) =>{
	const httpServer = httpCreate((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello World\n');
	  })
	httpServer.listen(port, () =>{
		console.log((new Date()) + ' Server is listening on port ' + port);
	});
	return httpServer
}

const httpsServer = (app,port) =>{
	const privateKey = null
	const certificate = null
	const ca = null
	
	const credentials = {
		
	};
	const httpsServer = httpsCreate(credentials,app)
	httpsServer.listen(port, () =>{
		console.log((new Date()) + ' Server is listening on port ' + port);
	});
	return httpsServer
}

const webSocket = (httpServer,app) =>{
    const io = new Server(httpServer, { 
		cors: {
			origin: "*",
		  },
        app
    });
    return io;
}

export {
    httpServer,
    httpsServer,
    webSocket
}