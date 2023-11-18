import { useState } from 'react';
import './recipeCard.css';
import PropTypes from 'prop-types';

const RecipeCard = ({ id, title, image, description, deleteRecipe, isLoading }) => {
  const [isDeletedLoading, setIsDeletedLoading] = useState(false);

  const handleDeleteClick = async () => {
    setIsDeletedLoading(true);
    await deleteRecipe(id);
    setIsDeletedLoading(false);
  };

  return (
    <div className='recipe-card'>
      <div className='card'>
        <img src={image} alt='' />
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={handleDeleteClick} disabled={isDeletedLoading}>
          {isDeletedLoading ? (
            <img src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" alt="Yükleniyor..." width={10} />
          ) : (
            "Delete"
          )}
        </button>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  isLoading: PropTypes.object.isRequired,
};

export default RecipeCard;
