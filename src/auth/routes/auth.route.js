const router = require("express").Router();
const userController = require("../controllers/auth.controller");
const auth = require("../middleware/auth");

router.post('/user/auth', userController.auth);

module.exports = router;