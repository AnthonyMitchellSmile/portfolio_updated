export default function CareerButton({

image,

url

}){


return(

<button

className="career-button"

onClick={()=>window.open(url,"_blank")}

>


<img

// className="career-logo"

src={image}

alt="company"

loading="lazy"

/>


</button>


)

}