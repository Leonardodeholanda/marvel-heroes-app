import {Routes , Route} from "react-router-dom"
import SearchBar from './components/SearchBar';
import HeroDetails from './components/HeroDetails';
import HeroList from './components/HeroList';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SearchBar/>} />
      <Route path="/heroes/:id" element={<HeroDetails/>} />
      <Route path="/heroes" element={<HeroList/>} />
    </Routes>
    </>
  )
}

export default App
