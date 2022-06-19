import express from "express";
import cors from "cors";

const server = express();
server.use(express.json())
server.use(cors()) //rever pra que serve

let users = [];
let tweets = [];

server.listen(5000, ()=>{
    console.log("servidor no ar");
})

server.post("/sign-up", (req,res)=>{
  const {username, avatar} = req.body;
  if (!username || !avatar || typeof username != "string" || typeof avatar != "string"){
      res.status(400).send("Todos os campos são obrigatórios!");
      return;
    }
  users.push({username, avatar});
  res.send("OK").status(201) ;
})

server.post("/tweets", (req,res)=>{
    const {tweet} = req.body;
    const Username = req.headers.user
    if (!tweet || typeof tweet != "string"){
        res.status(400).send("Todos os campos são obrigatórios!");
        return;
      }
    tweets.push({Username,tweet});
    res.status(201).send("OK");
})

server.get("/tweets", (req,res)=>{
    const tweetsReverse = tweets.reverse();
    const maxTweetsNum = 10;
    const lastTweets = tweetsReverse.filter((tweet,i) => {if(i<maxTweetsNum){return tweet}} );

    res.send(lastTweets);
})

// server.get("/tweets/:usernameID", (req,res)=>{
//   const usernameID = req.params.usernameID
//   console.log(usernameID)
//   res.send(tweets.filter(tweet => tweet.Username == usernameID ));

// })