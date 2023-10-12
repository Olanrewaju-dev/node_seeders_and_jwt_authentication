// requiring needed files and modules
const config = require("../config/config");
const { Sequelize, DataTypes } = require("sequelize");

// Connecting to DB using Sequelize ORM
const sequelize = new Sequelize(config.development);

// Testing/authenticating the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// initializing a db object
const db = {};

// parsing into the db Sequelize ORM instance and the sequelize model
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Add our tables
// require the table/entity model
db.user = require("./user")(sequelize, DataTypes);
db.product = require("./product")(sequelize, DataTypes);
db.category = require("./category")(sequelize, DataTypes);
db.order = require("./order")(sequelize, DataTypes);
db.brand = require("./brand")(sequelize, DataTypes);

// sync all models
// force: false will not drop the table if it already exists
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database & tables synced");
  })
  .catch((error) => {
    console.log("Unable to synch database & tables:", error);
  });

module.exports = db;
