const router = require('express').Router();
const projectsController = require('../controllers/projects');

router.get('/', projectsController.getAllProjects, (req, res) => {
  res.status(200).json(res.locals.projects);
});

module.exports = router;