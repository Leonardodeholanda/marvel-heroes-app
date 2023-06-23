import styled from "styled-components"

export const AllHeroes = styled.div`
    background-color: #b41f23;
    color: white;
    position: relative;
    margin-top: 1rem;
    padding: 5px;
    width: 250px;
    height: 350px;
    transition: 0.5s;
    border-radius: 35px;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
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