import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeContextPro';
import RecipeCard from '../components/RecipeCard';


const Recipe = () => {
  const {data} = useContext(RecipeContext);
  const renderrecpie = data.map((recipe)=>  (<RecipeCard key={recipe.id} recipe={recipe} />))
  return (
    <div>{renderrecpie}</div>
  )
}

export default Recipe