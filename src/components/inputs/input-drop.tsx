import styled from "styled-components";
import { useState, useCallback, ChangeEvent } from "react";

interface ItemProp {
  id: string | number,
  name: string,
}

interface InputDropProps {
  id?: string,
  label?: string,
  defaultItems: ItemProp[],
  placeholder: string,
  onSelected: (item: ItemProp) => void,
}

export const InputDrop = ({
  id,
  label,
  defaultItems,
  placeholder,
  onSelected,
}: InputDropProps) => {
  const [items, setItems] = useState<ItemProp[]>(defaultItems);
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDropdown = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onItemClick = useCallback((item: ItemProp) => {
    setValue(item.name);
    onSelected(item);
    closeDropdown();
  }, [closeDropdown, onSelected]);

  const onChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const text = ev.target.value.trim();

    if (!text) {
      return setItems(defaultItems);
    }

    const filteredItems = defaultItems.filter((item) => (
      item.name.toLowerCase().includes(text.toLowerCase())
    ));

    setItems(filteredItems);
  }, [defaultItems]);

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <SInput
        id={id}
        name={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onFocus={openDropdown}
        onChange={onChange}
        autoComplete="off"
      />
      <DropdownContent hidden={isOpen}>
        {items.map((item) => (
          <DropdownItem
            key={item.id}
            onClick={() => onItemClick(item)}
          >
            {item.name}
          </DropdownItem>
        ))}
      </DropdownContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5em;
  position: relative;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: .8rem;
`;

const SInput = styled.input`
  padding: .5em;
  border-radius: 8px;
  border: none;

  &:focus{
    border: 1px solid gray;
  }
`;

const DropdownContent = styled.div<{ hidden: boolean }>`
  display: ${(props) => (props.hidden ? 'block' : 'none')};
  position: absolute;
  background-color: #f1f1f1;
  width: 100%;
  top: 55px;
  max-height: 160px;
  overflow: auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;
