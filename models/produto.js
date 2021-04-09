module.exports = (sequelize, Sequelize) => {
  const Produto = sequelize.define("tbl_produto", {
    Name: {
      type: Sequelize.STRING(40),
      allowNull: false,
    },
    Description: {
      type: Sequelize.STRING
    },
    Category: {
      type: Sequelize.STRING(40),
      allowNull: false,
    },
    Quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Price: {
      type: Sequelize.DECIMAL(7, 2),
      allowNull: false,
    },
    Sku: {
      type: Sequelize.STRING(6),
      allowNull: false,
    },
    Image: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });
  return Produto;
};
