import React from "react"
import "./Musculation.css";



function Muscilation (){

const  state ={ data:[ 
  {title:"La nutrition de prise de muscle",
image:"https://www.musculaction.com/images/intro-sociale.jpg",
description:"Comme vous le savez sans doute, la pratique de la musculation est régie par trois paramètres importants que sont l'entraînement, le repos et la nutrition. Chacun a son importance pour obtenir une bonne prise de muscles. Cependant, on remarque qu'une bonne partie des pratiquants s'intéressent plus facilement à la façon dont ils doivent mener leurs séances,<br> ou exécuter leurs exercices, plutôt qu'à leur nutrition. Ce qui est une grave erreur."},

{title:"Le petit déjeuner des champions !",
image:"https://www.musculaction.com/images/intro-pdm-1.jpg",
description:"Ce dont votre corps a besoin pour bien fonctionner sans faire des réserves de gras superflu c’est, bien évidemment, d’une quantité de calories qui lui correspond, mais aussi des nutriments adéquats. C’est-à-dire des protéines, des glucides dont l’IG est bas, des lipides insaturés et quelques saturés, mais aussi des vitamines et minéraux. Comment avoir tout cela dans un petit déjeuner ? C’est facile"},

{title:"Quoi manger avant l'entraînement ?",
image:"https://www.musculaction.com/images/intro-pre-training.jpg",
description:"Si ce que vous mangez après la séance est crucial pour une bonne récupération, il ne faut pas oublier que ce que vous ingurgitez avant votre effort est également capital pour pouvoir effectuer un entraînement intense. Or, stimuler suffisamment vos muscles est une condition sine qua non pour que votre organisme déclenche leur croissance, pour qu'ils s'adaptent aux efforts auxquels vous les soumettez."},

{title:"Quoi manger pendant l'entraînement ?",
image:"https://www.musculaction.com/images/intro-debutant-supplements.jpg",
description:"Manger n'est pas seulement important avant et après la séance de musculation ! Cela peut aussi avoir un grand impact pendant que vous vous entraînez ! Alors, bien sûr, pas question de dévorer un steak ou une plâtrée de pâtes entre deux séries de développé couché ou de pompes. Votre estomac s'en remettrait difficilement. Par contre, certains suppléments ont toute leur place durant l'effort et peuvent même améliorer vos performances et votre récupération."}
]}

    return(
        <div className="muscila">
          <h1 className="espMusc"> <b>Espace musculation</b></h1>

          <div className="cardMu">
       
       </div>

          <div className="card7">

         
             

             {state.data.map((el)=>{
                  return(
                   <div >
                     <h1 className="titreMus"> <b>{el.title}</b> </h1>
                     <img  className="logo" src={el.image} alt="logo"/>
                      <p className="parag">{el.description}</p>
                   </div>
                )})}
                
          </div>





        </div>
    )
}
export default Muscilation;