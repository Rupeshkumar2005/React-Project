import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Recipe from '../Pages/Recipe'
import About from '../Pages/About'
import CreateRecipe from '../Pages/CreateRecipe'

const MainRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/recipe' element={<Recipe />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/create-recipe' element={<CreateRecipe/>}/>
   </Routes>
  )
}

export default MainRoutes