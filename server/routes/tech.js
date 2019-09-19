const router = require("express").Router();
const techController = require('../controllers/tech.js');

router.post('/', techController.getResources, (req, res) => {
  res.status(200).json(res.locals.resources);
})

module.exports = router;