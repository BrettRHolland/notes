import { useEffect, useState } from "react";
import styled from "styled-components";
import Note from "../Note";
import { v4 as uuidv4 } from "uuid";
import { GlobalStyle } from "../../global-styles";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || [
      {
        id: uuidv4(),
        text:
          "In semper lobortis turpis faucibus sodales. Curabitur vitae urna lacinia, eleifend enim id, ultricies magna.",
        color: { primary: "#f2f2f2", darker: "#c7c7c7", darkest: "#7c7c7c" },
      },
      {
        id: uuidv4(),
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ipsum et tellus lobortis elementum ut id mauris.",
        color: { primary: "#ebf1f5", darker: "#c9d9e4", darkest: "#88a2b3" },
      },
      {
        id: uuidv4(),
        text:
          "Integer a nibh rhoncus, vulputate arcu ac, efficitur nisl. Proin ornare mauris ut neque blandit, ut vehicula metus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et cursus odio.",
        color: { primary: "#f0e4e4", darker: "#e0c1c1", darkest: "#ba7e7e" },
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNote = () => {
    const newNote = {
      id: uuidv4(),
      text: "Click the edit button below to get started.",
      color: { primary: "#f2f2f2", darker: "#c7c7c7", darkest: "#7c7c7c" },
    };
    setNotes([newNote, ...notes]);
  };

  return (
    <>
      <GlobalStyle />
      <Header>
        <Button onClick={createNote}>
          <Icon
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </Icon>
        </Button>
      </Header>
      <NotesSection>
        {notes.map((note) => (
          <Note key={note.id} note={note} notes={notes} setNotes={setNotes} />
        ))}
      </NotesSection>
    </>
  );
}
const Header = styled.header`
  margin: 0 auto;
  padding: 15px;
`;

const Button = styled.button`
  background-color: #f2f2f2;
  border-radius: 2px;
  height: 50px;
  width: 50px;

  &:focus {
    background-color: #c7c7c7;
    outline: none;
  }

  &:hover {
    background-color: #c7c7c7;
  }
`;

const Icon = styled.svg`
  height: 30px;
  width: 30px;
`;

const NotesSection = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
`;

export default App;
