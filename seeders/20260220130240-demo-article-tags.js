"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ArticleTags", [
      {
        articleId: 27,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        articleId: 36,
        tagId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        articleId: 35,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        articleId: 32,
        tagId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        articleId: 30,
        tagId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        articleId: 25,
        tagId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        articleId: 25,
        tagId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ArticleTags", null, {});
  },
};
