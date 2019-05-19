import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.div`
  color: #333;
  padding: 20px 40px;
  border: 0.5px solid #333;
  font-size: 1.5rem;
  font-weight: 300;
  margin-right: 20px;
  margin-bottom: 20px;
  transition: 0.1s all;

  &:hover {
    background: #333;
    color: white;
  }
`;

const Text = styled.div`
  font-size: 5rem;
  font-weight: 300;
  text-align: center;
  margin: 50px;
`;

const contents = [
  {
    tab: "Section 1",
    content: "This is a Section 1"
  },
  {
    tab: "Section 2",
    content: "This is a Section 2"
  },
  {
    tab: "Section 3",
    content: "This is a Section 3"
  },
  {
    tab: "Section 4",
    content: "This is a Section 4"
  },
  {
    tab: "Section 5",
    content: "This is a Section 5"
  },
  {
    tab: "Section 6",
    content: "This is a Section 6"
  },
  {
    tab: "Section 7",
    content: "This is a Section 7"
  },
  {
    tab: "Section 8",
    content: "This is a Section 8"
  }
];

const tabsHooks = (initialIndex, allTabs) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [index, setIndex] = useState(initialIndex);

  return {
    currentItem: allTabs[index],
    changeItem: setIndex
  };
};

const useTabs = () => {
  const { currentItem, changeItem } = tabsHooks(0, contents);

  return (
    <div>
      <Text>{currentItem.content}</Text>
      <Wrapper>
        {contents.map((item, index) => (
          <Button key={index} onClick={() => changeItem(index)}>
            {item.tab}
          </Button>
        ))}
      </Wrapper>
    </div>
  );
};

export default useTabs;
