module.exports = (sequelize, DataTypes) => {
  const CategoryModel = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      title: {
        type: DataTypes.ENUM,
        values: ["toiletries", "skin-care"],
      },
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return CategoryModel;
};
