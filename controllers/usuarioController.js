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

  // Cria um objeto usuario com os dados passados no req.body
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
        message: err.message || "Some error occurred while creating the admin.",
      });
    });
};

//------------------------------------------------------------
//Retorna todos os Admins ativos
exports.findAllActive = (req, res) => {
  const id = req.query.id;
  let condition = id ? { id: { [Op.like]: `%${id}%` } } : { Active: true };

  admin
    .findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving user.",
      });
    });
};

//------------------------------------------------------------
//Busca Admin pelo ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  admin
    .findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving admin with id=" + id,
      });
    });
};

//------------------------------------------------------------
//Modifica/atualiza Admin pelo ID
exports.update = (req, res) => {
  const id = req.params.id;

  admin
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "admin was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating user with id=" + id,
      });
    });
};

//------------------------------------------------------------
//Deleta Admin pelo ID
exports.delete = (req, res) => {
  const id = req.params.id;

  admin
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "admin was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete admin with id=${id}. Maybe admin was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete admin with id=" + id,
      });
    });
};

//------------------------------------------------------------
//Deleta todos Admins
exports.deleteAll = (_req, res) => {
  admin
    .destroy({
      where: {},
      truncate: false,
    })
    .then((nums) => {
      res.send({ message: `${nums} admins were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all admins.",
      });
    });
};

//------------------------------
//Busca todos Admins
exports.findAllAdmins = (req, res) => {

  admin.findAll({
    where: null,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving admins.",
      });
    });
};
