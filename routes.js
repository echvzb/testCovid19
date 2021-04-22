const { test } = require("./db/dbOperations");
const links = [
                {
                    name: "Registrar",
                    path: "/registro",
                },
              ]
const redPath = (op, id) => `/?done=${op}&test=${id}`;

function registroGet(req, res){
    res.render("registro",{
        title: "Registro - Tests COVID-19 | echvzb",
        links:
            [
                {
                    name: "Registrar",
                    path: "/registro",
                    active: true
                },
            ],
    });
}
function registroPost(req, res){
    const promise = test.create(req.body);
    promise.then(data => {
        console.log("\nTest created:\n", data);
        res.redirect(redPath("create", data["_id"]));
    })
}

function index(req, res){
    const promise = test.findAll();
    promise.then(data => {
        res.render("index",{
            title: "Tests COVID-19 | echvzb",
            links,
            data
        });
    });
}

function userInfo(req, res){
    const promise = test.findOne(req.params.test);
    promise.then(data => {
        res.render("test", {
            title: `${data.nombreCompleto.apellido.paterno} ${data.nombreCompleto.apellido.materno} ${data.nombreCompleto.nombre} - Test COVID-19`,
            links,
            data
        })
    })
}

function editarTestGet(req, res){
    const promise = test.findOne(req.params.test);
    promise.then(data => {
        res.render("editar", {
            title: "Editar test - Tests COVID-19",
            links,
            data
        })
    })
}
function editarTestPost(req, res){
    const promise = test.update(req.params.test, req.body);
    promise.then(data => {
        console.log("\nTest updated:\n", data);
        res.redirect(redPath("update", req.params.test));
    })
}
function registroDelete(req, res){
    const promise = test.delete(req.params.test);
    promise.then(data =>{
        console.log("\nTest deleted\n:", data);
        res.redirect(redPath("delete",req.params.test));
    })
}
module.exports = {
    index,
    registro:{
        get: registroGet,
        post: registroPost,
        delete: registroDelete,
    },
    userInfo,
    editarTest:{
        get: editarTestGet,
        post: editarTestPost
    },
}
