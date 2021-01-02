import { Item } from "./item.interface";

const items: Item[] = [
  {
    id: 1,
    name: "Burger",
    price: 5.99,
    description: "Tasty",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
  },
  {
    id: 2,
    name: "Pizza",
    price: 2.99,
    description: "Cheesy",
    image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
  },
  {
    id: 3,
    name: "Tea",
    price: 1.99,
    description: "Informative",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
  },
  {
    id: 4,
    name: "Salad",
    price: 3.5,
    description: "Salad healthy",
    image: "https://cdn.auth0.com/blog/whatabyte/salad-sm.png",
  },
];

export const findAll = async (): Promise<Item[]> => {
  return items;
};

export const find = async (id: number): Promise<Item> => {
  const item = items.find((item) => item.id === id);
  if (item) {
    return item;
  }
  throw new Error("No record found");
};

export const create = async (newItem: Item): Promise<void> => {
  items.push(newItem);
};

export const update = async (updatedItem: Item): Promise<void> => {
  const item = items.find((item) => item.id === updatedItem.id);
  if (item) {
    items[updatedItem.id] = updatedItem;
    return;
  }
  throw new Error("No record found to update");
};

export const remover = async (id: number): Promise<void> => {
  const record: Item = items[id];
  if (record) {
    delete items[id];
    return;
  }
  throw new Error("No record found to delete");
};
