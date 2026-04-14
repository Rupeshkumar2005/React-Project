import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { RecipeContext } from '../context/RecipeContextPro';


const CreateRecipe = () => {
const {data,setdata} = useContext(RecipeContext)
  const {register, handleSubmit, reset}=useForm();
  const SubmitHandler=(recipe)=>{
    recipe.id=nanoid();
    console.log(recipe)
    const copydata = [...data]
    copydata.push(recipe)
    setdata(copydata);
    reset();

  }
  return (
    <div>
     <form onSubmit={handleSubmit(SubmitHandler)}>
            <input  className='block border-b outline-0 p-2'{...register("image")} type="url" placeholder='enter image url'  />
            <small className='text-red-400'>This is how the error shown</small>
            <input  className='block border-b outline-0 p-2'{...register("title")} type="text" placeholder='Recipe Tittle '/>
            
            <textarea className='block border-b outline-0 p-2' {...register("description")} placeholder='//start writting'></textarea>
           
            <textarea className='block border-b outline-0 p-2' {...register("ingrediants")} placeholder='//write ingrediants'></textarea>
        
            <textarea className='block border-b outline-0 p-2' {...register("instruction")} placeholder='//write intructions seprate by comma'></textarea>
            <select className='block border-b outline-0 p-2' {...register("category")}>
            <option value="Breakfast">Breakfast</option>
            <option value="Dinner">Dinner</option>
            <option value="Lunch">Lunch</option>
            </select>
            
            <button className='block mt-5 bg-gray-900 px-4 py-2 rounded'>Save Recipe</button>
     </form>
    </div>
  )
}

export default CreateRecipe