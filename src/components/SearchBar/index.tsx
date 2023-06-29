import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Header, SearchContent, Input, Button, Link } from "./styles"

function SearchBar() {
    const [url] = useState(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=295dc6d389bb325d6727ee9654004a4a&hash=93f389f43c44298fb01e9c0fbb6cb6a1`)
    const [, setItem] = useState([])
    const [search, setSearch] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    const searchMarvel = async (e: any) => {
        e.preventDefault()
        try {
            const response = await axios.get(`${url}&name=${search}`)
            setItem(response.data.data.results)
            if (response.data.data.results.length > 0) {
                navigate(`/heroes/${response.data.data.results[0].id}`)
            } else {
                setErrorMessage(`There's no ${search}, try again`)
            }
        } catch (error) {
            console.log("Error fetching data from API:", error)
            setItem([])
        }
    }

    return (
            <Header>
                <SearchContent>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.svg.png" alt="marvel-logo" />
                    <form>
                        <Input type="search" placeholder="Search Here"
                            value={search} onChange={(e) => setSearch(e.target.value)} />
                            {errorMessage && <p>{errorMessage}</p>}
                        <Button type="submit" onClick={searchMarvel}>Search</Button>
                         
                    </form>
                    <Link to={`/heroes`}>
                        All Heroes
                    </Link>
                </SearchContent>
            </Header>
    )
}
export default SearchBar