import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { Header, SearchContent, Input, Button, CardContent, ListButton} from "./styles"
import HeroDetails from "../HeroDetails"
import HeroList from "../HeroList"

function SearchBar() {
    const [url, setUrl] = useState(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=295dc6d389bb325d6727ee9654004a4a&hash=93f389f43c44298fb01e9c0fbb6cb6a1`)
    const [item, setItem] = useState<never[]>([])
    const [search, setSearch] = useState("")
    const [showCardContent, setShowCardContent] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const fetch = async() => {
           try { const response = await axios.get(url)
            setItem(response.data.data.results)
        } catch (error) {
            console.log("Error fetching data from API:", error)
            setItem([])
        }
        }
        fetch()
    }, [url])

    const searchMarvel = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=295dc6d389bb325d6727ee9654004a4a&hash=93f389f43c44298fb01e9c0fbb6cb6a1`)
    }
    const handleLinkClick = () => {
        setShowCardContent(true)
        navigate("/heroeslist")
    }
    return (
        <>
            <Header>
                <SearchContent>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.svg.png" alt="" />
                    <form onSubmit={searchMarvel}>
                    <Input type="search" placeholder="Search Here" onChange={(e)=>setSearch(e.target.value)}/>
                    <Button type="submit">Search</Button>
                    </form>
                    <Link to="/heroeslist" onClick={handleLinkClick}>
                        <ListButton>
                        See Complet List
                        </ListButton>
                    </Link>
                </SearchContent>
                {showCardContent && (
                <CardContent>
                    {item.length === 0 ? <p>Not Found</p> : <HeroList data={item}/>}
                </CardContent>
                )}
            </Header>
            <HeroDetails />
        </>
    )
}
export default SearchBar