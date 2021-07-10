
import "./Login.css";
import {Link} from 'react-router-dom';



function  Login (){
    return(
        
         
           
            <div className="cardlogin">

            <h1 className="Tlogin"><b>Login</b></h1>

            <label className="login"><b>Login</b></label> 
            <input className="inputlogin" type="email"></input>
            <br></br>


            <label ><b>Password</b></label>
            <input className="inputlogin"      type="password" ></input>

            <button className="btlog">
      <Link to ="/list" > <b>connexion </b></Link>
      </button>
            </div>
             
    )
}
export default Login