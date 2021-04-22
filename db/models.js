const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nombreCompleto: {
        apellido: {
            paterno: String,
            materno: String,
        },
        nombre: String
    },
    municipio: String,
    tipoPrueba: String,
    edad: Number
})

const User = mongoose.model("User", userSchema);

module.exports = {
    User
};
