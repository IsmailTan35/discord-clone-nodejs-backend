// import dotenv from 'dotenv'
// import con  from'./app_server/models/db.mjs'
import express from"./app_server/helper/helperExpress.mjs"
import { 
    // httpsServer,
    httpServer, 
    // webSocket
} from'./app_server/helper/helperProtocol.mjs'
// import controllerApi from'./app_server/controller/controllerApi.mjs'
// import controlleWebsocket from'./app_server/controller/controllerWebsocket.mjs'

// const env = dotenv.config()
const app = express()
const server = httpServer(app,3000)

// const socket = webSocket(server,app)

// controllerApi(app,"con")
// controlleWebsocket(socket,"con")
