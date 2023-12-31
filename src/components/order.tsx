import styled from "styled-components";
import { useMemo } from "react";
import { PiHourglassLowFill, PiCookingPotBold } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";

import { Order as OrderType } from "../mock/tickets";
import useTickets from "../hooks/useTickets";

interface OrderProps {
  ticketId: number,
  order: OrderType,
}

export const Order = ({
  ticketId,
  order,
}: OrderProps) => {
  const { pushAnOrder } = useTickets();

  const status = useMemo(() => {
    if (order.status === 0) {
      return {
        icon: PiHourglassLowFill,
        color: "#eede00",
        title: "Waiting"
      }
    }

    if (order.status === 1) {
      return {
        icon: PiCookingPotBold,
        color: "#b0ffa9",
        title: "Cooking"
      }
    }

    if (order.status === 2) {
      return {
        icon: FaCheckCircle,
        color: "#00ff0d",
        title: "Done"
      }
    }
  }, [order.status]);

  const onChangeOrder = () => {
    pushAnOrder(ticketId, order.id);
  };

  return (
    <Wrapper onClick={onChangeOrder}>
      <Quantity>{order.quantity}</Quantity>
      <OrderBox>
        <Name>{order.dish?.name}</Name>
        <Description>{order.description}</Description>
      </OrderBox>
      <Status>
        {status && <status.icon color={status.color} title={status.title} />}
      </Status>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #8f8f8f;
  padding: .7em .5em;
  color: #3d3d3d;
  cursor: pointer;

  &:hover{
    background-color: #000;
    color: #fff;
  }
`;

const Quantity = styled.span`
  font-size: 1.5rem;
`;

const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  line-height: .5;
  width: 100%;
  margin: 0 .5em;
`;

const Name = styled.span`
  font-weight: bold;
`;

const Description = styled.p`
  font-size: .8rem;
  color: #b1b1b1;
`;

const Status = styled.div`

`;