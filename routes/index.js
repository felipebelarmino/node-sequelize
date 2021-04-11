module.exports = (app) => {
  const usuario = require("../controllers/usuarioController");
  let router = require("express").Router();
  
  // Rotas POST
  router.post("/", usuario.create);

  //Rotas GET
  router.get("/active", usuario.findAllActive);
  router.get("/all", usuario.findAllAdmins);
  router.get("/:id", usuario.findOne);

  //Rota PUT
  router.put("/:id", usuario.update);

  //Rota DELETE
  router.delete("/:id", usuario.delete);
  router.delete("/", usuario.deleteAll);

  //http://localhost:8080/usuario
  app.use("/usuario", router);
};
