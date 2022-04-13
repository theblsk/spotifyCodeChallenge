const express = require("express");
const app = express();
require("dotenv").config({path: '.env'});
const cors = require("cors");
app.use(cors());
app.use(express.json());

const getArtists = require("./getArtists");
const getAlbums = require("./getAlbums");

app.get("/", function (req, res) {
  console.log(process.env)
  res.send("Hello World");
});
app.post("/getToken", function (req, res) {
  process.env['REACT_APP_TOKEN'] = req.body.token
  res.send("Token Stored");
});
app.get("/getArtists", async function (req, res) {
  try {
    const data = await getArtists(process.env['REACT_APP_TOKEN'], req.query.who);
    res.send(data)
  } catch (err) {
    console.log(err);
    res.send("Fail")
  }
});

app.get("/getAlbums", async function (req,res){
  try{
    const data = await getAlbums(req.query.id, process.env['REACT_APP_TOKEN'])
    res.send(data)
  }catch(err){
    console.log(err)
    res.send("Fail")
  }
})

app.listen(3333);
