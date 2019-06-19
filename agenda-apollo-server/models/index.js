const Sequelize  =  require("sequelize");
const config= require("../config/config.json")["development"];
const db = {};
const sequelize = new Sequelize(config.database,config.username,config.password,config);

db.Agenda = sequelize.import("./Agenda");
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;



