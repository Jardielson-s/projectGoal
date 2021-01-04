const app = require('./server');

const metas = require('./model/db');

app.post("/metas",async (req,res) => {
    const {name, description, status} = req.body;

 try{
    await metas.create({
        name: name,
        decription: description,
        status: status
    }).then((metas) => {
        return res.status(200).json(metas);
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
        return res.status(200).json(datas);
    })
    .catch((err)=>{
        return res.status(404).json("error when finding file");
    })
}catch(err){
    return res.status(500).json("error to connect with databse");
}
});