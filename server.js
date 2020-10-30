const express = require("express")

let app = express()
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req,res) => {
    let msg = "You are on the homepage"
    return res.send(msg)
})

app.post("/post", (req,res) => {
    let {name, password} = req.body;
    return res.json({resp:`Welcome ${name}`});
});
  
app.delete("/delete", (req,res) => {
    let condition = req.body.taskId
    let msg = condition ? "true" : "false";
    return res.json({delete:msg});
});

app.put("/put/:id",(req,res)=>{
    let id = req.params.id
    res.send(`Task ${id} has been updated`);
});

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});