import React from "react";
import Card from "./Card";

import telus from "./images/Telus.png";
import ash from "./images/Ash.png";
import aspire from "./images/Aspire.png";
import duncan from "./images/Ducan.png";

import "./Projects.css";


const Projects = () => {



const cards=[


{
imageUrl:telus,

altText:"TELUS TV+",

title:"TELUS TV+",

description:
"Premium streaming platform with live TV, movies, and entertainment services built with scalable frontend and backend architecture.",


techitems:[
"React",
"Next.js",
"React Native",
"Angular",
"Spring Boot",
"Node.js"
],


explore:"https://www.telustvplus.com/"

},



{
imageUrl:ash,

altText:"Age Brilliantly",

title:"Age Brilliantly",

description:
"A community platform helping adults make better aging decisions through AI-powered experiences and digital solutions.",


techitems:[
"AI",
"RAG",
"Summarization",
"Spring Boot",
"API Design",
"Message Queue"
],


explore:"https://www.agebrilliantly.org/"

},



{
imageUrl:aspire,

altText:"Aspire Philanthropy",

title:"Aspire Philanthropy",

description:
"A fundraising technology platform helping nonprofit organizations increase their impact through strategic solutions.",


techitems:[
"Tailwind CSS",
"Redux",
"GraphQL",
"REST API",
"WebSocket"
],


explore:"https://www.aspirephilanthropy.com/"

},




{
imageUrl:duncan,

altText:"Duncan Solutions",

title:"Duncan Solutions",

description:
"Enterprise parking and tolling technology platform built with scalable SaaS architecture and distributed systems.",


techitems:[
"SaaS",
"Microservices",
"Cloud",
"Distributed Systems",
"API Integration"
],


explore:"https://www.duncansolutions.com/"

}


];



return (


<section

id="project"

className="projects-section"

>



<h1>
Projects
</h1>




<div className="projects-grid">


{

cards.map((card,index)=>(


<Card

key={index}

{...card}

/>


))


}



</div>




</section>


);


};



export default Projects;