import { Request, Response, Router } from "express";
import { createUser } from '../useCases/user/CreateUser/CreateUser';
import { getAllUsers } from "../useCases/user/GetAllUser/GetAllUsers";


const router = Router();

router.get('/', (request: Request, response: Response) => {
    return getAllUsers.getAllUsers(request, response);
});

router.post('/createUser', (request: Request, response: Response) => {
    return createUser.create(request, response);
    // response.send("Página Cadastrar");
});

router.delete('/', (request: Request, response: Response) => {
    return getAllUsers.getAllUsers(request, response);
});

router.put('/', (request: Request, response: Response) => {
    return getAllUsers.getAllUsers(request, response);
});

router.patch('/', (request: Request, response: Response) => {
    return getAllUsers.getAllUsers(request, response);
});

export default router;