import styled from "styled-components"
import deckSelected from "./decks"

export default function Footer (props) {
    return (
        <ScoreContent>
            <span>{props.number}/{deckSelected.length} CONCLUÍDOS</span>
        </ScoreContent>
    )
}

//Styled Components//
const ScoreContent = styled.div `
    display: flex;   
    width: 100%;
    height: 70px;
    font-family: 'Recursive', sans-serif;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #ffffff;
`
