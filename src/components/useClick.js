import React, { useRef, useEffect } from "react";

const clickHooks = onClick => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const element = useRef();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
  });

  return element;
};

const useClick = () => {
  const sayHello = () => console.log("Hello");
  const title = clickHooks(sayHello);

  return (
    <div>
      <h1 ref={title}>ABC</h1>
    </div>
  );
};

export default useClick;
