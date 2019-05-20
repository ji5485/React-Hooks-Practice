import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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
  margin-top: 50px;

  &:focus {
    border-color: black;
  }
`;

const titleHooks = initialTitle => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const titleTab = document.querySelector("title");
    titleTab.innerHTML = title;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(updateTitle, [title]);

  return setTitle;
};

const inputHooks = initialValue => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;

    setValue(value);
  };

  return { value, onChange };
};

const useTitle = () => {
  const titleUpdator = titleHooks("useTitle");
  const title = inputHooks("");

  return (
    <Wrapper>
      Title Updator
      <br />
      <Input
        {...title}
        onBlur={() => titleUpdator(title.value || "Default Title")}
      />
    </Wrapper>
  );
};

export default useTitle;
