module.exports = (sequelize, Sequelize) => {
  const AdminLoja = sequelize.define("tbl_admin_loja", {
    admin_FK: {
      type: Sequelize.INTEGER,
      references: { //relacionamento
        model: 'tbl_admins',
        type: 'id'
      }
    },
    loja_FK: {
      type: Sequelize.INTEGER,
      references: { //relacionamento
        model: 'tbl_lojas',
        type: 'id'
      }
    }, 
  });
  AdminLoja.associate = (models) => {
    AdminLoja.belongsToMany(models.admin, { foreignKey: 'admin_FK', as: 'tbl_admins' });
    AdminLoja.belongsToMany(models.loja, { foreignKey: 'loja_FK', as: 'tbl_lojas' });
    return AdminLoja;
  }
  return AdminLoja;
};
