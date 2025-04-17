export function Recipe(props) {
    const { recipe } = props;
    if (!recipe) return null;
    
    return (
        <section className="recipe">

            <h1>{props.recipe.name}</h1>

            <h2>Ingredients</h2>
            <ul>
                {props.recipe.ingredients.map((text, i) => <li key={i}>{text}</li>)}
            </ul>

            <h2>Instructions</h2>
            <ol>
                {props.recipe.instructions.map((text, i) => <li key={i}>{text}</li>)}
            </ol>
            
        </section>
    );
}