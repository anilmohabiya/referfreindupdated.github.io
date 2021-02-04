import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Refer from './Refer';
import {Switch,Route, Redirect} from 'react-router-dom';
{/*start code  */}

const App =()=>{

return(
<>

<Switch>
<Route exact path="/" component={Refer} />

<Redirect to ="/" />
</Switch>


</>


  );
};
export default App;
