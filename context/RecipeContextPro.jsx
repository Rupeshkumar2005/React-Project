/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react"

export const RecipeContext = createContext(null);

const RecipeContextPro = (props) => {


    const [data, setdata] = useState([])
  return (
    <RecipeContext.Provider value={{data, setdata}}>
        {props.children}
    </RecipeContext.Provider>
  )
}

export default RecipeContextPro;