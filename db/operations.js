const { User } = require("./models");
function parseData(data){
    const {
            apellidoPaterno,
            apellidoMaterno,
            nombre,
            municipio,
            tipoPrueba,
            edad
          } = data;
    return {
                nombreCompleto:{
                    apellido:{
                        paterno: apellidoPaterno,
                        materno: apellidoMaterno
                    },
                    nombre
                },
                edad: +edad,
                municipio,
                tipoPrueba
           };
}
function createTest(data){
    const newUser = new User(parseData(data));
    return newUser.save();
}
function findAllTestData(){
    return User
                .find({})
                .select("nombreCompleto municipio tipoPrueba")
                .exec();
}
function findTest(id){
    return User
                .findById(id)
                .exec();
}
function updateTest(id, data){
    return User.updateOne({"_id": id}, parseData(data)).exec();
}
function deleteTest(id){
    return User.deleteOne({"_id": id}).exec();
}
module.exports = {
    test:{
        create: createTest,
        update: updateTest,
        delete: deleteTest,
        findAll: findAllTestData,
        findOne: findTest
   }
}
