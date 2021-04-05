import React from "react"

const Item = ({cocktail}) => {
    const ingredients = cocktail.ingredients
    const price = cocktail.price
    return (<>
    <div className="cocktail">
        <div className="cocktailTitle">
        <h3>{cocktail.name}</h3>
        <p>{price} ARS</p>
        </div>
        <section className="description">
        <ul className="ingredients">
        {
        ingredients.map(ingredient => {
            return <li key={Math.floor(Math.random() * 100000)}>{ingredient}</li>
        })
    }</ul>
        <img src={cocktail.image} alt={cocktail.glass}/>
        </section>
    </div>
    </>)
}

export default Item