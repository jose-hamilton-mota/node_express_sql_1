let express = require('express')
let router = express.Router()

router.use((req,res, next)=>{
    req.attr = 'atributo de request pelo middleware'
    console.log('middleware executado.')
    next()
})

router.get("/",(req,res)=>{
    //res.send("requisição get no /")
    res.render('home',{
        message: "teste envio valor para pug"
    })
})

router.get('/welcome', (req,res)=>{
    res.send('Welcome to Express!' + '<br/>' +req.attr)
})

router.get('/requests/:name', (req,res)=> {
    res.send(req.params.name)
})

router.post('/body', (req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

router.get('/response',(req,res)=>{
    res.status(200).send('text')
})



module.exports = router;