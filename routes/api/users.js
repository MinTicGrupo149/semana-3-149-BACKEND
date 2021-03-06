const router = require('express').Router();
const models = require('../../models');
const userController = require('../../controllers/UserController.js');
const bcrypt = require('bcryptjs');

//api/user/
router.get('/', async(req,res)=>{
    const user = await models.user.findAll();
    res.status(200).json(user);
});

//api/user/register
router.post('/register',async(req,res)=>{
    req.body.password = await bcrypt.hashSync(req.body.password, 10);
    const user = await models.user.create(req.body);
    res.status(200).json(user);
});

router.post('/signin', userController.signin)
//router.post('/register', userController.register)

module.exports = router;