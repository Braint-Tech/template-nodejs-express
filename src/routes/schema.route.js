const router = require("express").Router();

const schemaController = require("../controllers/schema.controller");

router.get('/schema', schemaController.createTables);

module.exports = router;