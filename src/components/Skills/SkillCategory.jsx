import React from "react";


const SkillCategory = ({skill}) => {


const Icon = skill.icon;



return (

<div className="skill-category">



<div className="skill-header">


<div className="category-icon">

<Icon/>

</div>



<h2>

{skill.title}

</h2>


</div>




<div className="divider"></div>




<div className="skill-items">


{

skill.items.map(item=>(


<div

className="skill-item"

key={item}

>


<span>

{item}

</span>



</div>


))


}



</div>




</div>


);


};


export default SkillCategory;