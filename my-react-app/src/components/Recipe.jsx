import React from 'react'
import { Typography, Box} from '@mui/material'

export function Recipe({ recipe }) {
    if (!recipe) return null;
    
    return (
        <Box sx={{ p: 2, m: 2, maxWidth: 600, mx: 'auto' }}>
          <Typography variant="h4" gutterBottom>
            {recipe.name}
          </Typography>
    
          <Typography variant="subtitle1">Ingredients</Typography>
          <ul>
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
    
          <Typography variant="subtitle1">Instructions</Typography>
          <ol>
            {recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </Box>
      )
}