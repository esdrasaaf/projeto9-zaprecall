import styled from "styled-components";

export default function Footer({number, deckSelected, icons, showMetaResult}) {
  if (number === deckSelected.length) {
    showMetaResult()
  }

  return (
    <ScoreContent>
      <span data-identifier="flashcard-counter">
        {number}/{deckSelected.length} CONCLUÍDOS
      </span>

      <ScoreIcons>
        {icons.map((icon, index) => (
          <li key={index}>
            {icon === "" ? "" : <img src={icon} alt="Ícone do Flashcard" />}
          </li>
        ))}
      </ScoreIcons>
    </ScoreContent>
  );
}

//Styled Components//
const ScoreContent = styled.div`
  flex-shrink: 0;
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 110px;
  font-family: "Recursive", sans-serif;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
`
const ScoreIcons = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
`