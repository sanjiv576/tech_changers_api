require('dotenv').config()
const portRoute =  3000
const upload = require('./middlewares/upload-image')

//Importing routes.
const user_routes = require('./routes/user-routes')
const supplier_routes = require('./routes/supplier-routes')
const routine_routes = require('./routes/routine-routes')

//Creating an object.
const mongoose = require("mongoose")

//Connecting to database.
mongoose.connect('mongodb://127.0.0.1:27017/showjal')
    .then(() => console.log("Connected to Mongo database."))
    .catch((err) => console.log(err))


const express = require('express')

//Creating an object.
const app = express()

// For request to take JSON files.
app.use(express.json())

// To access images.
app.use(express.static('public'))

app.listen(portRoute, () => {
    console.log(`Server is running in ${portRoute}`)
})

app.get('/', (req, res) => {
    res.json({message: 'Message From API'})
})

//Using routes from another file
app.use('/api/user', user_routes)
app.use('/api/supplier', supplier_routes)
app.use('/api/routine', routine_routes)


//To upload photos.
app.post('/api/upload', upload, (req, res, next) => {

    if (!req.file) {
        return res.status(400).send({ error: "No image received!" });
    }
    res.status(200).json({
        success: true,
        data: req.file.filename,
    });
})

//Unknown Path.
app.use((req, res) => {
    res.status(404).json({ error: "Path Not Found" })
})
