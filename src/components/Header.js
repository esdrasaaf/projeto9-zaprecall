import styled from "styled-components"
import logo from "../assets/img/logo.png"

export default function Header () {
    return (
        <LogoContent>
            <img src={logo} alt="Logo do ZapRecall"/>
            <h1>ZapRecall</h1>
        </LogoContent>
    )
}

const LogoContent = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 153px;
    width: 375px;

    img {
        height: 60px;
        width: 52px;
    }

    h1 {
        width: 204px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-family: 'Righteous', cursive;
        font-size: 36px;
    }
`