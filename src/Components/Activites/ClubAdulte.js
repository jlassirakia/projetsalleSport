
import "./Adulte.css";
import Navbar from "../../Components/Navbar"
function ClubAdulte (){
    
   
    return(
        <div>
            
          <h1 className="titreAdule">cours collectifs</h1>
         
          <div className="adulte"></div>

          
           <div className="cardadulte">
           <h1 className="Tadulte">Yoga</h1>
           <img className="imgadulte" src="/images/yogaa.jpg" alt="logo"/>
           </div>
            
              <div className="cardadulte">
              <h1 className="Tadulte">Bac sport</h1>
                  <img  className="imgadulte" src="/images/bac.jpg" alt="logo"/>
                 
              </div>
              <div className="cardadulte">
              <h1 className="Tadulte">Circuit minceur</h1>
              <img className="imgadulte" src="/images/minceur.jpg" alt="logo"/>
              
              </div>
              <div className="cardadulte">
              <h1 className="Tadulte">Zumba </h1>
              <img   className="imgadulte" src="/images/zumbaa.jpg" alt="logo"/>
              
              </div>
  
        </div>
          
       
    )
}
export default ClubAdulte;