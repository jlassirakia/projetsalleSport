
import "./Home.css";
import {Link} from 'react-router-dom';

function Home (){

    return(

    <div className="hom" >

<p >
        {" "}
        <b className="salle">BeIn Sport</b>
      </p>
     
      <button className="btHome">
      <Link to ="/inscription" > <b>s'inscrire </b></Link>
      </button>
    </div>
    )
}
export default Home;