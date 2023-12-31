import styled from 'styled-components';

import { Ticket } from '../components/ticket';
import useTickets from '../hooks/useTickets';

const TicketsPage = () => {
  const { tickets } = useTickets();

  return (
    <Wrapper>
      <GridContainer>
        {tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
          />
        ))}
      </GridContainer>
    </Wrapper >
  )
}

export default TicketsPage;

const Wrapper = styled.div`
  margin: auto;
  max-width: 1080px;
`;

const GridContainer = styled.div`
  gap: 1.2em;
  display: grid;
  place-items: center;
  align-items: start;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 530px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;