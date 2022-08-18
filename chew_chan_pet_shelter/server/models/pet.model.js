const mongoose = require ("mongoose");

const PetSchema = new mongoose.Schema(
    {
        petName:{
            type:String,
            minlength:[3,"It must be at least 3 characters"],
        },
        petType:{
            type:String,
            minlength:[3,"It must be at least 3 characters"],
        },
        petDescription:{
            type:String,
            minlength:[3,"It must be at least 3 characters"],
        },
        petSkill1:{
            type:String,
            minlength:[3,"It must be at least 3 characters"],
        },
        petSkill2:{
            type:String,
            minlength:[3,"It must be at least 3 characters"],
        },
        petSkill3:{
            type:String,
            minlength:[3,"It must be at least 3 characters"],
        },
},{timestamps: true});

module.exports = mongoose.model("Pet",PetSchema);

