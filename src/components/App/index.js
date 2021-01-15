import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Note from "../Note";
import { v4 as uuidv4 } from "uuid";
import { GlobalStyle } from "../../global-styles";

const colors = [
  { primary: "#f2f2f2", darker: "#c7c7c7", darkest: "#7c7c7c" },
  { primary: "#ebf1f5", darker: "#c9d9e4", darkest: "#88a2b3" },
  { primary: "#f7f5eb", darker: "#f1ebcb", darkest: "#a79e6f" },
  { primary: "#f0e4e4", darker: "#e0c1c1", darkest: "#ba7e7e" },
];

function App() {
  const [showColorPalette, setShowColorPalette] = useState(false);
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

  const showColorOptions = () => {
    if (showColorPalette) {
      setShowColorPalette(false);
    } else {
      setShowColorPalette(true);
    }
  };

  const createNote = (color) => {
    setShowColorPalette(false);
    const newNote = {
      id: uuidv4(),
      text: "Click the edit button below to get started.",
      color,
    };
    setNotes([newNote, ...notes]);
  };

  return (
    <>
      <GlobalStyle />
      <Header>
        <NewNote>
          <Button onClick={showColorOptions}>
            <Icon
              open={showColorPalette}
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
          {showColorPalette ? (
            <ColorPalette>
              {colors.map((color) => (
                <Color
                  key={color.primary}
                  bgColor={color.darker}
                  onClick={() => createNote(color)}
                ></Color>
              ))}
            </ColorPalette>
          ) : null}
        </NewNote>
      </Header>
      <NotesSection>
        {notes.map((note) => (
          <Note key={note.id} note={note} notes={notes} setNotes={setNotes} />
        ))}
      </NotesSection>
    </>
  );
}

const rotate = keyframes`
  from {
    transform: rotate(0);
    visibility: visible;
  }

  to {
    transform: rotate(45deg);
  }
`;

const slideOut = keyframes`
  from {
    transform: translate3d(-30px, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const slide1 = keyframes`
  from {
    transform: translate3d(0, 0, 0) scale(0.25);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const slide2 = keyframes`
  from {
    transform: translate3d(-60px, 0, 0) scale(0.25);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const slide3 = keyframes`
  from {
    transform: translate3d(-105px, 0, 0) scale(0.25);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const slide4 = keyframes`
  from {
    transform: translate3d(-150px, 0, 0) scale(0.25);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const Header = styled.header`
  height: 90px;
  padding: 20px;
`;

const NewNote = styled.div`
  position: relative;
`;

const Button = styled.button`
  background-color: #f2f2f2;
  border-radius: 2px;
  height: 50px;
  position: absolute;
  z-index: 5;
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
  transform: ${(props) => (props.open ? "rotate(45deg)" : "")};
  animation: ${(props) =>
    props.open
      ? css`
          ${rotate} 0.25s linear
        `
      : ""};
`;

const ColorPalette = styled.div`
  background-color: #f2f2f2;
  border-radius: 2px;
  display: flex;
  align-items: center;
  height: 50px;
  padding-right: 15px;
  position: absolute;
  left: 51px;
  animation: ${slideOut} 0.4s ease-in-out;
`;

const Color = styled.button`
  background-color: ${(props) => props.bgColor || "#f2f2f2"};
  border-radius: 50%;
  margin-left: 15px;
  height: 30px;
  width: 30px;

  :nth-of-type(1) {
    animation: ${slide1} 0.2s ease-in-out;
    z-index: 4;
  }
  :nth-of-type(2) {
    animation: ${slide2} 0.4s ease-in-out;
    z-index: 3;
  }
  :nth-of-type(3) {
    animation: ${slide3} 0.6s ease-in-out;
    z-index: 2;
  }
  :nth-of-type(4) {
    animation: ${slide4} 0.8s ease-in-out;
    z-index: 1;
  }

  &:focus {
    outline: none;
  }
`;

const NotesSection = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
`;

export default App;
