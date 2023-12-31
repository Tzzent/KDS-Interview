import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Wrapper>
      <UlWrapper>
        <li><NavLink to="/">Orders</NavLink></li>
        <li><NavLink to="/make-order">Make order</NavLink></li>
      </UlWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  background-color: #fff;
  box-shadow: 0px 0px 15px #000;
`;

const UlWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: right;
  gap: .5em;
  padding: 0 .5em;
  width: 100%;
  max-width: 1080px;
`;