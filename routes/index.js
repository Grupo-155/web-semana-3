const router = require('express').Router();
const userRouter = require('./api/users');

router.use('/auth', userRouter);
// /api/user/
// /api/user/listar
// /api/user/crear
// /api/user/login


//router.use('/article', articleRouter);
// /api/article/
// /api/article/register
// /api/article/listar
// /api/article/actualizar

// /api/article
// /api/article/register

module.exports = router;