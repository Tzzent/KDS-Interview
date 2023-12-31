import styled from "styled-components"

export const Footer = () => {
  return (
    <Wrapper>
      <span>Made by @Tzzent</span>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  text-align: center;
  padding: .5em 1em;
  font-size: .8rem;
  font-weight: bold;
`;