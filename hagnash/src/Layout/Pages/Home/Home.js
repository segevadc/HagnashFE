import './Home.css';
import {Header, Search} from "semantic-ui-react";

const SEARCH_LABEL = "חפש את ההגנש שלך";

export const Home = () => {

    return <div className='homeContainer'>
            <Search
                input={{ icon: 'search', iconPosition: 'left', size:'big' }}
            />
            <Header className='searchLabel'>
                {SEARCH_LABEL}
            </Header>
    </div>;
}