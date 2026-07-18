import "./Experience.css";

import CareerCard from "./CareerCard";

import {experiences} from "./experienceData";


export default function Experience(){


return (

<section 
id="experience"
className="experience"
>


<h1>
Experience
</h1>



<div className="career-timeline">


<div className="horizontal-line"></div>



{
experiences.map(item=>(

<CareerCard

key={item.id}

data={item}

/>

))
}



</div>



</section>


)

}