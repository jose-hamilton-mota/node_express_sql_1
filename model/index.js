const Seq = require('sequelize')
const Sequelize = new Seq(
    'mysql://root:123@localhost/crud_node',{
        operatorAliases: Seq.Op
    }
)

Sequelize
    .authenticate()
    .then(()=> console.log("Sequelize OK"))
    .catch(()=> console.log("Error Sequelize"))

Sequelize.sync()

module.exports = Sequelize