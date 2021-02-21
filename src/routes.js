import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import Calc from './pages/Calc';

const Routes = () => (
    <BrowserRouter>
        <Route path="/" component={Main} />
        <Route path="/show" component={Calc} />
    </BrowserRouter>
);

export default Routes;