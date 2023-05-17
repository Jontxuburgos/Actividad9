const { getAll, create, getById } = require("../../models/posts.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const [result] = await getAll();
    console.log(result.length);
    res.json(result);
  } catch (error) {
    res.status(503).json({ fatal: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const [result] = await create(req.body);
    const [posts] = await getById(result.insertId);
    res.json(posts[0]);
  } catch (error) {
    console.log(error);
    res.json({ fatal: error.message });
  }
});

module.exports = router;
