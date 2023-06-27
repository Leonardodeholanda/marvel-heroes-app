import styled from "styled-components"
import { Link } from "react-router-dom"
export const AllHeroes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    background-color: #510303;
    background: url("https://free4kwallpapers.com/uploads/originals/2020/04/29/marvel-avengers-wallpaper.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const Loading = styled.div`  
    width: 100%;
    height: 100Vh;
    background-color: #510303;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 90%;
        height: auto;
        overflow: hidden;
    }
    img.LoadingImage {
    animation: loadingAnimation 2s ease-in-out infinite;
  }

  @keyframes loadingAnimation {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(1.4);
    }
    75% {
      transform: scale(1.6);
    }
    100% {
      transform: scale(1.8);
    }
  }
`

export const HeroCard = styled.div`
    background-color: rgba(180, 31, 35, 0.5);
    color: white;
    position: relative;
    margin: 15px auto 0;
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
    margin: auto;
    color: #fff;
    text-align: center;
    &:hover {
        opacity: 0.7;
    }
    &:active {
        opacity: 0.9;
    }
    img {
        height: 150px;
    }
`