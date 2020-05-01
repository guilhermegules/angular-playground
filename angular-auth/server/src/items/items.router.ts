import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { Item } from "./item.interface";
import { Items } from "./items.interface";

export const itemsRouter = express.Router();

itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Items = await ItemService.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

itemsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Item = await ItemService.find(id);
    res.status(200).send(item);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: Item = req.body.item;

    await ItemService.create(item);

    res.sendStatus(201);
  } catch (error) {
    res.send(404).send(error.message);
  }
});

itemsRouter.put("/", async (req: Request, res: Response) => {
  try {
    const item: Item = req.body.item;
    await ItemService.update(item);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
});

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await ItemService.remover(id);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
});
