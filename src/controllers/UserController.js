const { Users } = require('../models/index')

function UserController() {
    return {
        async getUsers(req, res) {
            
            const usuarios = await Users.findAll({attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] } } )

            return res.status(200).json(usuarios)

        }
    }
}

module.exports = UserController;