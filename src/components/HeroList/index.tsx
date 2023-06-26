import { useEffect, useState } from "react"
import { AllHeroes, TitleContent, HeroCard, Loading, BackButton } from "./styles"
import { useNavigate } from "react-router-dom"

function HeroList() {
    const [heroes, setHeroes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=295dc6d389bb325d6727ee9654004a4a&hash=93f389f43c44298fb01e9c0fbb6cb6a1`)
                const data = await response.json()
                setHeroes(data.data.results)
            } catch (error) {
                console.error("Heroes not found", error)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            {heroes.length === 0 ? (
                <Loading>Loading...</Loading>
            ) : (
                <>
                <BackButton to="/">Back to Search</BackButton>
                <AllHeroes>
                    {heroes.map((item: any) => (
                        <HeroCard key={item.id}>
                            <img src={item.thumbnail.path + "." + item.thumbnail.extension} onClick={() => navigate(`/${item.id}`)} alt={item.name} />
                            <TitleContent>
                                <h3>{item.name}</h3>
                            </TitleContent>
                        </HeroCard>
            )
                )}
                </AllHeroes>
                </>
                )}
        </>
    )
}

export default HeroList