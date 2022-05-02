import React, { useEffect } from "react";
import { Api } from "./apiCall/api";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    Api();
  }, []);
  return (
    <>
      <Navbar />
      Hello World!
    </>
  );
};

export default App;
