const express = require("express")

const app = express()
const PORT = 8000





app.get('/', (req, res) => {
    res.send('<h2>Hi I am Alive</h2>')
})








app.listen(PORT, () => {
    console.log(`listen to the port : ${PORT}`)
})