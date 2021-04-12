module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("tbl_admin", {
    Login: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    Password: {
      type: Sequelize.STRING(8),
      allowNull: false,
    },
    Active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    }
  }, {});
  return Admin;
};
