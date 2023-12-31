import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #f1f1f1;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  padding: 2em .5em;
  flex: 1;
  overflow: auto;
`;