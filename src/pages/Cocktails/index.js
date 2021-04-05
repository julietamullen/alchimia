import React from "react"
import Navbar from "../../components/Navbar"
import Head from "../../components/Head"
import CocktailsContainer from "../../components/CocktailsContainer"
import { motion } from "framer-motion"

const Cocktails = () => {
    const pageVariants = {
        initial: {
            opacity: 0,
            y: "-10vh"
        },
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: "-100vh"
        }
    }

    const pageTransition = {
        type: "tween",
        duration: 1,
        ease: "easeIn"
    }

    const pageStyle = {
        position: "absolute",
    }

    return (
        <main>
        <Navbar/>
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} style={pageStyle} className="cocktails">
        <Head className="cocktailsHead"/>
        <CocktailsContainer category="CLASSICS"/>
        <CocktailsContainer category="ORIGINALS"/>
        </motion.div>
        </main>
    )
}
export default Cocktails