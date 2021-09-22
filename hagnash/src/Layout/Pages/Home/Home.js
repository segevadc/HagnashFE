import './Home.css';
import {Container, Search, Segment} from "semantic-ui-react";
import {Searcher} from "../../../CommonComponents/Search";

const SEARCH_LABEL = "חפש את ההגנש שלך";
export const Home = () => {

    return <Segment color='red' className='searchContainer'>
        <Searcher onSearch={() => {}}
            /*className="searchInput"
            input={{icon: 'search', iconPosition: 'left', size: 'big', placeholder: SEARCH_LABEL}}*/
        />
    </Segment>;
}