const { Router } = require('express');
const dbController = require('../controllers/dbController.js');
// const userController = require('../controllers/userController.js');

const registerRouter = Router();

registerRouter.post('/', 
    dbController.addUser, 
    (req, res) => {
        res.status(200);
    })

module.exports = registerRouter;