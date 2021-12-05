const generateUniqueId = require("../utils/generateUniqueId");
const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    console.log("koe");
    const { email, password } = request.body;

    const id = generateUniqueId();

    await connection("users").insert({
      id,
      email,
      password,
    });

    return response.json({ id });
  },
};
