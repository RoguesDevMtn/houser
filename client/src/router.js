import React from "react";
import {Switch, Route} from "react-router-dom";

import AuthView from './components/AuthView/AuthView';
import Dashboard from './components/Dashboard/Dashboard';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';

export default(
    <Switch>
        <Route component={AuthView} exact path='/'/>
        <Route component={Dashboard} path='/dashboard'/>
        <Route component={WizardOne} path='/wizard/1'/>
        <Route component={WizardTwo} path='/wizard/2'/>
        <Route component={WizardThree} path='/wizard/3'/>
        <Route component={WizardFour} path='/wizard/4'/>
        <Route component={WizardFive} path='/wizard/5'/>
    </Switch>


)