import { Request, Response, Router } from "express";
import { createUser } from '../useCases/user/CreateUser/CreateUser';
import { getAllUsers } from "../useCases/user/GetAllUser/GetAllUsers";


const router = Router();



export default router;