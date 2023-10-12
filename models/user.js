const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      user_type: {
        type: DataTypes.ENUM,
        values: ["admin", "customer"],
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  UserModel.beforeCreate((user) => {
    return bcrypt
      .hash(user.password, 10)
      .then((hash) => {
        user.password = hash;
      })
      .catch((err) => {
        throw new Error();
      });
  });

  UserModel.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  return UserModel;
};
