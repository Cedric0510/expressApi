import  {Router}  from "express";
import book from "./book.js";
import car from "./car.js";
import computer from "./computer.js";
const router = Router();


//router.get('/',(req,res)=>{res.send('Hello World!')});
router.use('/books',book);
router.use('/cars',car);
router.use('/computers',computer);



export default router;