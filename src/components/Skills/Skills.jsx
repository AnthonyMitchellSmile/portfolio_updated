import React from "react";

import SkillCategory from "./SkillCategory";

import {skills} from "../../data/skills";

import "./Skills.css";


const Skills = () => {


return (

<section

id="skills"

className="skills-section"

>


<h1>
Skills
</h1>




<div className="skills-wrapper">


{

skills.map((skill)=>(


<SkillCategory

key={skill.title}

skill={skill}

/>


))

}


</div>



</section>

);


};


export default Skills;