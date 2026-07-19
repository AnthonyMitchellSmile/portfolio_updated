import {motion} from "framer-motion";


export default function CareerTimeline(){


return(


<svg

className="career-svg"

viewBox="0 0 1000 2400"


>


<motion.path


d="

M500 0

C150 300 850 600 500 900

C150 1200 850 1500 500 1800

C300 2000 700 2200 500 2400

"



initial={{

pathLength:0

}}


whileInView={{

pathLength:1

}}


transition={{

duration:3

}}


/>


</svg>


)


}