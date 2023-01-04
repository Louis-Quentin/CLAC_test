const Chicken = require('../models/chicken_model')

function create_chicken(req,res){
    let name = req.body.name;
    let birthday = req.body.birthday;
    let weight = req.body.weight;
    let steps = req.body.steps;
    let isRunning = req.body.isRunning;
    let chicken = new Chicken({
        name,
        birthday,
        weight,
        steps,
        isRunning
    })
    chicken.save().then((data)=>{
        res.status(201).send({success: "Chicken created successfully", data})
    })
}

function get_chicken(req,res){
    Chicken.findById(req.body.id).then((data)=>{
        res.status(200).send({success: data})
    })
}

function update_chicken(req,res){
    Chicken.findByIdAndUpdate(req.body.id,req.body, (err)=>{
        if (err) {
            return res.status(500).send({error: "failed to update the chicken"})
        }
        res.status(200).send({success: "update success"})
    })
}
function delete_chicken(req,res){
    Chicken.findByIdAndDelete(req.body.id,(err)=> {
        if (err) {
            return res.status(500).send({error: "failed to delete the chicken"})
        }
        res.status(200).send({success: "delete success"})
    })
}

function chicken_run(req, res) {
    Chicken.findByIdAndUpdate(req.body.id, {$inc: { steps: 1}}, ()=> {
        res.status(200).send({success: "chicken run success"})
    })
}

module.exports.create_chicken = create_chicken
module.exports.get_chicken = get_chicken
module.exports.update_chicken = update_chicken
module.exports.delete_chicken = delete_chicken
module.exports.chicken_run = chicken_run