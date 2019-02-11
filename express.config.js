const 
 express = require('express'),
 serveStatic = require("serve-static"),
 path = require('path')
module.exports = () =>{
 app = express()
 app.use(serveStatic(path.join(__dirname, 'dist')))

 return app
}