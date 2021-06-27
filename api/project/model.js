const db = require("../../data/dbConfig.js");
// const helpers = require("../../data/helpers/booleanHelpers.js");
async function findProjects() {
  const projectsArray = await db("projects").select(
    "project_id",
    "project_name",
    "project_description",
    "project_completed"
  );
  projectsArray.forEach((result) => {
    if (result.project_completed === 1) {
      result.project_completed = true;
    } else {
      result.project_completed = false;
    }
  });
  return projectsArray;
}
function getProjectById(id) {
  return db("projects").where("project_id", id).first();
}
const createProject = async (project) => {
  const [id] = await db("projects").insert(project);

  const createdProject = await getProjectById(id);
  [createdProject].forEach((result) => {
    if (result.project_completed === 1) {
      result.project_completed = true;
    } else {
      result.project_completed = false;
    }
  });
  return createdProject;
};
module.exports = { findProjects, createProject };
