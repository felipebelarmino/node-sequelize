module.exports = (sequelize, Sequelize) => {
  const Loja = sequelize.define("tbl_loja", {
    Name: {
      type: Sequelize.STRING(40),
      allowNull: false,
    },
    Filial: {
      type: Sequelize.STRING(40),
      allowNull: false,
    },
    Description: {
      type: Sequelize.STRING
    },
    produto_FK: {
      type: Sequelize.INTEGER,
      references: { //relacionamento
        model: 'tbl_produtos',
        type: 'id'
      }
    }   
  });
  Loja.associate = (models) => {
    Loja.belongsToMany(models.produto, { foreignKey: 'produtoId', as: 'tbl_produtos' });
    return Loja;
  }
  return Loja;
};

