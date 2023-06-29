import styled from "styled-components"

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
export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("https://free4kwallpapers.com/uploads/originals/2020/04/29/marvel-avengers-wallpaper.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const CardDetails = styled.div`
    width: 900px;
    height: 600px;
    background-color: rgba(81, 3, 3, 0.7);
    background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    img {
        width: 450px;
        height: 500px;
        border-radius: 20px;
        padding: 10px;
        background-color: rgba(81, 3, 3, 0.6);
    }
`
export const MainInfo = styled.div`
        display: flex;
`
export const HeroInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
    h2 {
        color: #fff;
        text-align: center;
        font-size: 40px;
        border-radius: 20px;
        background-color: rgba(81, 3, 3, 0.6);
        padding: 10px 20px;
    }
    p {
        color: #fff;
        font-size: 25px;
        text-align: center;
        width: 85%;
        background-color: rgba(81, 3, 3, 0.6);
        padding: 10px 20px;
        border-radius: 20px;
    }
`
export const Close = styled.button`
        background: transparent;
        align-self: baseline;
        font-size: 30px;
        color: #fff;
        border-radius: 50%;
        padding: 10px;
        cursor: pointer;
        &:hover {
            background-color: rgba(81, 3, 3, 0.6);
        }
        &:active {
           background-color: rgba(81, 3, 3, 0.8);
        }
`
export const ExtraInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
    p {
        color: #fff;
        font-size: 30px;
        background-color: rgba(81, 3, 3, 0.6);
        padding: 10px;
        border-radius: 20px;
    }
`