import { Recipe } from './Recipe.jsx'
import { recipes } from '../data.js'

// higher-order function
export function RecipeContainer() {
    return (
        <div className="recipeContainer">
            {recipes.map(recipe => <Recipe recipe={recipe} />)}
        </div>
    )
}