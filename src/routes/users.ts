import express from  'express'
import UserController from '../controllers/UserControllers';

const userRoutes = express.Router();

userRoutes.post('/new', (req, res) => {
    return UserController.create(req, res);
})
userRoutes.get('/list', /** */)


export default userRoutes;