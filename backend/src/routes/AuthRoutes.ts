import { Request, Response, Router } from "express";
import { login } from '../useCases/auth/Login/Login';

const router = Router();

router.post('/login', (request: Request, response: Response) => {
    return login.login(request, response);
});

export default router;