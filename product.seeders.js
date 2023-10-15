const ProductModel = require("./models/product.model");
const db = require("./config/dbConfig");
const shortId = require("short-uuid");

const activateSeeders = async () => {
  db.connectToMongoDB();
  try {
    await ProductModel.insertMany([
      {
        _id: shortId.generate(),
        name: "Oriflame underarm roll on",
        price: 4.33,
        size: "medium",
        description: "24hr flavour antipersperants liquid for self-care",
      },
      {
        _id: shortId.generate(),
        name: "Sensydone tooth care paste",
        price: 9.33,
        size: "small",
        description: "A deep cleaning solution for dental care",
      },
      {
        _id: shortId.generate(),
        name: "Dove men skin care",
        price: 15.33,
        size: "meduim",
        description: "Active refreshing and moisturizing men skin care",
      },
      {
        _id: shortId.generate(),
        name: "Dr. Rahshel face serum",
        price: 599,
        size: "large",
        description: "Active face moisturizing and refreshing skin care",
      },
      {
        _id: shortId.generate(),
        name: "Tea tree beauty formula ",
        price: 9,
        size: "medium",
        description: "exfoliating facial wash",
      },
      {
        _id: shortId.generate(),
        name: "Cabdury diary fruit and nut chocolate",
        price: 3.9,
        size: "small",
        description: "Chocolate snack",
      },
      {
        _id: shortId.generate(),
        name: "Bounty coconut chocolate",
        price: 3.9,
        size: "small",
        description: "Chocolate snack",
      },
      {
        _id: shortId.generate(),
        name: "Elle & vire butter unsalted",
        price: 14.9,
        size: "large",
        description: "Cooking butter",
      },
      {
        _id: shortId.generate(),
        name: "Hollandia",
        price: 34.9,
        size: "large",
        description: "100litre lactose dairy yoghurt",
      },
    ]);
    console.log("added to db successfully");
    process.exit(1);
  } catch (err) {
    console.log("Error seeding", err);
  }
};

activateSeeders();
