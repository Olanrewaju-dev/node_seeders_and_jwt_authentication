"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("products", [
      {
        id: "6da3f1ac-f80c-4c6a-9e09-f7d144bcffbf",
        title: "Dove Men Bathing Soap",
        price: 12.99,
        description:
          "Dove Men+Care bar is uniquely formulated with ¼ moisturizing cream and helps to maintain skin's moisture and hydration levels",
        size: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "8bfd58e1-8604-4ce3-a3a6-0a0209b417df",
        title: "Nivea deep men body lotion",
        price: 21.99,
        description:
          "NIVEA Men Deep Impact Body Cream 400ml intensely moisturises skin for 48 hours, and leaves it feeling fresh thanks to black carbon.",
        size: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "9554bbdc-d640-4d14-8b2e-78e8d8d4caa2",
        title: "Dove DeepCare lotion",
        price: 11.99,
        description:
          "Indulgent body lotions, with spa-like textures and fragrances, transform your skin care routine into a moment of ‘me-time’, while leaving your skin gently cared for.",
        size: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "790610c8-6b39-4062-941d-644f7d8c400d",
        title: "Close-Up",
        price: 3.99,
        description:
          "Teeth and gum care product with deep cleaning technology and solutions.",
        size: "small",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "38ee3490-e7d2-42fe-8d84-50d8f21b317f",
        title: "Riggs anti-persperants roll-on",
        price: 3.99,
        description:
          "Stay crisp, active and always fresh without breaking a sweat.",
        size: "small",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "bb15ab7d-9901-48e8-a4fa-9a5a901da5e8",
        title: "Love nature shampoo",
        price: 1.99,
        description:
          "Cleanse your hair and helps soothe your scalp with this dandruff control shampoo containing natural organic tea tree oil and aloe vera.",
        size: "small",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "8e92b992-02b5-4904-a12b-b6d7ae9a65e5",
        title: "Feminelle Intimate Wash Canberry",
        price: 2.23,
        description:
          "Gentle, soap-free intimate wash that cleanses and cares for your skin while protecting against odour and discomfort.",
        size: "small",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "a24f164a-6137-430e-8384-494df8773019",
        title: "Milk & Honey Gold Smoothing Sugar Scrub",
        price: 3.53,
        description:
          "Gentle, nourishing and smoothing sugar scrub that exfoliates, revitalises and locks in moisture for beautifully soft skin.",
        size: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "62db910c-fc19-4a11-8bab-1a955037b42a",
        title: "Glow Essentials Face Cream with Vitamins E & B3 SPF 10",
        price: 5.22,
        description: `Face cream designed to moisturise, protect and provide glowing skin.
          With Vitamin B3 that helps to even out skin tone and antioxidant Vitamin E.`,
        size: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: "b15c5066-b3a9-42a5-95d1-c10eaf38097b",
        title:
          "Johnson's vita-rich brightening body lotion was with pomegranate extracts.",
        price: 19.22,
        description: `Infused with pomegranate flower extract and moisturizing glycerin, this rich formula of JOHNSON'S® Vita-Rich Brightening Body Wash hydrates and brightens your skin.`,
        size: "large",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "29eb2be0-157b-4429-8785-324c41c68862",
        title: "Men Expert Clean Power 48H Anti-Perspirant Deodorant Roll on.",
        price: 8.22,
        description: `The 1st L'Oreal Paris Men Expert Deodorant enriched with an anti-bacterial (Zinc + ER-195) system for long lasting protection. `,
        size: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
