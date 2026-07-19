import { motion } from "framer-motion";
import "./Hero.css";


export default function Hero(){


return (

<section className="hero">


<div className="hero-bg"></div>



<motion.div

className="hero-content"

initial={{
opacity:0,
y:80
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

>


<motion.p

className="hero-tag"

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:.4
}}

>

FULL STACK AI ENGINEER

</motion.p>





<h1>

Building

<br/>

<span>

Future-Ready

</span>

<br/>

Digital Experiences

</h1>





<p className="hero-description">

I design and develop scalable web applications,

AI-powered platforms, and beautiful user interfaces

with modern technologies.

</p>





<div className="hero-buttons">


<motion.button

whileHover={{
scale:1.08
}}

whileTap={{
scale:.95
}}

>

View Projects

</motion.button>





<motion.button

className="secondary"

whileHover={{
scale:1.08
}}

whileTap={{
scale:.95
}}

>

Contact Me

</motion.button>


</div>


</motion.div>






<motion.div

className="hero-card"

initial={{
opacity:0,
scale:.7,
rotate:-10
}}

animate={{
opacity:1,
scale:1,
rotate:0
}}

transition={{
duration:1.2
}}

>


<div className="circle"></div>


<h2>

10+

</h2>


<p>

Years Experience

</p>


<div className="line"></div>


<span>

React • AI • Cloud • Architecture

</span>


</motion.div>






<div className="floating one"></div>

<div className="floating two"></div>

<div className="floating three"></div>



</section>

)

}