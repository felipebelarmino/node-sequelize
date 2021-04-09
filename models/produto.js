module.exports = (sequelize, Sequelize) => {
  const Produto = sequelize.define("tbl_produto", {
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Description: {
      type: Sequelize.STRING
    },
    Category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Price: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    Sku: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Image: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });
  return Produto;
};
