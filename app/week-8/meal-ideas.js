"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function MealIdeas({ingredient}) 
{
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        if (ingredient) {
            loadMealIdeas(ingredient);
        }
    }, [ingredient]);

    async function loadMealIdeas(ingredient) {
        const onlineMeals = await fetchMealIdeas(ingredient);
        setMeals(onlineMeals);
    }

    return (
    <div>
        {meals.length === 0 ?(<p>No meal ideas found for {ingredient}</p>) : 
        (meals.map((meal) => (
            <div key={meal.idMeal}>
                <h3>{meal.strMeal}</h3>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
        )))
        
    }
    </div>
    );
}

async function fetchMealIdeas(ingredient) {
    {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
        const data = await response.json();
        return data.meals || [];
    }
}