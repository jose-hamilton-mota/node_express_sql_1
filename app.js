const path = require('path')
const express = require("express")
const home = require('./routes/home')
const client = require('./routes/client')
const bodyParser = require('body-parser')

const port = 3000
const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views'))

app.use('/assets', express.static('./assets'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

require('./model/index') //carrega o sequelize

app.use('/', home)
app.use('/client', client)

app.get('/middleware',(req,res,next)=>{
    next( new Error('Erro') )
})



app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).json({message:"Algo deu errado"})
})


app.listen(port, ()=>{ console.log(`App listening http://localhost:${port}`) })