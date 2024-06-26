const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json(), express.urlencoded({ extended: true }),cors());


require("dotenv").config()

require("./config/config.mongoose")
const PORT = process.env.PORT

const routes = require("./routes/product.routes")
routes(app)

app.listen(PORT, () => {
    console.log(`Connecting to our server with success to this PORT : ${PORT}  🌴🌴🌴🌴`)
})