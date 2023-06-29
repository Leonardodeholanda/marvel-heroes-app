import { useEffect, useState } from "react"
import { AllHeroes, TitleContent, HeroCard, Loading, BackButton, LoadingMore } from "./styles"
import { Link, useNavigate } from "react-router-dom"
import { Hero } from "../../interface"

function HeroList() {
    const [heroes, setHeroes] = useState<Hero[]>([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const limit = 20
    const [offset, setOffset] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=295dc6d389bb325d6727ee9654004a4a&hash=93f389f43c44298fb01e9c0fbb6cb6a1&limit=${limit}&offset=${offset}`)
                const data = await response.json()
                const filteredHeroes = data.data.results.filter(
                    (hero: Hero) =>
                        hero.id !== undefined &&
                        hero.name !== undefined &&
                        hero.thumbnail !== undefined &&
                        hero.thumbnail.path !== undefined &&
                        hero.thumbnail.extension !== undefined
                )
                setHeroes((prevHeroes) => [...prevHeroes, ...filteredHeroes])
                setLoading(false)
            } catch (error) {
                console.error("Heroes not found", error)
            }
        }
        fetchData()
    }, [offset])

    const handleLoadMore = () => {
        setOffset((prevOffset) => prevOffset + limit);
    }


    return (
        <>
            {loading ? (
                <Loading>
                    <img className="LoadingImage" src="../../assets/marvel-wallpaper.png" alt="marvel-logo" />
                </Loading>
            ) : (
                <>
                    <AllHeroes>
                        <BackButton to="/"><img src="../../assets/back-arrow.png" alt="back-button" /></BackButton>
                        {heroes.map((item: any) => (
                            <HeroCard key={item.id}>
                                <Link to={`/heroes/${item.id}`}><img src={item.thumbnail.path + "." + item.thumbnail.extension} onClick={() => navigate(`/heroes/${item.id}`)} alt={item.name} /></Link>
                                <TitleContent>
                                    <h3>{item.name}</h3>
                                </TitleContent>
                            </HeroCard>
                        )
                        )}
                        <LoadingMore onClick={handleLoadMore}><i className="fa fa-spinner fa-spin"></i><p>Load More</p></LoadingMore>
                    </AllHeroes>
                </>
            )}
        </>
    )
}

export default HeroList