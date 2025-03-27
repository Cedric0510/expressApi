import router from './app/routes/index.js';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config({path: `./config/env/.env.${process.env.NODE_ENV}`});
console.log(process.env.PORT)


const app = express();
export default app;
app.use(router);
app.listen(process.env.PORT || 3000,);

