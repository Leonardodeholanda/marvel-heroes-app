import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom" 

export const Header = styled.div`
    background-color: #0b0a08;
    background: url("https://cdn.nguyenkimmall.com/images/detailed/697/top-15-phim-bom-tan-xuat-sac-nhat-vu-tru-marvel-thumbnail.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SearchContent = styled.div`
    width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    img {
        width: 300px;
    }
    p {
        color: #000;
        font-size: 20px;
        text-align: center;
        font-weight: bold;
    }
`
export const Input = styled.input`
    outline: none;
    background: none;
    border: none;
    width: 300px;
    height: 35px;
    border-radius: 15px;
    color: #000;
    font-size: 20px;
    padding: 10px;
    border: 2px solid #d4171d;

`

export const Button = styled.button`
    background-color: #d4171d;
    width: 300px;
    height: 35px;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    color: #fff;
    border: none;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }
`
export const CardContent = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 1rem;
    align-items: center;
    margin-top: 20px;
    background-color: #0b0a08;
`
export const Link = styled(RouterLink)`
    background-color: #fff;
    width: 300px;
    height: 35px;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    padding-top: 5px;
    color: #d4171d;
    border: none;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }
`