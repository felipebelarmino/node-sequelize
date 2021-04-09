const dbConfig = require('../config/config.json');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  dbConfig.development.database, 
  dbConfig.development.username, 
  dbConfig.development.password, 
  {
  host: dbConfig.development.host,
  dialect: dbConfig.development.dialect,
  pool: {
    max: dbConfig.development.pool.max,
    min: dbConfig.development.pool.min,
    acquire: dbConfig.development.pool.acquire,
    idle: dbConfig.development.pool.idle,
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.adminModel = require('./admin')(sequelize, Sequelize);
db.produtoModel = require('./produto')(sequelize, Sequelize);
db.lojaModel = require('./loja')(sequelize, Sequelize);
db.adminLojaModel = require('./adminLoja')(sequelize, Sequelize);

module.exports = db;
