import styled from "styled-components"

export const CardDetails = styled.div`
    width: 800px;
    height: 500px;
    background-color: #b41f23;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    img {
        width: 400px;
        height: 400px;
        border-radius: 20px;
    }
    h2 {
        color: #fff;
        font-size: 40px;
        width: 80%;
    }
    p {
        color: #fff;
        font-size: 20px;
        text-align: center;
        width: 80%;
    }
    div {
        display: flex;
    }
`
export const HeroInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
`

export const ExtraInfo = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    p {
        color: #fff;
        font-size: 20px;
    }
`