import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
    const {image,title,description,}=props.recipe;
  return (
    <Link className='block w-[23vw] rounded overflow-hidden shadow'>
    <img className='object-cover w-full h-[30vh]' src={image} alt="" />
    <h1 className='px-2 mt-2 text-2xl font-black'>{title}</h1>
    <p>{description.slice(0,100)}...{" "} <small className='text-blue-400'>more</small>

    </p>

    </Link>
  )
}

export default RecipeCard