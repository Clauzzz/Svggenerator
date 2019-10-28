const express =require("express");
const server = express();
const path = require("path");
const port = 8900;
const bodyParser=require("body-parser");

const ioServer = require('http').Server(server);
const io = require('socket.io')(ioServer);
const ioPort = 8902;
//const io = require('socket.io');
const SvgGenerator = require("./svggenerator");


server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname,"./../")));

// SvgGenerator.createSvg("test");
//console.log(SvgGenerator.readSvg("test"));



io.on('connection',(socket)=>
{
    console.log('Somebody connected! : ', socket.id);
  
});
io.listen(ioPort);
server.get("/getSvg/:filename",(req,res)=>
{
    try
    {
        SvgGenerator.readSvg(req.params.filename,res);
    }
    catch(err)
    {
        return res.status(500).send({"code":500,"message":"Couldn't create Svg!"});
    }
});
server.post("/createSvg",(req,res)=>
{
    try
    {
        SvgGenerator.createSvg(req.body,res);
    }
    catch(err)
    {
        return res.status(500).send({"code":500,"message":"Couldn't create Svg!"});
    }
})
server.get("/",(req,res)=>
{
    return res.status(200).sendFile(path.join(__dirname + "./../frontend/index.html"));
});

server.listen(port,(err)=>
{
    if(!err)
    {
        console.log("Server started on port "+port);
    }
    else
    {
        console.log(err);
    }
})