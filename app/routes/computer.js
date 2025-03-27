import  {Router}  from "express";
import computer from "../controllers/computer.js";
const router = Router();



router.get('/',(req,res)=>{res.send('All Books')});
router.get('/:id',computer.findOne);
router.post('/',computer.add);
router.delete('/:id',computer.remove);
router.put('/:id',computer.update);
export default router;