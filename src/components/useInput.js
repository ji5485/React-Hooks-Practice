import React, { useState } from "react";
import styled from "styled-components";

const Text = styled.div`
  font-size: 5rem;
  font-weight: 300;
  text-align: center;
  margin: 50px;
`;

const ButtonWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  font-size: 2rem;
  font-weight: 300;
  color: #333;
  border: 1px solid #333;
  padding: 20px 40px;
  cursor: pointer;
  transition: 0.1s all;

  &:hover {
    color: white;
    background: #333;
  }
`;

const Border = styled.div`
  height: 1px;
  background: #333;
  margin: 50px 0;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 1.5rem;
  font-weight: 300;
  display: block;
  margin: 0 auto;
  outline: none;
  border: 1.5px solid lightgrey;
  border-radius: 5px;
  transition: 0.3s border-color;

  &:focus {
    border-color: black;
  }
`;

// input
const inputHooks = (initialValue, validator) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;

    let willUpdate = typeof validator === "function" ? validator(value) : true;

    if (willUpdate) setValue(e.target.value);
  };

  return { value, onChange };
};

const useInput = () => {
  // number
  const [number, setNumber] = useState(0);
  const increment = () => setNumber(number + 1);
  const decrement = () => setNumber(number - 1);

  // input
  const maxLen = value => value.length <= 10;
  const name = inputHooks("Mr. ", maxLen);

  return (
    <div>
      <Text>{number}</Text>
      <ButtonWrapper>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </ButtonWrapper>

      <Border />

      <Input {...name} name="name" />
    </div>
  );
};

export default useInput;
