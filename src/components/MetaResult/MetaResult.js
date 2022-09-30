import styled from "styled-components"

export default function MetaResult ({resultImg, resultText, resultDisplay}) {

    function resetDeck() {
        window.location.reload();
    }

    return (    
        <ResultContent resultDisplay={resultDisplay}>
            <MessageDiv>
                <img src={resultImg} alt="Emoji"/>
                <span>{resultText}</span>
                <img src={resultImg} alt="Emoji"/>
            </MessageDiv>

            <ButtonDiv>
                <button onClick={resetDeck}>Escolha outro Deck</button>
            </ButtonDiv>
        </ResultContent>
    )
}

const ResultContent = styled.div `
    display: ${props => props.resultDisplay};
    flex-direction: column;
    margin: 20px;
`
const MessageDiv = styled.div `
    display: flex;
    align-items: center;
    font-family: 'Recursive', sans-serif;
    font-size: 20px;
    margin-bottom: 40px;

    img {
        height: 40px;
        width: 40px;
    }

    span {
        text-align: center;
        margin-left: 20px;
        margin-right: 20px;
    }
`
const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    
    button {
        width: 200px;
        height: 60px;
        padding: 10px 15px;
        border-radius: 5px;
        color: #D70900;
        border: 1px solid #D70900;
        font-size: 17px;
        font-family: 'Recursive', sans-serif;
        cursor: pointer;
        
        &:hover {
        background-color: #cea2a0
        }
    }
`