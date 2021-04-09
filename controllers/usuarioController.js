const db = require("../models"); // models path depend on your structure
const admin = db.adminModel;

exports.create = (req, res) => {
  // Valida request
  if (!req.body.Login) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Cria um usuário
  const usuario = {
    Login: req.body.Login,
    Password: req.body.Password,
    Active: req.body.Active ? req.body.Active : false,
  };

  // Salva o usuario no banco
  admin
    .create(usuario)
    .then((data) => {
      console.log(`Usuário ${data.Login}criado com sucesso`);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};
