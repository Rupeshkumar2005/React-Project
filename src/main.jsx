
import { createRoot } from 'react-dom/client'

import "./index.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import RecipeContextPro from '../context/RecipeContextPro';
import { ToastContainer } from 'react-toastify';




createRoot(document.getElementById('root')).render(
    <RecipeContextPro>

<BrowserRouter>
<App />
<ToastContainer/>

</BrowserRouter>
</RecipeContextPro>
)

 
