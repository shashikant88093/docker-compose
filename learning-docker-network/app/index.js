const express = require('express');
const app = express();
const axios = require("axios")

const {MongoDbLocal} = require("./connect")


app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.get("/",(req,res)=>{
  res.send("Hello, Docker Network!");
});

MongoDbLocal()

app.get("/movies", async(_, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(response,"response")
    res.status(200).json({ movies: response.data })
  }
  catch (error) {
    res.status(500).json({ message: "Something went wrong",error })
  }
})

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});