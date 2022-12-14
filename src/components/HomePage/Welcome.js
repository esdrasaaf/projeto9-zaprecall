import { useState } from "react"
import styled from "styled-components"
import logo from "../../assets/img/logoboa.png"
import SelectDeck from "./SelectDeck"

export default function Welcome ({setDeckIndex, setMetaZap, deckSelected}) {
    const [display, setDisplay] = useState ('flex')

    function startRecall () {
        setDisplay('none')
    }

    return (
        <LoginPage stateDisplay={display}>
            <img src={logo} alt="Logo do ZapRecall"/>
            <span>ZapRecall</span>
            <SelectDeck setDeckIdx={setDeckIndex} setMetaZap={setMetaZap} deckSelected={deckSelected}/>
            <button data-identifier="start-btn" onClick={startRecall}>Iniciar Recall!</button>
        </LoginPage>
    )
}

const LoginPage = styled.div`
    background-color: #FB6B6B;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: ${props => props.stateDisplay};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;

    span {
        font-family: "Righteous", cursive;
        font-size: 36px;
        color: white;
        width: 257px;
        height: 59px;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 136px;
        height: 161px;
        margin-bottom: 25px;
    }

    button {
        width: 246px;
        height: 54px;
        padding: 16px 22px;
        border-radius: 5px;
        color: #D70900;
        border: 1px;
        font-size: 18px;
        font-family: 'Recursive', sans-serif;
        cursor: pointer;
        
        &:hover {
        background-color: #cea2a0
        }
    }
`