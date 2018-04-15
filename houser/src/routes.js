import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import Wizard from './Component/Wizard/Wizard';
import Wizard2 from './Component/Wizard/Wizard2';
import Wizard3 from './Component/Wizard/Wizard3';

export default(
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/Wizard" component={Wizard} />
        <Route path="/Wizard2" component={Wizard2} />
        <Route path="/Wizard3" component={Wizard3} />
    </Switch>
)