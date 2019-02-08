const 
 express = require('express'),
 serveStatic = require("serve-static"),
 path = require('path'),
 app = express()

app.use(serveStatic(path.join(__dirname, 'dist')))
const port = process.env.PORT || 5000
app.listen(port)