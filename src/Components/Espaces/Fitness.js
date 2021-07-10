import React from "react"
import "./Fitness.css";

function Fitness (){
    const images =[{description: 'Challenge 250 squat: FESSES BOMBEES et jambes fines',url:'https://www.youtube.com/embed/Rp49VVsIO9s'},
  ,{description:'ABDOS - CUISSES - FESSIERS',url:'https://www.youtube.com/embed/3bxihqPKF08'}
  ,{description:'ALONE - Female Fitness Motivation 😔',url:'https://www.youtube.com/embed/0z2btZNEPBc'}
  ,{description:'NEVER STOP - female Fitness Motivation 🔥',url:'https://www.youtube.com/embed/TFO9hBtLVec'}
  ];
   
    return(
        <div className="fitness">
          <h1 className="titreFitness">Fitness</h1>
          <div className="card1">
              <h1 className="logo1">Stay strong</h1>
          </div>

  <div className="bgFitnes">
    <h1 className="titFet">Qu’est-ce que le fitness ?</h1>
    <p>
Sous le terme fitness sont regroupées une pluralité d’activités qu’elles soient individuelles, comme les exercices de cardio, de musculation, d’étirements, ou collectives, à l'instar de la zumba, du step, des abdos-fessiers, du body combat ou d'autres déclinaisons visant l’amélioration de la condition physique. Les activités de fitness permettent à la fois de perdre du poids, de travailler tout le corps, son endurance et son cardio, de se muscler, de s’assouplir et de s’entretenir. Il s’agit finalement de favoriser le bien-être des participantes et leur forme globale.</p>
</div>

{
  images.map(imge=> (
    <div> 
   <div> <iframe className="vd" title="hello" width="900" height="500" m src={imge.url}
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe> <p className="userd"><b>{imge.description}:</b> </p></div>
      </div> 
  ))
  }  </div>
    )
}
export default Fitness;





