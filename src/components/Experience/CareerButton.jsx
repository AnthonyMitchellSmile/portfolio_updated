import {
useState
} from "react";


export default function CareerButton({

image,

url

}){


const [show,setShow]=useState(false);



function openCompany(){


window.open(

url,

"_blank"

);


}



return (


<div


className="career-button"


onClick={openCompany}


onMouseEnter={()=>setShow(true)}


onMouseLeave={()=>setShow(false)}


>



<img

src={image}

alt="company"

/>





<div className="image-glow"></div>





{

show &&

<div className="preview">


<img

src={image}

alt="preview"

/>


</div>



}



</div>


)

}