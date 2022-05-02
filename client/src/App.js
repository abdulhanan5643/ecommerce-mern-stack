import React, { useEffect } from "react";
import { Api } from "./apiCall/api";

const App = () => {
  Api();
  return ( 
    <>
    Hello World!
    </>
   );
}
 
export default App;