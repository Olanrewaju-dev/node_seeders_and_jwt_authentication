const UserModel = require("./models/user.model");
const db = require("./config/dbConfig");

const activateSeeders = async () => {
  db.connectToMongoDB();
  try {
    await UserModel.insertMany([
      {
        firstname: "Olanrewaju",
        lastname: "Balogun",
        email: "olabalogun@realidan.com",
        password: "12132@3#3a;lk",
        mobile_number: "0702312332",
        user_type: "admin",
        gender: "male",
        created_at: Date.now(),
      },
    ]);
    console.log("added to db successfully");
    process.exit(1);
  } catch (err) {
    console.log("Error seeding", err);
  }
};

activateSeeders();
