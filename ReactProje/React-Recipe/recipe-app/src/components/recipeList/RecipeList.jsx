
import PropTypes from 'prop-types';
import RecipeCard from '../recipeCard/RecipeCard';
import './recipeList.css';

const RecipeList = ({ recipes, deleteRecipe, isLoading }) => {
  return (
    <div className='recipe-list'>
      {isLoading.read && <img src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" alt="Loading..." width={100} />}
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-list-item">
          <RecipeCard {...recipe} isLoading={isLoading} deleteRecipe={deleteRecipe} />
        </div>
      ))}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteRecipe: PropTypes.func.isRequired,
};

export default RecipeList;
