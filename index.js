import express from "express";

const server = express();
server.use(express.json())

let users = [];

server.listen(5000, ()=>{
    console.log("servidor no ar");
})

server.post("/sign-up", (req,res)=>{
  const {username, avatar} = req.body;
  users.push({username, avatar});
  res.send("OK");
})