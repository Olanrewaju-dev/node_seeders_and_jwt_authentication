module.exports = (sequelize, DataTypes) => {
  const BrandModel = sequelize.define(
    "Brand",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      order_status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Brand",
    }
  );
  return BrandModel;
};
