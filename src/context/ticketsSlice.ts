import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Ticket, Tickets } from "../mock/tickets";

export interface TicketsStore {
  value: Ticket[]
}

const initialState: TicketsStore = {
  value: Tickets
}

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Ticket>) => {
      state.value.push(action.payload);
    },
    pushOrder: (state, action: PayloadAction<{ ticketId: number, orderId: string }>) => {

      const ticketsToUpdate = state.value.find(t => t.id === action.payload.ticketId);

      if (ticketsToUpdate) {
        ticketsToUpdate.orders = ticketsToUpdate.orders.map((order) => {
          if (order.id === action.payload.orderId && order.status < 2) {
            return {
              ...order,
              status: order.status + 1,
            }
          }

          return order;
        });
      }
    }
  }
});

export const {
  add,
  pushOrder,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;