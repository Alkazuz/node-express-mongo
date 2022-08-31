import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import morgan from 'morgan';

const PORT = process.env.PORT || 3000;
const MONGOURL  = process.env.MONGOURL || "";

const app = express();

(async () => {
    
    await mongoose.connect(MONGOURL);
    console.log("MongoDB conectado")

    app.use(express.json())
    app.use(cors())

    app.use(morgan('dev'))

    app.listen(PORT, () => console.log("Servidor rodando com sucesso"))

})()