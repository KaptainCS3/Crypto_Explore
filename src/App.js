import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";
const App = () => {
  return(
    <div className="container-app">
      <button>Edit</button>
      <h1 className="heading">Folders</h1>
      <input type='search' />
      <h3>Storage</h3>
      <Notes>

      </Notes>
    </div>
  );
};
export default App;

const Notes = styled.div`

`
