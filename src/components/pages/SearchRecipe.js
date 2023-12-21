import React, { useState } from 'react';

const recipesData = [
  { id: 1, name: 'Spaghetti Bolognese', ingredients: ['spaghetti', 'tomato sauce', 'ground beef'] },
  { id: 2, name: 'Chicken Alfredo', ingredients: ['chicken', 'fettuccine', 'alfredo sauce'] },
  { id: 3, name: 'Vegetarian Pizza', ingredients: ['dough', 'tomato sauce', 'cheese', 'vegetables'] },
  // Add more recipes as needed
];

const RecipeFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = recipesData.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h2>Recipe Finder</h2>
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map(recipe => (
              <li key={recipe.id}>
                <h3>{recipe.name}</h3>
                <p>Ingredients: {recipe.ingredients.join(', ')}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeFinder;
