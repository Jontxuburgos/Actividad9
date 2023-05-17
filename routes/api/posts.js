const {getAll} = require("../../models/posts.model");

const router = require('express').Router();

router.get("/", async(req, res) => { 
  try {
    const [result] = await getAll();
    console.log(result.length);
    res.json(result);
  } catch (error) {
    res.status(503).json({ fatal: error.message });
  }
});




module.exports = router;