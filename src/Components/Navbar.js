import React from "react"
import "./Navbar.css";
import {Link} from 'react-router-dom';



function Navbar(){
    return(

<div className="wrapper">
  
  
  <div className="nav">
<ul>
<li><Link to ="/">  <b>Acceuil </b> </Link></li>
<li><Link to ="/tarifs"> <b>Tarifs</b>   </Link></li>
<li> <b>nos Espaces</b>
<ul>
         <li><Link to ="/musculation"   > <b>Espace Musculation</b>  </Link></li>
         <li><Link to ="/fitness" > <b>Espace Fitness </b></Link></li>
         <li><Link to ="/dance" > <b>Espace Dance </b></Link></li>
       </ul>
  </li>
<li><Link to ="/login"> <b>List Client</b> </Link></li>
<li> <b>Activités</b>
<ul>
      <li><Link to ="/enfant"> <b>Club Enfant </b>  </Link>  </li>
      <li><Link to ="/adulte"> <b>Club Adulte </b>  </Link></li>
      </ul>
     
  </li>
  
  
</ul>





  
</div>
      
       </div>














    )
}
export default Navbar