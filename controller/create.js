let sequelize = require('./../model/index')
let Cliente = sequelize.define('./../model/cliente')
//let Cliente = require('../model/cliente')
//let Cliente2 = require('../model/cliente2')


module.exports = (req, res) =>{
    Cliente
        .create(req.body)
        .then(() => console.log('INSERT OK'))
}