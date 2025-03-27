export function findOne(req,res){
    res.send("Get Computer :"+req.params.id)

}

export function findAll(req,res){
    res.send('All Computers')
}

export function add(req,res){
    res.send('Add Computer')
}

export function remove(req,res){             
    res.send('Delete Computer'+req.params.id)
}

export function update(req,res){
    res.send('Update Computer'+req.params.id)
} 
export default {findOne,findAll,add,remove,update}