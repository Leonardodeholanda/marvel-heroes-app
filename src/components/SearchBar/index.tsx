import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Header, SearchContent, Input, Button, CardContent, Link} from "./styles"

function SearchBar() {
    const [url, setUrl] = useState(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=295dc6d389bb325d6727ee9654004a4a&hash=93f389f43c44298fb01e9c0fbb6cb6a1`)
    const [item, setItem] = useState<never[]>([])
    const [search, setSearch] = useState("")
    const [showCardContent, setShowCardContent] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async() => {
           try { const response = await axios.get(url)
            setItem(response.data.data.results)
        } catch (error) {
            console.log("Error fetching data from API:", error)
            setItem([])
        }
        }
        fetchData()
    }, [url])

    const searchMarvel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=295dc6d389bb325d6727ee9654004a4a&hash=93f389f43c44298fb01e9c0fbb6cb6a1`)
    }
    const handleLinkClick = () => {
        setShowCardContent(true)
        navigate(`/heroeslist?search=${search}`)
    }
    return (
        <>
            <Header>
                <SearchContent>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.svg.png" alt="" />
                    <form>
                    <Input type="search" placeholder="Search Here" onChange={(e)=>setSearch(e.target.value)}/>
                    <Button type="submit" onClick={searchMarvel}>Search</Button>
                    </form>
                    <Link to={`/heroes`} onClick={handleLinkClick}>
                        All Heroes
                    </Link>
                </SearchContent>
            </Header>
        </>
    )
}
export default SearchBar