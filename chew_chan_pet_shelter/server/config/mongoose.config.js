const mongoose = require ("mongoose");
const dbName = "petDB"

mongoose.connect(`mongodb://localhost/${dbName}`)
    .then(() => console.log(`connected to the db ${dbName}`))
    .catch((err) => console.log(`Error in db connection to ${dbName}`,err));

