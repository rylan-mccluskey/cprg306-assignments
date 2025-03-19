"use client";

import { useEffect } from "react";

export default function MealIdeas({ingredient}) 
{
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        loadMealIdeas(ingredient);
    }, [ingredient]);

    async function loadMealIdeas(ingredient) {
        const onlineMeals = await fetchMealIdeas(ingredient);
        setMeals(onlineMeals);
    }

    return <div>
        {meals[0].strMeal}
    </div>
}

async function fetchMealIdeas(ingredient) {
    {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    }
}