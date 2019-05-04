const express = require("express");
const path = require("path");
const cors = require("cors");
const importCsv = require("../import");
const client = require("../routes/client");
const accounts = require("../routes/accounts");
const accountLevels = require("../routes/accountLevels");
const accountTypes = require("../routes/accountTypes");
const settings = require("../routes/settings");
const products = require("../routes/products");
const colors = require("../routes/colors");
const suppliers = require("../routes/suppliers");
const materials = require("../routes/materials");
const subCategories = require("../routes/subCategories");
const groups = require("../routes/groups");
const categories = require("../routes/categories");
const marketPlaces = require("../routes/marketPlaces");
const persons = require("../routes/persons");
const identities = require("../routes/identities");
const companies = require("../routes/companies");
const marketSectors = require("../routes/marketSectors");
const officeSectors = require("../routes/officeSectors");
const users = require("../routes/users");
const auth = require("../routes/auth");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());
  app.use(express.static(path.join(__dirname, "../build")));
  app.use("/api/import", importCsv);
  app.use("/api/accounts", accounts);
  app.use("/api/accountTypes", accountTypes);
  app.use("/api/accountLevels", accountLevels);
  app.use("/api/settings", settings);
  app.use("/api/products", products);
  app.use("/api/colors", colors);
  app.use("/api/materials", materials);
  app.use("/api/suppliers", suppliers);
  app.use("/api/subCategories", subCategories);
  app.use("/api/groups", groups);
  app.use("/api/categories", categories);
  app.use("/api/marketPlaces", marketPlaces);
  app.use("/api/persons", persons);
  app.use("/api/identities", identities);
  app.use("/api/companies", companies);
  app.use("/api/marketSectors", marketSectors);
  app.use("/api/officeSectors", officeSectors);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use(error);
  app.use("*", client);
};
