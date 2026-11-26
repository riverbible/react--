import React, { useEffect, useState } from 'react'
import './DummyRecipes.css'
import axios from 'axios';

const DummyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchRecipes = async () => {
      setLoading(true)
      setError(null)

      try {
        const res = await axios.get('https://dummyjson.com/recipes')
        if (mounted) setRecipes(res.data.recipes)
        console.log(res.data.recipes)
      } catch (error) {
        if (mounted) setError('데이터를 불러오지 못했습니다.')
      } finally {
        if (mounted) setLoading(false)
      }
    }

    fetchRecipes()

    return () => {
      mounted = false
    }
  }, [])


  return (
    <div className='recipes-wrap'>
      <h2>recipes</h2>
      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe.id}>
              <span>{recipe.id}</span>
              <div className="img-wrap">
                <img src={recipe.image} alt={recipe.name} />
              </div>
              <h2>{recipe.name}</h2>
              <ol>
                {recipe.instructions.map((inst)=>(
                  <li>{inst}</li>
                ))}
              </ol>
              {recipe.tags.map((tag) => (
                <span>{tag}</span>
              ))}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DummyRecipes
