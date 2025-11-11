import React from "react";
import { My_named_Component,Another_named_Component } from "./practice/practice_import";
import default_Component from "./practice/practice_export";
const App = () => {
return( 
  <div>
    <My_named_Component/>
    <Another_named_Component/>
    <default_Component/>
  </div>
  
);

};  
export default App;
