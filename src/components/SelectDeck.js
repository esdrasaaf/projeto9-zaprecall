import styled from "styled-components"
import vector from "../assets/img/Vector.png"

export default function SelectDeck ({setDeckIdx}) {

    return (
        <SelectDiv img={vector}>
            <select onChange={(event) => setDeckIdx(event.target.value)}>
                <OptionNone value={0}>Escolha o seu deck</OptionNone>
                <option value={0}>React Deck</option>
                <option value={1}>PercyJackson Deck</option>
                <option value={2}>HarryPotter Deck</option>
                <option value={3}>Pokémon Deck</option>
                <option value={4}>GreekMythology Deck</option>
                <option value={5}>LoL Deck</option>
            </select> 
        </SelectDiv>
    )
}

const SelectDiv = styled.div`
    select {
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
` 
const OptionNone = styled.option `
    display: none;
`