import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  padding: 30px;
  margin-bottom: 30px;
`;

const LinkWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 20px 40px;
  border: 0.5px solid #333;
  font-size: 1.5rem;
  font-weight: 300;
  margin-right: 20px;
  margin-bottom: 20px;
  transition: 0.3s all;

  &:hover {
    background: #333;
    color: white;
  }
`;

const Home = () => {
  const link = [
    "useInput",
    "useTabs",
    "useTitle",
    "useClick",
    "useConfirm",
    "usePreventLeave",
    "useBeforeLeave",
    "useFadeIn",
    "useNetwork",
    "useScroll",
    "useFullscreen",
    "useNotification",
    "useAxios"
  ];

  const linkList = link.map(item => (
    <LinkButton to={"/" + item} key={item}>
      {item}
    </LinkButton>
  ));

  return (
    <div>
      <Title>React Hooks Practice</Title>
      <LinkWrapper>{linkList}</LinkWrapper>
    </div>
  );
};

export default Home;
