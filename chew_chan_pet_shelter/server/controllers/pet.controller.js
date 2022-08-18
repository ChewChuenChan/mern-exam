const Pet = require ('../models/pet.model');

module.exports ={
    //function to create a new pet 
    createNewPet:(req,res) =>{
        Pet.create(req.body)
            .then((newPet)=>{
                console.log(newPet);
                res.json(newPet);
            })
            .catch((err)=>res.status(400).json({message:'something went wrong with createNewPet',error:err}));
    },

    //function to get all pets
    getAllPets:(req,res) =>{
        Pet.find({})
        .then((allPets)=>{
            console.log(allPets);
            res.json(allPets);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with getAllPets',error:err}));
    },

    //function to get a single pet
    getPetById: (req,res) =>{
        Pet.findOne({_id:req.params.id})
        .then((onePet)=>{
            console.log(onePet);
            res.json(onePet);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with getAllPets',error:err}));
    },

    // function to update existing pet
    updatePetById:(req,res) =>{
        Pet.findOneAndUpdate({_id:req.params.id}, req.body, {new:true,runValidators:true})
        .then((updatedPet)=>{
            console.log(updatedPet);
            res.json(updatedPet);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with updatePetById',error:err}));
    },

    // function to delete a existing Pet
    deletePetById:(req,res) =>{
        Pet.deleteOne({_id:req.params.id})
        .then((deletedPet)=>{
            console.log(deletedPet);
            res.json(deletedPet);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with deletePetById',error:err}));
    },    

};

