import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "danger" | "warning",
  onClick?: () => void,
  children: React.ReactNode,
}

export const Button = ({
  variant,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <SButton
      onClick={onClick}
      variant={variant}
    >
      {children}
    </SButton>
  )
}

const SButton = styled.button<ButtonProps>`
  background-color:  ${(props) => (props.variant === "danger" ? "red" : "green")};
  color: #fff;
  font-weight: bold;
  padding: .5em .8em;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
    scale: 0.98;
  }
`;