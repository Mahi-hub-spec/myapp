import React from "react";
import { My_named_Component,Another_named_Component } from "./practice/practice_import";
import default_Component from "./practice/practice_export";
const Welcome = (props) => {
  return <div>{props.children}</div>;
};

const App = () => {
  return (
    <Welcome>
      <h1>Hello, World!</h1>
      <p>Welcome to React.</p>
    </Welcome>
  );
};  
export default App;
