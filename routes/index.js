module.exports = (app) => {
  const usuario = require("../controllers/usuarioController");

  let router = require("express").Router();

  // Cria um novo usuario
  router.post("/", usuario.create);
  app.use("/api/usuarios", router);
};
