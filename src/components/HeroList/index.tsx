import React from "react"
import { AllHeroes, TitleContent } from "./styles"
import { useNavigate } from "react-router-dom"

interface Hero {
    id: number;
    name: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }
  
  interface HeroListProps {
    data: Array<Hero> | undefined;
  }

function HeroList({ data }: HeroListProps) {
    let navigate = useNavigate()
    
    if (!data) {
        return <p>Loading...</p>
    }
    return (
        <>
           {
            data.map(item => (
                            <AllHeroes key={item.id}>
                                <img src={item.thumbnail.path + "." + item.thumbnail.extension} onClick={() => navigate(`/${item.id}`)} alt={item.name} />
                                <TitleContent>
                                    <h3>{item.name}</h3>
                                </TitleContent>
                            </AllHeroes>
                        )
                    )}
        </>
    )
}



export default HeroList