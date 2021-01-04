const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/",{
   useNewUrlParser: true,
   useUnifiedTopology: true 
}).then(()=>{
    console.log("sucess with connection");
})
.catch((err)=>{
    console.log(err);
});


const Schema = new mongoose.Schema({
    name:{ 
        type:String
    },
    decription: {
        type: String
    },
    status:{
        type:String
    }
   },{
         timestamps: true,
    });

module.exports = mongoose.model("Meta",Schema);

