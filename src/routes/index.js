const { Router } = require("express");
const cors = require("cors");
const router = Router();
const { Profesor } = require("../db.js")

router.use(cors());

// router.use("/owners", ownersRoute);
router.use("/", async (req, res, next) => {
    try {
        const allProfes = await Profesor.findAll();
        res.send(allProfes);
    } catch (error) {
        res.json(error)
    }
})

router.post("/profes" , async (res, req, next) => {
    try {
        const body = req.body;
        console.log(body)
        res.send(body);

    } catch (error) {
        res.json(error)
    }
})

module.exports = router;
