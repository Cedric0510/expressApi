import  {Router}  from "express";
import book from "../controllers/book.js";
const router = Router();



router.get('/',(req,res)=>{res.send('All Books')});
router.get('/:id',book.findOne);
router.post('/',book.add);
router.delete('/:id',book.remove);
router.put('/:id',book.update);
export default router;