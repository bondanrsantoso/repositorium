"use strict";
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

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

    const fakeUserCount = 10;
    const users = [];
    for (let i = 0; i < fakeUserCount; i++) {
      users[i] = {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: bcrypt.hashSync("password", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }

    await queryInterface.bulkInsert("users", users, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("users", null, {});
  },
};
