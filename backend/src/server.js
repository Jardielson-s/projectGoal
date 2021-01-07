const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());



const metas = require('./model/db');
const { response } = require('express');

function sleep(ms){
  return new Promise((resolve)=>{
      setTimeout(resolve,ms)
  })
}

app.post("/metas",async (req,res) => {

    await sleep(300);

    const {name, decription, status} = req.body;

 try{
    await metas.create({
        name,
        decription,
        status
    }).then((metas) => {

        return res.status(200).json({message:"goals registed with sucess"});
    })
    .catch((err)=>{
        return res.status(501).json(err);
    });
 }catch(err){
    return res.status(500).json("error to connect with databse");
}
});

app.get("/listar",async (req,res)=>{
     
try{
    const datas = await metas.find()
    .then((datas)=>{
        return res.status(200).json( { datas } );
    })
    .catch((err)=>{
        return res.status(404).json("error when finding file");
    })
}catch(err){
    return res.status(500).json("error to connect with databse");
}
});

app.listen(8081);