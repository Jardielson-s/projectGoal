const app = require('./server');



app.get("/",(req,res) => {
    res.send("ola dev");
});