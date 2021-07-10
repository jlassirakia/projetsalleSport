
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';

import Home from "./Components/Home"
import Musculation from "./Components/Espaces/Musculation"
import Fitness from "./Components/Espaces/Fitness"
import Dance from "./Components/Espaces/Dance"
import Tarifs from "./Components/Tarifs"
import Login from "./Components/Login"
import  Inscription from "./Components/Inscription"
import ListClients from './Components/ListClients';
import ClubAdulte from './Components/Activites/ClubAdulte';
import ClubEnfant from './Components/Activites/ClubEnfant';







function Routes (){
return(
     

    
      <Switch>
     <Route path="/dance"  exact component={Dance}/>
     <Route path="/fitness"  exact component={Fitness}/>
     <Route path="/musculation"  exact component={Musculation}/>
     <Route path="/"  exact component={Home}/>
     <Route path="/tarifs"  exact component={Tarifs}/>
     <Route path="/inscription"  exact component={Inscription}/>
     <Route path="/login"  exact component={Login}/>
     <Route path="/list"  exact component={ListClients}/>
     <Route path="/adulte"  exact component={ClubAdulte}/>
     <Route path="/adulte"  exact component={ClubAdulte}/>
     <Route path="/enfant"  exact component={ClubEnfant}/>
     
     
     </Switch>    
)
}
export default Routes