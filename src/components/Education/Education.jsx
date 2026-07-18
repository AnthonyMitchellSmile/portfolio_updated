import "./Education.css";


export default function Education(){


return (

<section

id="education"

className="education"

>


<h1>

Education

</h1>




<div className="education-container">



{/* University Card */}

<div className="university-card">



<div className="university-icon">

🎓

</div>



<h2>

The Hong Kong University of Science and Technology

</h2>



<p>

Hong Kong

</p>



</div>






{/* Degree Timeline */}

<div className="education-timeline">



<div className="timeline-line"></div>



<div className="degree-card">


<div className="degree-dot"></div>


<div className="degree-content">


<h3>

Master’s Degree in Artificial Intelligence

</h3>


<span>

11/2014 – 03/2016

</span>


</div>


</div>







<div className="degree-card">


<div className="degree-dot"></div>


<div className="degree-content">


<h3>

Bachelor of Science in Computer Science

</h3>


<span>

09/2010 – 11/2014

</span>


</div>


</div>





</div>



</div>



</section>


)

}