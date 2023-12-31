import styled from "styled-components"

interface InputProps {
  id?: string,
  label?: string,
  placeholder: string,
  type?: React.HTMLInputTypeAttribute,
  onChange: (value: string) => void,
}

export const Input = ({
  id,
  label,
  placeholder,
  type = "text",
  onChange,
}: InputProps) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <SInput
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => onChange(ev.target.value)}
        autoComplete="off"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5em;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: .8rem;
`;

const SInput = styled.input`
  border: none;
  padding: .5em;
  border-radius: 8px;
`;