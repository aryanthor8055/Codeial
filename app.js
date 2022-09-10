const express=require('express')

const app=express();
const port=8000;

//use express router

app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views')
app.use(express.static('assets'))

app.listen(port,function(err){
if(err){
    console.log(`Error: in running the server ${err}`);
}
console.log(`server is running at port:${port}`);
})