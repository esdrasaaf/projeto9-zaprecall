import styled from "styled-components"
import { useState } from "react"
import vector from "../../assets/img/Vector.png"

export default function SelectDeck ({setDeckIdx, setMetaZap, deckSelected}) {
    const [displaySelect, setDisplaySelect] = useState ("initial")
    const [displayInput, setDisplayInput] = useState ("none")

    function showMetaZap () {
        setDisplaySelect("none")
        setDisplayInput("initial")
    }

    function verifyMetaZap (event) {
        let meta = event.target.value
        if (meta > deckSelected.length) {
            alert("A sua meta de zaps deve ser menor ou igual a quantidade de flashcards!")
            setMetaZap(deckSelected.length)
        } else if (meta < 1 && meta !== ' ' && meta !== ''){
            alert("A sua meta de zaps deve ser maior ou igual a 1!")
            setMetaZap(1)
        } else if (meta === " "){
            setMetaZap(1)
        } else {
            setMetaZap(meta)
        }

    }

    return (
        <SelectDiv img={vector} displaySelect={displaySelect} displayInput={displayInput}>
            <select data-identifier="deck-selector" onClick={showMetaZap} onChange={(event) => setDeckIdx(event.target.value)}>
                <OptionNone value={0}>Escolha o seu deck</OptionNone>
                <option data-identifier="deck-option" value={0}>React Deck</option>
                <option data-identifier="deck-option" value={1}>PercyJackson Deck</option>
                <option data-identifier="deck-option" value={2}>HarryPotter Deck</option>
                <option data-identifier="deck-option" value={3}>Pokémon Deck</option>
                <option data-identifier="deck-option" value={4}>GreekMythology Deck</option>
                <option data-identifier="deck-option" value={5}>LoL Deck</option>
            </select>

            <input type={"text"} placeholder={`Qual é a sua meta de Zaps? Máx: ${deckSelected.length}`} onChange={(event) => verifyMetaZap(event)}/>
        </SelectDiv>
    )
}

const SelectDiv = styled.div`
    select {
        display: ${props => props.displaySelect};
        background: #FFFFFF;
        margin-bottom: 18px;
        height: 50px;
        width: 246px;
        border: none;
        border-radius: 5px;
        padding: 10px;

        /* Font Style */
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #333333;

        /* Removes the default <select> styling */
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        /* Positions background arrow image */
        background-image: url(${props => props.img});
        background-repeat: no-repeat;
        background-position: 220px center;
    }

    input {
        display: ${props => props.displayInput};
        box-sizing: border-box;
        background: #FFFFFF;
        margin-bottom: 18px;
        height: 50px;
        width: 246px;
        border: none;
        border-radius: 5px;
        padding: 10px;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12.5px;
        color: #333333;
    }
` 
const OptionNone = styled.option `
    display: none;
`