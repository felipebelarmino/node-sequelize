// 'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('tbl_admins', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       Login: {
//         type: Sequelize.STRING(45),
//         allowNull: false,
//       },
//       Password: {
//         type: Sequelize.STRING(8),
//         allowNull: false,
//       },
//       Active: {
//         type: Sequelize.BOOLEAN,
//         allowNull: false,
//       }
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('tbl_admins');
//   }
// };