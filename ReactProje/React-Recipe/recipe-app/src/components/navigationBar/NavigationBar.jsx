import { Link } from 'react-router-dom';


import './navigationBar.css';

const NavigationBar = () => {
  return (
    <>
      <nav className="navbar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: 'rgba(0, 0, 0, 1)' }}
        >
          <path d="M12 10h-2V3H8v7H6V3H4v8c0 1.654 1.346 3 3 3h1v7h2v-7h1c1.654 0 3-1.346 3-3V3h-2v7zm7-7h-1c-1.159 0-2 1.262-2 3v8h2v7h2V4a1 1 0 0 0-1-1z"></path>
        </svg>
        <h1 className="recipe">Recipe Platform</h1>
        <Link to="/">Home</Link>
        <Link to="/RecipeAdd">Add Recipe</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/Login"> Login </Link>
        
      </nav>
    </>
  );
};

export default NavigationBar;

