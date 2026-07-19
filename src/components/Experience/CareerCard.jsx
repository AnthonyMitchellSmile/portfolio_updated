import {motion} from "framer-motion";

import CareerButton from "./CareerButton";



export default function CareerCard({

data,

index

}){


const side =

index%2===0

?

"left"

:

"right";




return(


<motion.article


className={`career-item ${side}`}



initial={{

opacity:0,

y:120,

x:0

}}



whileInView={{

opacity:1,

y:0,

x:0

}}


viewport={{

amount:.3

}}



transition={{

duration:.9

}}



>



<div className="career-date">


{data.id}


</div>





<div className="career-card">


<h2>

{data.company}

</h2>



<p>

{data.description}

</p>




<CareerButton

image={data.image}

url={data.url}


/>



</div>



</motion.article>


)


}