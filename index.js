const express = require('express');

const app = express();
const port = 4000;

app.get("/",(req,res) =>{

  res.send('Hello Maethas');

})

app.listen(port,()=>{

  console.log("Listening on port %d " + port);

})