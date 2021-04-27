const express = require("express");
const connectDB = require("./db/connect");

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

connectDB();

const app = express();
const port = process.env.PORT || 3000;

const routes = require("./routes");

app
    .set("views", __dirname + "/views")
    .set("view engine", "pug");

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

app
    .get("/", routes.index)
    .get("/registro", routes.registro.get)
    .get("/test/:test", routes.userInfo)
    .get("/test/:test/editar", routes.editar.get);

app
    .post("/registro", routes.registro.post)
    .post("/test/:test/editar", routes.editar.post);

app
    .post("/test/:test/eliminar", routes.registro.delete);

app.listen(port, () => {
    console.log("Server is listening on port:", port);
});
