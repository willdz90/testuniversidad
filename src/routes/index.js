const { Router } = require("express");
const cors = require("cors");
const router = Router();
const { Profesor } = require("../db.js")

router.use(cors());

// router.use("/owners", ownersRoute);
router.use("/", (req, res, next) => {
    try {
        const allProfes = Profesor.findAll();

        res.send(allProfes);
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;
