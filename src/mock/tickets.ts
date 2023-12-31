import { v4 as uuid } from "uuid";

import { Clients } from "./clients";
import { Waiters } from "./waiters";
import { Dishes } from "./dishes";

export type Order = {
  id: string,
  quantity: number,
  dish?: typeof Dishes[number],
  description?: string,
  status: number,
}

export type Ticket = {
  id: number,
  client: typeof Clients[number],
  waiter: typeof Waiters[number],
  orders: Order[],
  date: string,
}

export const Tickets: Ticket[] = [
  {
    id: 0,
    client: Clients[1],
    waiter: Waiters[0],
    orders: [
      {
        id: uuid(),
        quantity: 4,
        dish: Dishes[0],
        description: "Some water.",
        status: 0,
      },
      {
        id: uuid(),
        quantity: 3,
        dish: Dishes[3],
        description: "Without mayonnaise.",
        status: 2,
      }
    ],
    date: (new Date()).toISOString(),
  },
]
