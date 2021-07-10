import React from "react"; 
import {Card,Row,Col} from 'react-bootstrap'
import "./Tarifs.css";




function Tarifs (){
    const  data ={ tarif:[ 
        {title:"Abonnement 3 Mois",
      image:"https://patrickboyer.com/wp-content/uploads/2019/05/tarif.png",
      description:"250Dt",
    espaces:" Musculation ,  Fitness, Dance",
prixMois:"80Dt"},

{title:"Abonnement 6 Mois",
image:"https://patrickboyer.com/wp-content/uploads/2019/05/tarif.png",
description:"450Dt",
espaces:" Musculation ,  Fitness, Dance",
prixMois:"75Dt"},

{title:"Abonnement 12 Mois",
image:"https://patrickboyer.com/wp-content/uploads/2019/05/tarif.png",
description:"600Dt",
espaces:" Musculation ,  Fitness, Dance",
prixMois:"50Dt"},

{title:"Abonnement pour enfant",
image:"https://patrickboyer.com/wp-content/uploads/2019/05/tarif.png",
description:"200",
espaces:"FOOT ACADEMY,Zumba Kids,Taekwondo",
prixMois:"50Dt"},
    ]}
return(
    <div >



        <h1 className="Ttarif">  Les tarifs </h1>
        <Row xs={1} md={2} className="g-4">
  
    <Col>
     {data.tarif.map((el)=>{
      return(
      <Card>
        <div className="cardTarif">
        <Card.Img className="imgetarif" variant="top" src={el.image} />
        <hr></hr>
        <Card.Body>
          <Card.Title className="titletarif"> {el.title}</Card.Title>
          <Card.Text>
             <p className="prixtarif"> <b>prix d'abonnement:</b> {el.description }</p>          <br></br>
        
                    <p> <b>les Espaces:</b>{el.espaces}</p> <br></br>
                     <p className="prixtarif"><b> prix par Mois:</b> {el.prixMois}</p>  
          </Card.Text>
        </Card.Body>
        
</div>
      </Card>
                  )})}
    </Col>
 
</Row>


    </div>
)
}
export default Tarifs;
