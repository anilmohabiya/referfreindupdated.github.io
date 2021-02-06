import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Refer from './Refer';

import Navbar from './Navbar';
import {Switch,Route, Redirect} from 'react-router-dom';


const App =()=>{

return(
<>

<Navbar/>
<Switch>
<Route exact path="/" component={Refer} />

<Redirect to ="/" />
</Switch>


</>


  );
};
export default App;
