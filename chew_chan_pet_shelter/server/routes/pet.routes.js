const PetController = require ('../controllers/pet.controller');

module.exports =(app) =>{
    app.post("/api/pets/create",PetController.createNewPet);
    app.get("/api/pets",PetController.getAllPets);
    app.get("/api/pets/:id",PetController.getPetById);
    app.put("/api/pets/:id",PetController.updatePetById);
    app.delete("/api/pets/:id",PetController.deletePetById);
}