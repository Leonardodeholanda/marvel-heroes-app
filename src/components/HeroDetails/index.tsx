import { useParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { CardDetails, HeroInfo, ExtraInfo } from "./styles"

interface Hero {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
  comics: {
    available: number;
  };
  series: {
    available: number;
  };
  events: {
    available: number;
  };
}

function HeroDetails() {
  const {id} = useParams()
  const [item, setItem] = useState<Hero[]>([])
  const fetch = async() => {
    const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=295dc6d389bb325d6727ee9654004a4a&hash=93f389f43c44298fb01e9c0fbb6cb6a1`)
    setItem(response.data.data.results[0])
  }
  fetch()
  if (!item) {
    return <div>Loading...</div>
  }
  if (!Array.isArray(item)) {
    return <div>Invalid Data</div>
  }
  return (
    <>
      {item.map((hero) =>
      (
        <CardDetails key={hero.id}>
          <div>
            <img src={hero.thumbnail.path + "." + hero.thumbnail.extension} alt={hero.name} />
          <HeroInfo>
            <h2>{hero.name}</h2>
            <p>{hero.description}</p>
            </HeroInfo>
            </div>
            <ExtraInfo>
            <p>Comics: {hero.comics.available}</p>
            <p>Series: {hero.series.available}</p>
            <p>Events: {hero.events.available}</p>
          </ExtraInfo>
        </CardDetails>
      )
      )}
    </>
  )
}


export default HeroDetails
