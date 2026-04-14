import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeContextPro';


const Recipe = () => {
  const {data} = useContext(RecipeContext);
  const renderrecpie = data.map(recipe =>  <div key={recipe.id}>
    <h1>{recipe.title}</h1>
  </div>)
  return (
    <div>{renderrecpie}</div>
  )
}

export default Recipe