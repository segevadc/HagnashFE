import './Home.css';
import {Search, Segment} from "semantic-ui-react";

const SEARCH_LABEL = "חפש את ההגנש שלך";
export const Home = () => {

    return <Segment color='red' className='searchContainer'>
        <Search
            className="searchInput"
            input={{icon: 'search', iconPosition: 'left', size: 'big'}}
            defaultValue={SEARCH_LABEL}
        />
    </Segment>;
}