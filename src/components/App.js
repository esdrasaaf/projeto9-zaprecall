import styled from "styled-components";
import { useState } from "react";
import LoginPage from "./Welcome"
import Header from "./Header";
import Deck from "./Deck";
import Footer from "./Footer";
import arrayDecks from "./decks"
import GlobalStyle from "./globalStyles";

export default function App () {
    const [finishedLetters, setFinishedLetters] = useState(0)
    const [deckIndex, setDeckIndex] = useState(0)
    let deckSelected = arrayDecks[deckIndex]    
    const [finishedIcons, setFinishedIcons] = useState(Array(deckSelected.length).fill(""))

    return (
        <>
            <GlobalStyle/>
            <Content>
                <LoginPage setDeckIndex={setDeckIndex}/>

                <Header/>

                <MidContent>
                    {deckSelected.map((object, index) => 
                        <Deck 
                            object={object} 
                            index={index}
                            key={index}
                            finishedLetters={finishedLetters}
                            setFinishedLetters={setFinishedLetters}
                            finishedIcons={finishedIcons}
                            setFinishedIcons={setFinishedIcons}/>
                    )}
                </MidContent>

                <Footer number={finishedLetters} icons={finishedIcons} deckSelected={deckSelected}/>
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
const MidContent = styled.ul`
    width: 375px;
    //Colocar isso no media query pra celular (talvez) max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    } 
`