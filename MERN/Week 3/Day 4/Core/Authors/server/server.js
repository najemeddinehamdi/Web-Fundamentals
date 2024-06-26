const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json(), express.urlencoded({ extended: true }),cors());


require("dotenv").config()

require("./config/mongoose.config")
const PORT = process.env.PORT

require("./routes/author.routes")(app);

app.listen(PORT, () => {
    console.log(`Connecting to our server with success to this PORT : ${PORT}  🌴🌴🌴🌴`)
})