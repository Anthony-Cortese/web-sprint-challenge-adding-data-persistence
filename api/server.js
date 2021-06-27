// build your server here and require it from index.js
// build your server here and require it from index.js
const express = require("express");
const helmet = require("helmet");
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.get("*", (req, res) => {
  res.send(`<h3>your Portman is up and running</h3>`);
});

module.exports = server;
