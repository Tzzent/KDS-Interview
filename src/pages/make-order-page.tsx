import styled from "styled-components";
import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

import { Clients } from "../mock/clients";
import { Waiters } from "../mock/waiters";
import { Dishes } from "../mock/dishes";
import { Order as OrderType } from "../mock/tickets";

import { Input } from "../components/inputs/input";
import { InputDrop } from "../components/inputs/input-drop";
import { Button } from "../components/buttons/button";
import useTickets from "../hooks/useTickets";

const MakeOrderPage = () => {
  const { addTicket, tickets } = useTickets();
  const [client, setClient] = useState<typeof Clients[number]>();
  const [waiter, setWaiter] = useState<typeof Waiters[number]>();
  const [orders, setOrders] = useState<OrderType[]>([
    {
      id: uuid(),
      dish: undefined,
      description: undefined,
      quantity: 0,
      status: 0,
    }
  ]);

  const onAddMoreOrder = useCallback(() => {
    setOrders((prev) => [
      ...prev,
      {
        id: uuid(),
        dish: undefined,
        description: undefined,
        quantity: 0,
        status: 0,
      }
    ]);
  }, []);

  const onRemoveOrder = useCallback((order: OrderType) => {
    setOrders((prev) => prev.filter(({ id }) => id !== order.id));
  }, []);

  const onSubmit = () => {
    if (!client || !waiter) return;

    addTicket({
      id: tickets.length,
      client: client,
      orders: orders,
      waiter: waiter,
      date: (new Date()).toISOString(),
    });

    setOrders([]);
  };

  const onDishSelected = useCallback((orderId: string, item: typeof Dishes[number]) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, dish: item } : order
      )
    );
  }, []);

  const onChangeQuantity = useCallback((orderId: string, value: string) => {
    const intValue = parseInt(value, 10);

    if (isNaN(intValue)) return;

    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, quantity: intValue } : order
      )
    );
  }, []);

  const onChangeDescription = useCallback((orderId: string, value: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, description: value } : order
      )
    );
  }, []);

  return (
    <Wrapper>
      <Title>Place customer order!</Title>
      <Form>
        <Box>
          <InputDrop
            id="client"
            label="Client:"
            defaultItems={Clients}
            placeholder="Enter the client"
            onSelected={(item) => setClient(item as typeof Clients[number])}
          />
          <InputDrop
            id="waiter"
            label="Waiter:"
            defaultItems={Waiters}
            placeholder="Enter the waiter"
            onSelected={(item) => setWaiter(item as typeof Waiters[number])}
          />
          <Button onClick={onSubmit}>
            Send order
          </Button>
        </Box>

        <Box>
          {orders.map((order, index) => (
            <Order key={index}>
              <Close>
                <Button
                  variant="danger"
                  onClick={() => onRemoveOrder(order)}
                >
                  X
                </Button>
              </Close>
              <InputDrop
                label={`Order #${index}`}
                placeholder="Enter the dish..."
                defaultItems={Dishes}
                onSelected={(item) => onDishSelected(order.id, item as typeof Dishes[number])}
              />
              <Input
                placeholder="Quantity"
                onChange={(value) => onChangeQuantity(order.id, value)}
              />
              <Input
                placeholder="Optional"
                onChange={(value) => onChangeDescription(order.id, value)}
              />
            </Order>
          ))}
          <Button onClick={onAddMoreOrder}>
            Add more +
          </Button>
        </Box>
      </Form>
    </Wrapper>
  )
}

export default MakeOrderPage;

const Wrapper = styled.div`
  margin: auto;
  max-width: 1080px;
`;

const Title = styled.h1`
  color: #3b3b3b;
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5em;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8em;
  max-height: 500px;
`;

const Order = styled.div`
  background-color: #dbdbdb;
  padding: 1em .5em;
  border-radius: 12px;
  position: relative;
`;

const Close = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;