import express from "express";
import cors from "cors";

const server = express();
server.use(express.json())
server.use(cors()) //rever pra que serve

let users = [];
let tweets = [];

server.listen(4000, ()=>{
    console.log("servidor no ar");
})

server.post("/sign-up", (req,res)=>{
  const {username, avatar} = req.body;
  users.push({username, avatar});
  res.send("OK");
})

server.post("/tweets", (req,res)=>{
    const {username, tweet} = req.body;
    tweets.push({username,tweet});
    res.send("OK");
})

server.get("/tweets", (req,res)=>{
    const tweetsReverse = tweets.reverse();
    const maxTweetsNum = 10;
    const lastTweets = tweetsReverse.filter((tweet,i) => {if(i<maxTweetsNum){return tweet}} );

    res.send(lastTweets);
})