const express = require("express");
const Projects = require("./model.js");
const router = express.Router();

router.get("/", (req, res) => {
  Projects.findProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/", (req, res, next) => {
  Projects.createProject(req.body)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
