export function findOne(req,res){
    res.send("Get Book :"+req.params.id)

}

export function findAll(req,res){
    res.send('All Books')
}

export function add(req,res){
    res.send('Add Book')
}

export function remove(req,res){             
    res.send('Delete Book'+req.params.id)
}

export function update(req,res){
    res.send('Update Book'+req.params.id)
}   

export default {findOne,findAll,add,remove,update}