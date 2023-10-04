import express, {Express, Response} from 'express';
import cors from "cors";
import morgan from "morgan";

import errorHandler from "./middleware/errorHandler.middleware";
import usersRoutes from "./routes/users.routes";


const app: Express = express();
app.use(cors())
app.use(express.json());
app.use(morgan("dev"))

app.use("/users", usersRoutes)
app.get("/health", (_,res:Response)=>{
    res.status(200).json({message:"Server is running"})
})
app.get("/", (_,res:Response)=>{
    res.status(200).json({message:"Welcome to the API"})
})


app.use(errorHandler)


// http://localhost:8080/user/
export default app;
