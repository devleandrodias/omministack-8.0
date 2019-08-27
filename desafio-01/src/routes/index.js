import { Router } from "express";

const routes = new Router();
const projects = [];

routes.get("/projects", (req, res) => {
  return res.json(projects);
});

routes.post("/projects", (req, res) => {
  const { title, tasks } = req.body;

  projects.push({ title, tasks, id: Math.random() });

  return res.json({ ok: "Projeto incluido com sucesso!" });
});

routes.put("/projects/:id");

export default routes;
