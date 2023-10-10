import {Router} from "express";
import {createUser, getAllUsers, uploadRequest} from "../controllers/users.controllers";

const usersRoutes = Router()

usersRoutes.get("/", getAllUsers)
usersRoutes.post("/",createUser)
usersRoutes.post("/upload", uploadRequest)


export default usersRoutes
