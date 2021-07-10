import { ADD_CLIENT ,DELETE_CLIENT } from "./Action"


const initState = {
    Client: [
      {
        id: 7,
       nom:"dj",
       prenom:"",
       age:22,
       email:"dssdf",
       portable:5555852,
       genre:"femme"
      },
      {
        id: 6,
       nom:"rakia",
       prenom:"jlassi",
       age:29,
       email:"rakiajlassi@gmail.com",
       portable:585458255,
       genre:"femme"
      },
      {
        id: 9,
       nom:"ahmed",
       prenom:"ben ali",
       age:12,
       email:"qdskjqds",
       portable:5555852,
       genre:"femme"
      },
      {
        id: 4,
       nom:"dj",
       prenom:"",
       age:22,
       email:"dssdf",
       portable:5555852,
       genre:"femme"
      }
    ]}

    const Reducer = (state = initState, action) =>{
      switch(action.type){

        case ADD_CLIENT:
          return{...state, Client: [...state.Client, action.payload] }

       case DELETE_CLIENT:
        console.log(state);
        const newClients = state.Client.filter((Client) => Client.id !== action.payload);
        console.log({ newClients });
        return { ...state,Client: newClients };
        

        default:
      return state;


      }
       
    
}
export default Reducer;