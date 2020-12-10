import { useState } from "react";
import styled from "styled-components";
import Note from "../Note";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

function App() {
  const [notes, setNotes] = useState([
    {
      id: 322123,
      text:
        "In semper lobortis turpis faucibus sodales. Curabitur vitae urna lacinia, eleifend enim id, ultricies magna.",
      color: "#ebf1f5",
    },
    {
      id: 213,
      text:
        "In semper lobortis turpis faucibus sodales. Curabitur vitae urna lacinia, eleifend enim id, ultricies magna.",
      color: "#f7f5eb",
    },
  ]);

  return (
    <Container>
      <GlobalStyle />
      {notes.map((note) => (
        <Note key={note.id} note={note} notes={notes} setNotes={setNotes} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, 300px);
  margin: 90px auto;
  max-width: 1200px;
`;

export default App;
