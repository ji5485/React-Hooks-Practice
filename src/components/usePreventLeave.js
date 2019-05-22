import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const preventLeaveHooks = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

const usePreventLeave = () => {
  const { enablePrevent, disablePrevent } = preventLeaveHooks();

  return (
    <ButtonWrapper>
      <Button onClick={enablePrevent}>Protect</Button>
      <Button onClick={disablePrevent}>Unprotect</Button>
    </ButtonWrapper>
  );
};

export default usePreventLeave;
