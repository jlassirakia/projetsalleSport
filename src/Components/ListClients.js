import React, { useState } from "react";
import "./ListClients.css";
import {useDispatch ,useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { delete_client } from "../redux/Action";
import Button from "react-bootstrap/Button";


function ListClients (){

  const [editable] = useState(false);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [portable, setPortable] = useState("");
  const [genre, setGenre] = useState("");
  

    let clients = useSelector((state) => state.Client);
    
    let dispatch = useDispatch();

    return(

<div className="list" >

  <h1 className="Tlist">liste des inscrits</h1>



  {clients.map((client)=>{
    return(
   <div className="base" key={client.id}>
      <Table>
      <thead>
        <tr className="trr">
          <th>#</th>
          <th>identifiant </th>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Age</th>
          <th>Email</th>
          <th>Portable</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        
                <tr>
                  <td>****</td>
                  <td className="ident">{client.id.length > 1 ? client.id[2] : client.id}</td>
                  <div className="eedite">
                    {editable ? (
                      <input
                        type="text"
                        className="form-control"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                      />
                    ) : (
                      <td>{client.nom}</td>  
                    )}
                  </div>




             <td>
                  <div className="eedite">
                    {editable ? (
                      <input
                        type="text"
                        className="form-control"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                      />
                    ) : (
                      <td>{client.prenom}</td>
                    )}
                  </div>
                  </td>


                  <td>
                  <div className="eedite">
                    {editable ? (
                      <input
                        type="text"
                        className="form-control"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    ) : (
                      <td>{client.age}</td>
                    )}
                  </div>
                  </td>


                  <td>
                  <div className="eedite">
                    {editable ? (
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    ) : (
                      <td>{client.email}</td>
                    )}
                  </div>
                  </td>

                  <td>
                  <div className="eedite">
                    {editable ? (
                      <input
                        type="text"
                        className="form-control"
                        value={portable}
                        onChange={(e) => setPortable(e.target.value)}
                      />
                    ) : (
                      <td>{client.portable}</td>
                    )}
                  </div>
                  </td>

                  <td>
                  <div className="eedite">
                    {editable ? (
                      <input
                        type="text"
                        className="form-control"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                      />
                    ) : (
                      <td>{client.genre}</td>
                    )}
                  </div>
                  </td>

                  <td>
                    <Button   className="delete"   onClick={() => dispatch(delete_client(client.id))}>
                      <b>Delete</b>
                    </Button>
                  </td>

    </tr>
    </tbody>
    </Table>

    
</div> )
  })}
  </div> )}
export default ListClients;