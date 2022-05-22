const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  username: "root",
  password: "89841073725",
  host: "localhost",
  dialect: "mysql",
  database: "backendDB",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected...");
  })
  .catch((error) => {
    console.log(error);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = require("./postModel.js")(sequelize, DataTypes);
db.login = require("./authModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("resync done");
});

module.exports = db;
