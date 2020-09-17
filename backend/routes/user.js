const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const userControllers = require("../controllers/userControllers");

router.post("/login", catchErrors(userControllers.login));
router.post("/register", catchErrors(userControllers.register));
router.get("/user", catchErrors(userControllers.getuserDetails))

module.exports = router;