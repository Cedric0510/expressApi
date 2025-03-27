export function findOne(req,res){
    res.send("Get Car :"+req.params.id)

}

export function findAll(req,res){
    res.send('All Cars')
}

export function add(req,res){
    res.send('Add Car')
}

export function remove(req,res){             
    res.send('Delete Car'+req.params.id)
}

export function update(req,res){
    res.send('Update Car'+req.params.id)
} 

export default {findOne,findAll,add,remove,update}