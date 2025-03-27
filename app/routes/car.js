import  {Router}  from "express";
import car from "../controllers/car.js";
const router = Router();



router.get('/',(req,res)=>{res.send('All Books')});
router.get('/:id',car.findOne);
router.post('/',car.add);
router.delete('/:id',car.remove);
router.put('/:id',car.update);
export default router;
