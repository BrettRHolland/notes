import { useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const colors = ["#f2f2f2", "#ebf1f5", "#f7f5eb", "#f0e4e4"];

function Note({ setNotes, notes, note: { id, text, color } }) {
  const [noteText, setNoteText] = useState(text);
  const [isTextareaVisible, setIsTextareaVisible] = useState(false);
  const [isColorPaletteVisible, setIsColorPaletteVisible] = useState(false);

  const handleSave = () => {
    const editedNoteIndex = notes.findIndex((note) => note.id === id);
    let updatedNotes = [...notes];

    updatedNotes[editedNoteIndex] = {
      ...updatedNotes[editedNoteIndex],
      text: noteText,
    };

    setNotes(updatedNotes);
    setIsTextareaVisible(false);
  };

  const handleDelete = () => {
    const editedNoteIndex = notes.findIndex((note) => note.id === id);
    let updatedNotes = [...notes];

    updatedNotes.splice(editedNoteIndex, 1);

    setNotes(updatedNotes);
    setIsTextareaVisible(false);
  };

  const handleColorChange = (newColor) => {
    const editedNoteIndex = notes.findIndex((note) => note.id === id);
    let updatedNotes = [...notes];

    updatedNotes[editedNoteIndex] = {
      ...updatedNotes[editedNoteIndex],
      color: newColor,
    };

    setNotes(updatedNotes);
    setIsColorPaletteVisible(false);
  };

  return (
    <Container bgColor={color}>
      <NoteTextContainer>
        {isTextareaVisible ? (
          <Textarea
            bgColor={color}
            onChange={(e) => setNoteText(e.target.value)}
            value={noteText}
          ></Textarea>
        ) : (
          <NoteText>
            <ReactMarkdown>{text}</ReactMarkdown>
          </NoteText>
        )}
      </NoteTextContainer>
      <Toolbar>
        {isColorPaletteVisible ? (
          <ColorPalette>
            {colors.map((color) => (
              <Color
                key={color}
                bgColor={color}
                onClick={() => handleColorChange(color)}
              ></Color>
            ))}
          </ColorPalette>
        ) : null}
        {isTextareaVisible ? (
          <Button onClick={handleSave}>
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
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </Icon>
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIsTextareaVisible(true);
            }}
          >
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
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </Icon>
          </Button>
        )}
        <Button onClick={handleDelete}>
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </Icon>
        </Button>
        <Button onClick={() => setIsColorPaletteVisible(true)}>
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
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </Icon>
        </Button>
      </Toolbar>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#f2f2f2")};
  border-radius: 3px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
`;

const NoteTextContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;
const NoteText = styled.div``;
const Textarea = styled.textarea`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#f2f2f2")};
  border-radius: 3px;
  border: none;
  flex-grow: 1;
  font-family: inherit;
  font-size: 1rem;
`;

const Toolbar = styled.div`
  color: #000;
  display: flex;
  justify-content: space-evenly;
  padding-top: 15px;
  position: relative;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Icon = styled.svg`
  height: 30px;
  width: 30px;
`;

const ColorPalette = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 3px;
  display: flex;
  justify-content: space-evenly;
  left: 0;
  padding: 10px 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Color = styled.button`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 30px;
  width: 30px;
`;

export default Note;
