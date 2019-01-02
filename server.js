const http =require('http')
const app = require('./app')
const port =process.env.port || 3001
const server =http.createServer(app)
server.listen(port , console.log("Server Is Up And Ready For You  Baby -_^"))