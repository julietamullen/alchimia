import React, {useEffect} from "react"
import Navbar from "../../components/Navbar"
import { motion } from "framer-motion";
import Head from "../../components/Head"
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
        }, [])

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
    ease: "linear"
    }
    
    const pageStyle = {
    position: "absolute",
    }
    return (
        <main>
        <Navbar/>
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} style={pageStyle}>
        <Head className="contactHead"/>
        <section className="contact" data-aos="fade-down">
            <div className="inspiration">
                <h2>About us</h2>
                <article>
                    <p>We are a group of people that are really passionate about experimenting and learning about the wonders of distillery.</p>
                    <p>Not only drinking, but the fascinating world behind every plant, fruit or flower used in cocktails over the centuries is the magic that pushes us forward and keeps up eager to try new things, and share them with our costumers.</p>
                    <p>If you have any comment, suggestion, question that you want to send us, or you found a weird botanical book that made you wonder "Who possibly would use nutmeg in a cocktail?", please contact us using this form! We will get back to you as soon as we can.</p>
                </article>
            </div>
            <form action="https://formspree.io/f/xzbybeyb" method="POST">
                <label htmlFor="name">Full name: </label>
                <input type="text" id="name" name="name" required/>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required/>
                <label htmlFor="comment">Comment: </label>
                <textarea name="comment" rows="5" id="comment" required/>
                <button type="submit">Send!</button>
            </form>
        </section>
        </motion.div>
    </main>
    )
}

export default About
