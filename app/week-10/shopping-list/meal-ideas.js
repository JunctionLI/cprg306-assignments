"use client";

import React, { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div >
      <h2>Meal Ideas for {ingredient}</h2>
      {meals && meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal} className="text-sm p-2 m-2 bg-yellow-500 text-black max-w-sm hover:bg-yellow-400 cursor-pointer">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width="50"
                height="50"
              />
              {meal.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p>No meal ideas found for "{ingredient}".</p>
      )}
    </div>
  );
};

export default MealIdeas;