const express = require("express");
const router = express.Router();

const userProductController = require("../controllers/user.product.controller");

router.get("/stats1", userProductController.stats1);
router.get("/stats2", userProductController.stats2);
router.get("/:username/stats3", userProductController.stats3);

router.get("/", userProductController.findAll);
router.get("/:username", userProductController.findOne);
router.post("/", userProductController.create);
router.patch("/:username", userProductController.update);
router.delete("/username/product/:id", userProductController.delete);


module.exports = router;
