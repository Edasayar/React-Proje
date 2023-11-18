
import {Route, Routes} from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from './components/navigationBar/NavigationBar.jsx';
import RecipeAdd from './components/RecipeAdd/RecipeAdd.jsx';
import Home from './components/home/Home.jsx';
import RecipeList from './components/recipeList/RecipeList.jsx';
import Body from './components/bodyy/Body.jsx';
import Login from './components/login/Login.jsx'

function App() {
  const [recipes, setRecipes] = useState([]);
  const[isLoading, setIsLoading] = useState({
    read:false,
    add:false,
    delete:false
  })

 
  useEffect(() => {
    const getRecipes = async () => {
    try {
      setIsLoading((prevIsLoading=> ({...prevIsLoading, read: true})))
      const response = await axios.get("http://localhost:3001/fakeRecipes")
      .then(response=> {
        setRecipes(response.data)
      })
      setIsLoading((prevIsLoading=> ({...prevIsLoading, read: false})))

    }catch (error) {
      console.error('There was an error fetching the recipes', error);

    }
  }
  getRecipes()
}, [])



  const addRecipeToList = async ({title, description, image}) => {
    setIsLoading(prevIsLoading => ({...prevIsLoading, add:true}))
    const newRecipe = {title,description,image}
    const response = await axios.post("http://localhost:3001/fakeRecipes", newRecipe);
    if(response.status===201){
      setRecipes((prevRecipes)=> [...prevRecipes, response.data])
    }
    setIsLoading(prevIsLoading => ({...prevIsLoading, add:false}))
  }

  const deleteRecipe = async (id) => {
    setIsLoading(prevIsLoading => ({...prevIsLoading, delete: true}));
    try {
      const response = await axios.delete(`http://localhost:3001/fakeRecipes/${id}`);
      if (response.status === 200) {
        setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
      }
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
    setIsLoading(prevIsLoading => ({...prevIsLoading, delete: false}));
  };
  
    return (
      <div className="App">
        <NavigationBar />
        <Home />
        <Routes>
  <Route path="/" element={<RecipeList recipes={recipes} deleteRecipe={deleteRecipe} isLoading={isLoading} />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/RecipeAdd" element={<RecipeAdd addRecipeToList={addRecipeToList} isLoading={isLoading} />} />
</Routes>

        
       
        <Body/>
      </div>
    );
      
  }
  export default App;

  




