const router = require("express").Router();

const { getByAutoresId } = require("../../models/posts.model");
const { getAll, getById, create } = require("../../models/autores.model");

router.get("/", async (req, res) => {
  try {
    const [autores] = await getAll();
    res.json(autores);
  } catch (error) {
    res.status(500).json({ fatal: error.message });
  }
});

router.get("/posts", async (req, res) => {
  try {
    const [autores] = await getAll();

    for (let autor of autores) {
      const [posts] = await getByAutoresId(autor.id);
      autor.posts = posts;
    }

    res.json(autores);
  } catch (error) {
    res.status(500).json({ fatal: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const [result] = await create(req.body);
    const [newAutor] = await getById(result.insertId);
    res.json(newAutor[0]);
  } catch (error) {
    res.status(500).json({ fatal: error.message });
  }
});

module.exports = router;
