const router = require('express').Router();

const { getAll } = require('../../models/autores.model');

router.get('/', async (req, res) => {
    try {
        const [autores] = await getAll();
        res.json(autores);
    } catch (error) {
        res.status(500).json({ fatal: error.message });
    }
});





module.exports = router;