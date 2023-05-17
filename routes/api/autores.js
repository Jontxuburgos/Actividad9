const router = require('express').Router();

const { getAll, getById, create } = require('../../models/autores.model');

router.get("/", async (req, res) => {
    try {
        const [autores] = await getAll();
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
        res.status(500).json({ fatal: error.message })
    }
});




module.exports = router;