module.exports = (sequelize, DataTypes) => {
  const OrderModel = sequelize.define(
    "Order",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      order_status: {
        type: DataTypes.ENUM,
        values: ["approved", "pending approval", "disapproved"],
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return OrderModel;
};
