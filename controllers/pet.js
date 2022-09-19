const Pet = require('../models/pet')

exports.addPet = (req,res)=>{
    const {name,photoUrls,category,tags,status} = req.body

    let pet = new Pet();
    pet.name = name
    // pet.category = category
    // pet.tags = tags
    pet.status = status
    pet.photoUrls = photoUrls

    pet.save().then(() => {
        res.status(200).json({
            message : 'Success'
        })
    })


}

exports.getOne = (req, res, next) => {
    const id = req.params.petId;
    Pet.findById(id).then(pet=>{
       return res.status(200).json(pet)
    })
}

exports.uploadImage = (req, res) =>{
    const id =  req.params.petId
    const {url} = req.body
    Pet.findById(id).then(pet=>{
        if(!pet) return res.status(404).json({message : "pet not found"})
        pet.photoUrls.push(url)
        pet.save()
        .then(()=>{
          res.json({message:"image added"})
        })
    })
}

exports.updatePet =(req, res)=>{
    const id = req.params.petId
    const {name,photoUrls,category,tags,status} = req.body
    Pet.findById(id).then(pet => {
       if(name){
        pet.name = name
       }
       if(photoUrls){
         pet.photoUrls = photoUrls
       }
       if(category){
        pet.category = category
       }
       if(status){
        pet.status = status
       }
       pet.save().then(()=>{
        res.json({message:"pet details updated"})
       })
    })
}

exports.deletePet =(req, res)=>{
    const id = req.params.petId
    Pet.findByIdAndRemove(id).then(()=>{
        res.json({message:"pet details deleted"})
    })
}