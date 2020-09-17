const router = require("express").Router();
const auth = require("../middlewares/auth");
// dashboard route
router.get("/", auth,(req, res) => {
  res.json({
    error: null,
    data: {
      title: "My dashboard",
      content: "dashboard content",
      user: req.user,
    },
  });
});

module.exports = router;