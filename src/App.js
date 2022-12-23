import { style } from "@mui/system";
import { useState } from "react";
import styled from "styled-components";
import { CreateNewFolder, Search } from "@mui/icons-material";
const App = () => {
  const [searchData, setSearchData] = useState({
    search: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setSearchData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  return (
    <div className="container">
      <button className="edit">Edit</button>
      <h1 className="heading">Folders</h1>
      <Wrapper></Wrapper>
      <Search className="search-icon"></Search>
      <input
        className="search-bar"
        type="search"
        name="search"
        // value={searchData}
        onChange={handleChange}
      />
      <h3 className="file--location">Storage</h3>
      <Notes>
        <NoteContainer>d</NoteContainer>
      </Notes>
      <Directory>
        <CreateNewFolder></CreateNewFolder>
        <AddNote></AddNote>
      </Directory>
    </div>
  );
};
export default App;

const Notes = styled.div`
  width: 100%;
  height: 100%;
`;
const NoteContainer = styled.div`
  background: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  border-radius: 10px;
  `;
  const Directory = styled.div`
  position: fixed;
  bottom: 5px;
  background: #999;
  height: 35px;
  width: 100%;
  margin: 0 5px;
  over-flow: hidden;
`;
const AddNote = styled.div``;
const Wrapper = styled.div``;
