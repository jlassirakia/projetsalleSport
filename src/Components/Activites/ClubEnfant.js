import React from "react"
import "./Enfants.css";
import Navbar from "../../Components/Navbar"

function ClubEnfant (){
    
   
    return(
        <div >
            
          <h1 className="titreEnfant">club Enfants</h1>
          <div className="cardenfant"></div>
        
          <div className="cardenf2">
          <h1  className="Tenfant">Gym pour enfants</h1>
          <img  className="imgenfant"  src="/images/gym.jpg" alt="logo"/>
           <p>La gymnastique est un sport, qui peut être physique, mais aussi artistique. L’objectif est d’offrir un apprentissage progressif des bases de la gymnastique qui respecte les aptitudes et les capacités motrices des enfants tout en s’amusant.  </p>
             </div> 
              <div className="cardenf2">
                  <h1 className="Tenfant">FOOT ACADEMY</h1>
                  <img className="imgenfant"  src="/images/foot.jpg" alt="logo"/>
                  <p>GALAXY FOOT ACADEMY est une section « initiation football» visant à encadrer et soutenir les enfants à partir de 04 ans et à leur permettre de pouvoir commencer à jouer au football sans obligatoirement être affilié à un club de football. Sa finalité n‘est pas uniquement sportive, mais aussi éducative et sociale. C’est un complément[…]</p>
              </div>
              <div className="cardenf2">
              <h1 className="Tenfant">Zumba Kids</h1>
              <img className="imgenfant"  src="/images/zumba.jpg" alt="logo"/>
              <p>Les enfants de 7 à 11 ans peuvent pratiquer une activité physique et se défouler au rythme de leur musique préférée. Les séances Zumba Kids comportent des mouvements adaptés aux enfants, basés sur la chorégraphie Zumba®originale. Nous simplifions les pas, ajoutons des jeux, des activités et des éléments d’exploration culturelle dans la structure du cours. </p>

              </div>
              <div className="cardenf2">
              <h1 className="Tenfant">Taekwondo </h1>
              <img  className="imgenfant" src="/images/takwondo.jpg" alt="logo"/>
              <p> Le taekwondo est un art martial qui peut se pratiquer très tôt. En Corée,pays d’où il est originaire, la plupart des enfants le pratique et il fait partie de leur éducation.</p>
              </div>
  
          
          </div>
         
    )
}
export default ClubEnfant;