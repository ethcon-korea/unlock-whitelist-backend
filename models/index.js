const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';

const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('./users.js')(sequelize, Sequelize);
db.merkles = require('./merkles.js')(sequelize, Sequelize);

module.exports = db;