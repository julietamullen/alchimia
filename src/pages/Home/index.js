import React, {useEffect} from "react"
import Navbar from "../../components/Navbar";
import Head from "../../components/Head"
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

function Home() {

  /* Div Animation Initializer */

  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])

  /* Page Animation Variants */
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
      <Head className="homeHead"/>
      <section className="homeBrief">
        <h2 data-aos="fade-right">
          A<br/>Passion<br/>For<br/>Botanicals
        </h2>
        <article data-aos="fade-left">
          <blockquote cite="https://www.amystewart.com/books/drunkenbotanist/">
            Around the world, it seems, there is not a tree or shrub or delicate wildflower that has not been harvested, brewed, and bottled. Every advance in botanical exploration or horticultural science brought with it a corresponding uptick in the quality of our spirituous liquors. Drunken botanists? Given the role they play in creating the world's great drinks, it's a wonder there are any sober botanists at all.
            </blockquote>
            <p>- Amy Stewart,  <cite>The Drunken Botanist</cite></p>
        </article>
      </section>
      </motion.div>
    </main>
  );
}

export default Home;
