require('dotenv').config()
const express = require('express')
const cors = require('cors')

const port = process.env.PORT

require('./config/mongoose.config')

const app = express();

app.use(cors())
app.use(express.json())

const AddProductsRoutes = require('./routes/products.routes')
AddProductsRoutes(app);

app.get('/', (req, res) => {
    return res.send('Hello')
})

app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));