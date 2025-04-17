import { Recipe } from './Recipe.jsx'
import { recipes } from '../data.js'
import React from 'react'

// higher-order function
export function RecipeContainer() {
    return recipes.map(recipe => <Recipe recipe={recipe} />)
}