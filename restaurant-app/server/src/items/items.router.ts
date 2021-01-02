import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { Item } from "./item.interface";

export const itemsRouter = express.Router();

itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();
    res.send(items).status(200);
  } catch (error) {
    res.send(error.message).status(404);
  }
});

itemsRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const item: Item = await ItemService.find(id);
    res.send(item).status(200);
  } catch (error) {
    res.send(error.message).status(404);
  }
});

itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: Item = req.body;
    await ItemService.create(item);
    res.send("Successful created").sendStatus(201);
  } catch (error) {
    res.send(error.message).send(404);
  }
});

itemsRouter.put("/", async (req: Request, res: Response) => {
  try {
    const item: Item = req.body;
    await ItemService.update(item);
    res.send("Update successful").sendStatus(200);
  } catch (error) {
    res.send(error.message).sendStatus(500);
  }
});

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await ItemService.remover(id);
    res.send("Deletion successful").sendStatus(200);
  } catch (error) {
    res.send(error.message).sendStatus(500);
  }
});
