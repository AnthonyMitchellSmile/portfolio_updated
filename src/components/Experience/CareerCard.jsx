import CareerButton from "./CareerButton";


export default function CareerCard({

data

}){


return (

<div className="career-card">



<div className="career-content">



<h2>

{data.company}

</h2>




<p>

{data.description}

</p>



</div>





<CareerButton

image={data.image}

url={data.url}

/>




<div className="career-number">

{String(data.id).padStart(2,"0")}

</div>



</div>


)


}