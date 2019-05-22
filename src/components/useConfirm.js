import React from "react";
import styled from "styled-components";

const Button = styled.div`
  font-size: 2rem;
  font-weight: 300;
  color: #333;
  border: 1px solid #333;
  padding: 20px 40px;
  cursor: pointer;
  transition: 0.1s all;
  width: 300px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    color: white;
    background: #333;
  }
`;

const confirmHooks = (message, onConfirm, onCancel) => {
  if (onConfirm && typeof onConfirm === "function") return;
  if (onCancel && typeof onCancel === "function") return;

  const confirmAction = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(message)) onConfirm();
    else onCancel();
  };

  return confirmAction;
};

const useConfirm = () => {
  const deleteWorld = () => console.log("Deleting the World...");
  const abort = () => console.log("Aborted");
  const confirmDelete = confirmHooks("Are you sure?", deleteWorld, abort);

  return (
    <div>
      <Button onClick={confirmDelete}>Delete the World</Button>
    </div>
  );
};

export default useConfirm;
