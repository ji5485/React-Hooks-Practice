import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, useInput, useTabs } from "components";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/useInput" component={useInput} />
        <Route path="/useTabs" component={useTabs} />
      </div>
    </Router>
  );
}

export default App;
