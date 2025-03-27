import router from './app/routes/index.js';
import express from 'express';



const app = express();
export default app;
app.use(router);
app.listen(process.env.PORT || 3000,);

