import { useState } from 'react';
import PropTypes from 'prop-types'; 
import './recipeAdd.css';
import axios from 'axios';

const RecipeAdd = ({ addRecipeToList, isLoading }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const [titleErr, setTitleErr] = useState(false);
  const [descriptionErr, setDescriptionErr] = useState(false);
  const [imageErr, setImageErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleErr(false);
    setDescriptionErr(false);
    setImageErr(false);

    if (title.trim() && description.trim() && image.trim()) {
      axios.post("http://localhost:3001/fakeRecipes", { title, description, image })
        .then(response => addRecipeToList(response.data))
        .catch(error => console.error('Error adding recipe:', error));

      setTitle('');
      setDescription('');
      setImage('');
    } else {
      !title.trim() && setTitleErr(true)
      !description.trim() && setDescriptionErr(true)
      !image.trim() && setImageErr(true)
    }
  };

  const handleInputBlur = (field) => {
    if (field === 'title') setTitleErr(!title.trim());
    if (field === 'description') setDescriptionErr(!description.trim());
    if (field === 'image') setImageErr(!image.trim());
  };

  return (
    <div className='add-recipe'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Recipe Title'
          onChange={(event) => setTitle(event.target.value)}
          onBlur={() => handleInputBlur('title')}
          value={title}
         
        />
        {titleErr && <span className="error-message">Please enter a recipe title.</span>}
        <br />
        <input
          type='text'
          placeholder='Recipe Description'
          onChange={(event) => setDescription(event.target.value)}
          onBlur={() => handleInputBlur('description')}
          value={description}
          
        />
        {descriptionErr && <span className="error-message">Please enter a recipe description.</span>}
        <br />
        <input
          type='text'
          placeholder='Image URL'
          onChange={(event) => setImage(event.target.value)}
          onBlur={() => handleInputBlur('image')}
          value={image}
          
        />
        {imageErr && <span className="error-message">Please enter an image URL.</span>}

        <br />
        <button type='submit'>
  {isLoading.add ? (
    <img src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" alt="Loading..." width={20} />
  ) : (
    "Add Recipe"
  )}
</button>
      </form>
    </div>
  );
};

RecipeAdd.propTypes = {
  addRecipeToList: PropTypes.func.isRequired,
};

export default RecipeAdd;
