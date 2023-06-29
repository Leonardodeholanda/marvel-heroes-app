import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { Container, CardDetails, MainInfo, HeroInfo, ExtraInfo, Close, Loading } from "./styles"
import { Hero } from "../../interface"

function HeroDetails() {
  const { id } = useParams()
  const [item, setItem] = useState<Hero | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=295dc6d389bb325d6727ee9654004a4a&hash=93f389f43c44298fb01e9c0fbb6cb6a1`)
        setItem(response.data.data.results[0])
      } catch (error) {
        console.error("Error fetching hero details", error)
      }
    }
    fetchData()
  }, [id])

  if (!item) {
    return <Loading>
    <img className="LoadingImage" src="../../assets/marvel-wallpaper.png" alt="marvel-logo"/>
    </Loading>
  }
  const { thumbnail, name, description, comics, series, events } = item

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <>
    <Container>
      <CardDetails key={id}>
        <MainInfo>
          <img src={thumbnail.path + "." + thumbnail.extension} alt={name} />
          <HeroInfo>
            <h2>{name}</h2>
            <p>{description}</p>
          </HeroInfo>
          <Close onClick={handleGoBack}><p>X</p></Close>
        </MainInfo>
        <ExtraInfo>
          <p>Comics: {comics.available}</p>
          <p>Series: {series.available}</p>
          <p>Events: {events.available}</p>
        </ExtraInfo>
      </CardDetails>
      </Container>
    </>
  )
}


export default HeroDetails
