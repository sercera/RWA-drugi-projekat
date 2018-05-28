import React from "react";
import Home from "./Home";
 import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Hero from "./Hero"; 

const App = () => (
    
     <BrowserRouter>
  <div>  
      <Switch>
        <Route exact path='/home' component={ Home } />
        <Route path='/hero/:id' component={ Hero } />
        </Switch>  
  </div>
 </BrowserRouter>
  );
export default App;