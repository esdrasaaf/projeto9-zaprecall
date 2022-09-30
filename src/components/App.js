import styled from "styled-components";
import { useState } from "react";
import HomePage from "./HomePage/Welcome"
import Header from "./Header/Header";
import Flashcard from "./Deck/Flashcards";
import MetaResult from "./MetaResult/MetaResult";
import Footer from "./Footer/Footer";
import arrayDecks from "./Deck/decks"
import GlobalStyle from "./globalStyles";
import happy from "../assets/img/party.png"
import sad from "../assets/img/sad.png"


export default function App () {
    const [finishedLetters, setFinishedLetters] = useState(0)
    const [deckIndex, setDeckIndex] = useState(0)
    let deckSelected = arrayDecks[deckIndex]    
    const [finishedIcons, setFinishedIcons] = useState(Array(deckSelected.length).fill(""))
    const [counterZap, setCounterZap] = useState(0)
    const [metaZap, setMetaZap] = useState(0)
    const [deckDisplay, setDeckDisplay] = useState ("flex")
    const [resultDisplay, setResultDisplay] = useState("none")
    const [resultImg, setResultImg] = useState()
    const [resultText, setResultText] = useState('')

    function showMetaResult () {
        if (finishedLetters === deckSelected.length){
            setDeckDisplay("none")
            if (counterZap >= metaZap) {
                setResultDisplay("flex")
                setResultImg(happy)
                setResultText("Parabéns, você atingiu sua meta de Zaps!")
            } else if (counterZap < metaZap) {
                setResultDisplay("flex")
                setResultImg(sad)
                setResultText("Que pena!, você não atingiu sua meta de Zaps!")
            }
        }
    }

    return (
        <>
            <GlobalStyle/>
            <Content>
                <HomePage setDeckIndex={setDeckIndex} setMetaZap={setMetaZap} deckSelected={deckSelected}/>

                <Header/>

                <DeckContent deckDisplay={deckDisplay}>
                    {deckSelected.map((object, index) => 
                        <Flashcard 
                            object={object} 
                            index={index}
                            key={index}
                            finishedLetters={finishedLetters}
                            setFinishedLetters={setFinishedLetters}
                            finishedIcons={finishedIcons}
                            setFinishedIcons={setFinishedIcons}
                            counterZap={counterZap}
                            setCounterZap={setCounterZap}/>        
                    )}
                </DeckContent>

                <MetaResult resultImg={resultImg} resultText={resultText} resultDisplay={resultDisplay}/>

                <Footer showMetaResult={showMetaResult} number={finishedLetters} icons={finishedIcons} deckSelected={deckSelected}/>
            </Content>
        </>
    )
}

//Styled Components//

const Content = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const DeckContent = styled.ul`
    width: 375px;
    display: ${props => props.deckDisplay};
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    } 
`