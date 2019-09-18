const router = require('express').Router();
const projectsController = require('../controllers/projects');

router.get('/', projectsController.getAllProjects, (req, res) => {
  console.log(res.locals.projects);
  res.status(200).json(res.locals.projects);
});

module.exports = router;