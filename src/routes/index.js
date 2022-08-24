const { Router } = require("express");
const cors = require("cors");
const router = Router();
const { Profesor } = require("../db.js")

router.use(cors());

router.get("/", async (req, res, next) => {
    try {
        const allProfes = await Profesor.findAll();
        res.send(allProfes);
    } catch (error) {
        res.json({ error })
    }
})

router.post("/profes" , async (res, req, next) => {
    try {
        const info = req.body;
        console.log(info)
        res.send(info);

    } catch (error) {
        res.json({ error })
    }
})

module.exports = router;
