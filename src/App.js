import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, useInput, useTabs, useTitle, useClick } from "components";

function App() {
  const hooks = [{ useInput }, { useTabs }, { useTitle }, { useClick }];

  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />

        {hooks.map((hook, index) => {
          let hookName = Object.keys(hook)[0];

          return (
            <Route
              path={"/" + hookName}
              component={hooks[index][hookName]}
              key={index}
            />
          );
        })}
      </div>
    </Router>
  );
}

export default App;
