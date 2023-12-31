import styled from "styled-components";
import { format } from "date-fns";

import { Order } from "./order";
import { Ticket as TicketType } from "../mock/tickets";

interface TicketProps {
  ticket: TicketType,
}

export const Ticket = ({
  ticket
}: TicketProps) => {
  return (
    <Wrapper>
      <Head>
        <Client>{ticket.client.name}</Client>
        <RightHead>
          <IdOrder>#ORDER_{ticket.id}</IdOrder>
          <By>Served by {ticket.waiter.name}</By>
        </RightHead>
      </Head>

      <WrappOrders>
        {ticket.orders.map((order) => (
          <Order
            key={order.id}
            ticketId={ticket.id}
            order={order}
          />
        ))}
      </WrappOrders>

      <Foot>
        {format(ticket.date, "dd/MM/yyyy HH:mm:ss")}
      </Foot>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  width: 100%;
  max-height: 400px;
  box-shadow: .5px .5px 5px black;
  background-color: #00ac81;
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: .3em .5em;
`;

const Client = styled.div`
  background-color: #707070;
  color: #fff;
  padding: 4px;
  font-size: .7rem;
  border-radius: 2px;
`;

const RightHead = styled.div`
  text-align: right;
  line-height: .3;
  `;

const IdOrder = styled.span`
  font-size: .8rem;
`;

const By = styled.p`
  font-size: .7rem;
`;

const WrappOrders = styled.div`
  background-color: #fff;
  flex: 1;
  overflow: auto;
`;

const Foot = styled.div`
  padding: .3em .5em;
  color: #fff;
`;