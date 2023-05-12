const express = require('express') 
const UserController = require('C:/Users/YashD/crud-node-express/controller/user')
const router = express.Router(); router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne); 
router.post('/create', UserController.create);
router.patch('/:id', UserController.update); 
router.delete('/:id',UserController.destroy); module.exports = router