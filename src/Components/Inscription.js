import React, { useState } from "react"
import "./Inscription.css";
import { add_client } from "../redux/Action";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";




function Inscription (){
    let [nom, setNom] = useState("");
    let [prenom, setPrenom] = useState("");
    let [age, setAge] = useState("");
    let [email, setEmail] = useState("");
    let [portable, setPortable] = useState("");
    let [genre, setGenre] = useState("");
    


    let dispatch = useDispatch();


return(
<div className="font"> 


 <div className="cardIns">

     <h1 className="titreIns">Inscription</h1>
     <hr></hr>
 <label><b>Nom:</b></label>
 <input  className="nom" onChange={(e) => setNom(e.target.value)}
        value={nom}></input><br></br><br></br>

 <label><b>prénom:</b></label>
 <input type="text" onChange={(e) => setPrenom(e.target.value)}
        value={prenom}></input><br></br><br></br>

 <label><b>Age:</b></label>
 <input  className="age"    type="text" onChange={(e) => setAge(e.target.value)}
        value={age}></input><br></br><br></br>

 <label><b>Email:</b></label>
 <input  className="email"  type="email" onChange={(e) => setEmail(e.target.value)}
        value={email}></input><br></br><br></br>

 <label><b>Portable:</b></label>
 <input type="phone" onChange={(e) => setPortable(e.target.value)}
        value={portable}></input><br></br><br></br>

 <label><b>genre:</b></label>
 <select className="genre" onChange={(e) => setGenre(e.target.value)}
        value={genre}>
    <option >Homme</option>
    <option >Femme</option>
    <option >Enfant</option>
    </select>
    <br></br>


    <button
        className="addd"
        onClick={() => {
          dispatch(
            add_client({
              id: uuid(),
              nom: nom,
              prenom:prenom,
              age:age,
              email:email,
              portable:portable,
              genre:genre
            })
          );

          setNom("");
          setPrenom("");
          setAge("");
          setEmail("");
          setPortable("");
          setGenre("");

        }}
      >
     <b> Inscrit</b> 
      </button>

 </div>


</div>
)
}

export  default Inscription;