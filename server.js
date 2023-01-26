const express =  require("express");
const ejs = require("ejs");
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/blog')

const app = express();
app.set("view engine","ejs");


app.use(express.urlencoded({extended:false}))

app.get("/",(req,res) => {
    const articles = [{
        title: "Test Articles",
        createdAt: new Date(),
        description: "Test description"
    }]
    res.render("articles/index", {articles: articles})
})


app.use('/articles',articleRouter)


app.listen(5000,function(req,res){
    console.log("server is ON!")
})