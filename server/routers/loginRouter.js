const { Router } = require('express');
const dbController = require('../controllers/dbController.js');
// const userController = require('../controllers/userController.js');

const loginRouter = Router();

loginRouter.post('/', 
    dbController.checkUser, 
    (req, res) => {
        res.status(200).send(res.locals.result);
    })

module.exports = loginRouter;