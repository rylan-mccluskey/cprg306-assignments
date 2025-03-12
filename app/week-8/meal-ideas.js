"use client";

import { useEffect } from "react";

export default function MealIdeas({ingrediant}) 
{
    const [meals, setMeals] = useState([]);\
    useEffect(() => {
        loadMealIdeas(ingrediant);
    }, [ingrediant]);

    function loadMealIdeas(ingrediant) {
        const onlineMeals = await fetchMealIdeas(ingrediant);
    }

    return <div>
        {meals[0].strMeal}
    </div>
}

async function fetchMealIdeas(ingrediant) {
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediant}`);
        const data = await response.json();
        console.log(data);
    }
}