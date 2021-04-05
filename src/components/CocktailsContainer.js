import React, {useEffect} from "react"
import Item from "./Item"
import whiskey from "../assets/whiskey.png"
import tall from "../assets/tall.png"
import copon from "../assets/copon.png"
import martini from "../assets/martini.png"
import Aos from "aos";
import "aos/dist/aos.css";

const CocktailsContainer = (props) => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    const {category} = props

    return (<div data-aos="fade-right" className="wrapper">
    <h2 className="category">{category}</h2>
    <div className="cocktailsContainer">
        {
        cocktails.map(cocktail => {
            if (cocktail.category.toUpperCase() === category) {
            return <Item cocktail={cocktail} key={cocktail.key}/>
        } else {return null}})
    }</div>
    </div>)
}

const cocktails = [
    {
        name: "Old Fashioned",
        ingredients: ["Bourbon", "Sugar", "Amargo La Angostura", "Orange peel"],
        price: "$300",
        key: 1,
        image: whiskey,
        glass: "Lowball glass",
        category: "classics"
    },
    {
        name: "Penicilin",
        ingredients: ["Scotch", "Malt whiskey", "Honey and ginger syrup", "Lemon juice"],
        price: "$300",
        key: 2,
        image: whiskey,
        glass: "Lowball glass",
        category: "classics"
    },
    {
        name: "Dark and Stormy",
        ingredients: ["Dark rum", "Ginger beer", "Amargo La Angostura", "Lime"],
        price: "$300",
        key: 3,
        image: tall,
        glass: "Highball glass",
        category: "classics"
    },
    {
        name: "Kakyoin",
        ingredients: ["Vermouth Rosso", "Campari", "Hibiscus infused gin", "Cherry syrup"],
        price: "$400",
        key: 4,
        image: whiskey,
        glass: "Lowball glass",
        category: "originals"
    },
    {
        name: "Negroni",
        ingredients: ["Gin", "Vermouth Rosso", "Campari", "Orange peel"],
        price: "400",
        key: 5,
        image: whiskey,
        glass: "Lowball glass",
        category: "classics"
    },
    {
        name: "Aperol Spritz",
        ingredients: ["Prosecco", "Aperol", "Sparkling water", "Orange slice"],
        price: "$300",
        key: 6,
        image: copon,
        glass: "Balloon glass",
        category: "classics"
    },
    {
        name: "Dio",
        ingredients: ["Drambuie", "Lime cordial", "Orange bitter", "Egg white"],
        price: "$300",
        key: 7,
        image: martini,
        glass: "Cocktail glass",
        category: "originals"
    },
    {
        name: "Basilicum",
        ingredients: ["Gin", "Basil syrup", "Amargo La Angostura", "Sparkling water", "Lime"],
        price: "$300",
        key: 8,
        image: tall,
        glass: "Highball glass",
        category: "originals"
    },
    {
        name: "Smoke Signal",
        ingredients: ["Cinnamon infused Scotch", "Cold brew", "Sugar syrup", "Smoke"],
        price: "$400",
        key: 9,
        image: whiskey,
        glass: "Lowball glass",
        category: "originals"
    },
    {
        name: "Eren",
        ingredients: ["Jägermeister", "Mint", "Tonic water", "Lime cordial"],
        price: "$300",
        key: 10,
        image: tall,
        glass: "Highball glass",
        category: "originals"
    },
    {
        name: "Hanami",
        ingredients: ["Lavender infused gin", "Prosecco", "Lemon juice", "Sugar syrup"],
        price: "$400",
        key: 11,
        image: copon,
        glass: "Balloon glass",
        category: "originals"
    },
    {
        name: "Godhand",
        ingredients: ["Elderflower liquor", "Elderflower cordial", "Tonic water", "Lemon juice", "Thyme"],
        price: "$400",
        key: 12,
        image: tall,
        glass: "Highball glass",
        category: "originals"
    },
]

export default CocktailsContainer