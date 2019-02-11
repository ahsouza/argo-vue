const
 app = require('./express.config')(),
 port = process.env.PORT || 8080

app.listen(port, () => { console.log(`Server listening in port ${port}`)})