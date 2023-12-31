import { useSelector, useDispatch } from "react-redux";

import { Ticket } from "../mock/tickets";
import type { RootState } from "../context/store";
import { add, pushOrder } from "../context/ticketsSlice";

const useTickets = () => {
  const tickets = useSelector((state: RootState) => state.tickets.value);
  const dispatch = useDispatch();

  const addTicket = (newTicket: Ticket) => {
    dispatch(add(newTicket))
  };

  const pushAnOrder = (ticketId: number, orderId: string) => {
    dispatch(pushOrder({ ticketId, orderId }))
  };

  return {
    tickets,
    addTicket,
    pushAnOrder,
  }
}

export default useTickets;