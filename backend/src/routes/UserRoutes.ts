import { Request, Response, Router } from "express";
import { createUser } from '../useCases/user/CreateUser/CreateUser';
import { getAllUsers } from "../useCases/user/GetAllUser/GetAllUsers";
import { deleteUser } from '../useCases/user/DeleteUser/DeleteUser';
import { findUserByCpf } from "../useCases/user/FindUserByCpf/FindUserByCpf";
import { findById } from "../useCases/user/FindById/FindById";
import { findUserByEmail } from "../useCases/user/FindUserByEmail/FindUserByEmail";
import { findUserByUserName } from "../useCases/user/FindUserByUserName/FindUserByUserName";
import { findUserByFullName } from "../useCases/user/FindUserByFullName/FindUserByFullName";


const router = Router();

router.get('/getAll', (request: Request, response: Response) => {
    return getAllUsers.getAllUsers(request, response);
});

router.post('/createUser', (request: Request, response: Response) => {
    return createUser.create(request, response);
});

router.delete('/deleteUser', (request: Request, response: Response) => {
    return deleteUser.delete(request, response);
});

router.get('/findById', (request: Request, response: Response) => {
    return findById.findById(request, response);
});

router.get('/findUserByEmail', (request: Request, response: Response) => {
    return findUserByEmail.findUserByEmail(request, response);
});

router.get('/findUserByCpf', (request: Request, response: Response) => {
    return findUserByCpf.findUserByCpf(request, response);
});

router.get('/findUserByUserName', (request: Request, response: Response) => {
    return findUserByUserName.findUserByUserName(request, response);
});

router.get('/findUserByFullName', (request: Request, response: Response) => {
    return findUserByFullName.findUserByFullName(request, response);
});

export default router;