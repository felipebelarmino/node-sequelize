module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("tbl_admin", {
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
  return Admin;
};