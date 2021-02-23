import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main';
import Calc from './pages/Calc';
import Vxtel from './pages/Vxtel';

const Routes = () => (
    <Router>
        <Route path="/" exact component={Vxtel} />
        <Route path="/" exact component={Main} />
        <Route path="/show" component={Calc} />
    </Router>
);

export default Routes;