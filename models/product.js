module.exports = (sequelize, DataTypes) => {
  const ProductModel = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      description: DataTypes.STRING,
      size: {
        type: DataTypes.ENUM,
        values: ["small", "medium", "large"],
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return ProductModel;
};
