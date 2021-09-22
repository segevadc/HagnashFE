import {Header} from './Header/Header';
import {PagesRouter} from "./Pages/PagesRouter";
import {BrowserRouter as Router} from "react-router-dom";

export const Layout = () => {
    return <Router>
        <Header/>
        <PagesRouter/>
    </Router>
}

