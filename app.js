const express=require('express');
const path=require('path');
const app=express();

app.get('/register',function(req,res){
res.sendFile(path.join(__dirname,'./views/register.html'))
});
app.get('/login',function(req,res){
    res.sendFile(path.join(__dirname,'./views/login.html'))
    });

const publicpath=path.resolve(__dirname,'./public')
app.use(express.static('public'));

const port=process.env.PORT || 3000;

app.listen(port,() => {

    console.log("servidor corriendo en el puerto"+ port)
})
app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});