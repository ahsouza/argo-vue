const 
 express = require('express'),
 serveStatic = require("serve-static"),
 path = require('path'),
 app = express()

app.use(serveStatic(path.join(__dirname, '.')))
const port = process.env.PORT || 80
app.listen(port)