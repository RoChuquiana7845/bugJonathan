import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import productoRoutes from "./routes/producto.routes.js";
import authRoutes from './routes/auth.routes.js';
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.json("Pagina Principal")
})

app.use('/api/auth', authRoutes);
app.use("/api/producto", productoRoutes);
export default app;