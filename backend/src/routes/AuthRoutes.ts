import { Request, Response, Router } from "express";
import { login } from '../useCases/auth/Login/Login';
import { recoveryPass } from '../useCases/auth/RecoveryPass/RecoveryPass';

const router = Router();

router.post('/login', (request: Request, response: Response) => {
    return login.login(request, response);
});

router.post('/recovery', (request: Request, response: Response) => {
    return recoveryPass.recoveryPass(request, response);
});

export default router;