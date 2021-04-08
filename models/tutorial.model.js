module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("Admin", {
    Name: {
      type: Sequelize.STRING
    },
    Password: {
      type: Sequelize.STRING
    },
    Active: {
      type: Sequelize.BOOLEAN
    }
  });

  sequelize.sync().then(async () => {
    const name = await Admin.findAll()
      .then((admin) => admin[0].dataValues.Name);

    if (!name || name !== 'Felipe G. Belarmino') {
      console.log(name)
      Admin.create({
        Name: "Felipe G. Belarmino",
        Password: "12345678",
        Active: true,
      });
    }
  });

  return Admin;
};
