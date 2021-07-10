import React from "react"
import "./Dance.css";

function Fitness (){
    const danse =[{titre: 'Dance Classique',url:'https://www.youtube.com/embed/iq3sC5BxsrE'},
    {titre: 'Dance Orientale',url:'https://www.youtube.com/embed/dADv_xZMDKc'},
    {titre: 'Dance Africaine',url:'https://www.youtube.com/embed/zDO75dYHaO0'},
    {titre: 'Zumba',url:'https://www.youtube.com/embed/1N-n1KEivbo'},
    ];

return(

    <div className="dance">

    <h1 className="titreDance">Danse</h1>
    <div className="card14">
       
    </div>
    <h1 className="logoDanse"> <b>Danse mieux ventre plein que robe neuve</b></h1>
    <div className="liste">
        <h1 className="typedanse"> les types de dances</h1>
        {
    danse.map(dans=> (
    <div> 
   <div> <iframe className="vd" title="hello" width="900" height="500" m src={dans.url}
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe> 
<p className="userd"><b>{dans.titre}</b> </p></div>
      </div> 
  ))
  }

    </div>

    </div>
)

}
export default Fitness;

