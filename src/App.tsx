import React from 'react'
import SearchBar from './components/SearchBar';
import {Routes, Route} from "react-router-dom"
import HeroDetails from './components/HeroDetails';
import HeroList from './components/HeroList';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SearchBar/>} />
      <Route path="/:id" element={<HeroDetails/>} />
      <Route path="/heroeslist" element={<HeroList data={[]}/>} />
    </Routes>
    </>
  )
}

export default App
