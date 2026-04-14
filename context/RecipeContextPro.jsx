/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react"

export const RecipeContext = createContext(null);

const RecipeContextPro = (props) => {


    const [data, setdata] = useState([
      

    {
      id : 1,
      title : "Classic Margherita Pizza",
      ingrediants: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      instruction: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
      ],
      
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    
      category: "Dinner",
      description :["Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."]
    },
    ])
  return (
    <RecipeContext.Provider value={{data, setdata}}>
        {props.children}
    </RecipeContext.Provider>
  )
}

export default RecipeContextPro;