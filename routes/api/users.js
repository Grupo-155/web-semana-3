const router = require('express').Router();
//const { Usuario } = require('../../models');
const bcrypt = require('bcryptjs');
const models = require('../../models');//llamamos el modelo
const userController = require('../../controllers/UserController');

//.com/api/usario/
router.get('/', async (req, res) => {
    const users = await models.user.findAll();
    res.status(200).json(users);
});//listar

//.com/api/usuario/register
router.post('/register', async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await models.user.create(req.body);
    res.status(200).json(user);
});

//.com/api/usuario/signin
router.post('/signin', userController.signin);

//router.put('/update', userController.update);

module.exports = router;