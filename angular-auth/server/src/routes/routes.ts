import { Router } from "express";

const routes = Router();

routes.post("/authenticate", (req, res) => {
  res.send("Hello node");
});

routes.get("/", (req, res) => {
  res.send("Hello Home");
});

export default routes;
