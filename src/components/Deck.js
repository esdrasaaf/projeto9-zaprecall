import { useState } from "react"
import styled from "styled-components"
import playIcon from "../assets/img/play-outline-icon.svg"
import turnIcon from "../assets/img/setinha.png"
import checkIcon from "../assets/img/checkmark-circle-icon.svg"
import helpIcon from "../assets/img/help-circle-icon.svg"
import closeIcon from "../assets/img/close-circle-icon.svg"

export default function Deck ({object, index, finishedLetters, setFinishedLetters}) {
    const [cardImg, setCardImg] = useState ()
    const [classCard, setClassCard] = useState ("")
    const [clickedFlashcards, setClickedFlashcards] = useState ([])
    const [turnedQuestions, setTurnedQuestions] = useState([])
    const [finishedCards, setFinishedCards] = useState([])

    function showQuestion (index) {
        if (!clickedFlashcards.includes(index)) {
            setClickedFlashcards([...clickedFlashcards, index])
        }
    }

    function turnFlashcard (index) {
        if (!turnedQuestions.includes(index)) {
            setTurnedQuestions([...turnedQuestions, index])
        }        
        
        if (!finishedCards.includes(index)) {
            setFinishedCards([...finishedCards, index])
        }
    }

    function errorClick (index) {
        let filteredClicks = clickedFlashcards.filter(idxCard => idxCard !== index)
        setClickedFlashcards(filteredClicks)

        let filteredTurnClicks = turnedQuestions.filter(idxCard => idxCard !== index)
        setTurnedQuestions(filteredTurnClicks)

        setCardImg(closeIcon)
        setClassCard("errorResult")
        setFinishedLetters(finishedLetters + 1)
    }

    function almostClick (index) {
        let filteredClicks = clickedFlashcards.filter(idxCard => idxCard !== index)
        setClickedFlashcards(filteredClicks)

        let filteredTurnClicks = turnedQuestions.filter(idxCard => idxCard !== index)
        setTurnedQuestions(filteredTurnClicks)

        setCardImg(helpIcon)
        setClassCard("almostResult")
        setFinishedLetters(finishedLetters + 1)
    }

    function zapClick (index) {
        let filteredClicks = clickedFlashcards.filter(idxCard => idxCard !== index)
        setClickedFlashcards(filteredClicks)

        let filteredTurnClicks = turnedQuestions.filter(idxCard => idxCard !== index)
        setTurnedQuestions(filteredTurnClicks)

        setCardImg(checkIcon)
        setClassCard("zapResult")
        setFinishedLetters(finishedLetters + 1)
    }

    return (
        <DeckContent> 
            <li key={index}>
                <div className={clickedFlashcards.includes(index) ? "hide": "flashcard"}> 
                    <span className={classCard}>Pergunta {index + 1}</span>
                    <img className={classCard} src={finishedCards.includes(index) ? cardImg : playIcon} onClick={() => showQuestion(index)} alt="Icone do ZapRecall"/>
                </div>

                <div className={clickedFlashcards.includes(index) && !turnedQuestions.includes(index) ? 'question' : 'hide'}> 
                    <span>{object.Q}</span>
                    <img src={turnIcon} onClick={() => turnFlashcard(index)} alt="Icone do ZapRecall"/>
                </div>

                <div className={turnedQuestions.includes(index) ? 'answer' : 'hide'} > 
                    <span>{object.R}</span>
                    <AnswersContent>
                        <button className="error" onClick={() => errorClick(index)}>Não Lembrei</button>
                        <button className="almost" onClick={() => almostClick(index)}>Quase não lembrei</button>
                        <button className="zap" onClick={() => zapClick(index)}>Zap!</button>
                    </AnswersContent>
                </div>
            </li>
        </DeckContent>
    )
}

//Styled Components//
const DeckContent = styled.ul `
    .hide {
        display: none;
    }

    .flashcard {
        width: 300px;
        height: 65px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        border-radius: 5px;
        margin: 10px 0;
        padding: 10px 15px;    
        
        img {
            width: 23px;
            height: 23px;
            cursor: pointer;
        }

        span {
            font-family: 'Recursive', cursive;
            color: black;
            cursor: default;
        }

        .zapResult {
            text-decoration: line-through;
            filter: invert(59%) sepia(10%) saturate(3410%) hue-rotate(72deg) brightness(99%) contrast(88%);
        }

        .almostResult {
            text-decoration: line-through;
            filter: invert(72%) sepia(18%) saturate(5162%) hue-rotate(335deg) brightness(100%) contrast(106%);
        }

        .errorResult {
            text-decoration: line-through;
            filter: invert(31%) sepia(94%) saturate(3050%) hue-rotate(342deg) brightness(102%) contrast(108%);
        }
    }

    .question {
        width: 299px;
        height: 131px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: white;
        border-radius: 5px;
        margin: 10px 0;
        padding: 10px 15px;

        img {
            position: absolute;
            width: 23px;
            height: 23px;
            bottom: 10px;
            right: 15px;
            cursor: pointer;
        }

        span {
            padding: 10px 0px;
        }
    }

    .answer {
        width: 299px;
        height: auto;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: white;
        border-radius: 5px;
        margin: 10px 0;
        padding: 10px 15px;

        span {
            padding: 10px 0px;
        }
    }
`
const AnswersContent = styled.div `
    display: flex;   
    gap: 10px;

    button {
        width: 85px;
        height: 38px;
        margin-top: 10px;
        color: white;
        font-family: 'Recursive', cursive;
        font-size: 12px;
        font-weight: 700;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
        filter: brightness(0.8)
        }
    }

    .error {
        background-color: #FF3030;
    }

    .almost {
        background-color: #FF922E;
    }

    .zap {
        background-color: #2FBE34;
    }
`