import React, { useState } from "react";
import styled from "styled-components";

const Number = styled.div`
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

const useInput = () => {
  const [number, setNumber] = useState(0);

  const increment = () => setNumber(number + 1);
  const decrement = () => setNumber(number - 1);

  return (
    <div>
      <Number>{number}</Number>
      <ButtonWrapper>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </ButtonWrapper>
    </div>
  );
};

export default useInput;
