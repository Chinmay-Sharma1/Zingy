
const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
const cors = require('cors');
app.use(cors());
mongoDB();

app.use((req,res,next)=>{
    
    next();
})
app.use(express.json())
app.use('/api/auth/', require("./Routes/CreateUser"));
app.use('/api/auth/', require("./Routes/DisplayData"));
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})