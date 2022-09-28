import styled from "styled-components";
import { useState } from "react";
import LoginPage from "./Welcome"
import Header from "./Header";
import Deck from "./Deck";
import Footer from "./Footer";
import deckSelected from "./decks"
import GlobalStyle from "./globalStyles";

export default function App () {
    const [finishedLetters, setFinishedLetters] = useState(0)

    return (
        <>
            <GlobalStyle/>
            <Content>
                <LoginPage/>

                <Header/>

                <MidContent>
                    {deckSelected.map((object, index) => 
                        <Deck 
                            object={object} 
                            index={index}
                            key={index}
                            finishedLetters={finishedLetters}
                            setFinishedLetters={setFinishedLetters}/>
                    )}
                </MidContent>

                <Footer number={finishedLetters}/>
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
    justify-content: center;
    align-items: center;
`
const MidContent = styled.ul`
    width: 375px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    } 
`
