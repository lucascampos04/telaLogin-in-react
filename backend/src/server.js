const express = require('express')
const cors = require('cors')
const routes = require("./routes")
const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

const port = 8080

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))