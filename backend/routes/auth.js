const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = {
    id: "101",
    name: "Akhil",
  };

  res.json(obj);
});

module.exports = router;