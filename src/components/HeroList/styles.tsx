import styled from "styled-components"
import { Link } from "react-router-dom"
export const AllHeroes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`
export const Loading = styled.p``

export const HeroCard = styled.div`
    background-color: #b41f23;
    color: white;
    position: relative;
    margin: 15px auto;
    padding: 5px;
    width: 300px;
    height: 350px;
    transition: 0.5s;
    border-radius: 35px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
    img {
        width: 100%;
        height: 80%;
        border-radius: 30px;
    }
`

export const TitleContent = styled.div`
    text-align: center;
h3 {
    color: white;
    text-align: center;
    font-size: 25px;
}
`
export const BackButton = styled(Link)`
    
`