import './pagesContainer.css';

import {Switch, Route} from "react-router-dom";
import {Home} from './Home/Home';
import {About} from "./About";
import {Place} from "./Place/Place";

export const PagesRouter = () => {
    return (
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/place">
                    <Place />
                </Route>
            </Switch>
    )
}