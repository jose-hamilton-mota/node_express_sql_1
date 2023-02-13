const { Model } = require('sequelize');
const Sequelize = require('sequelize')

class Cliente2 extends Model{
    static init(sequelize){
        super.init(
            {
                cliente: Sequelize.STRING,
                cnpj: Sequelize.STRING,
                telefone: Sequelize.STRING,
                email: Sequelize.STRING,
                contato: Sequelize.STRING
            },
            {
                timesstamps: false
            }
        )
    }
}
export default Cliente2