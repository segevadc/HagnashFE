import {useState} from 'react';
import './Home.css';
import {useHistory} from'react-router-dom';
import {Input, Icon} from "semantic-ui-react";


const SEARCH_LABEL = "חיפוש חופשי";

export const Home = () => {

    const history = useHistory();

    const [inputText, setInputText] = useState("");

    const onSearch = () => {
        history.push(`/places?text=${inputText}`)
    };

    const Searcher = () => {
        return <Input
            className='searchInput'
            size='big'
            onChange={(e, data) => setInputText(data.value)}
            icon={<Icon
                onClick={onSearch}
                name='search' inverted
                circular
                link
            />}
            placeholder={SEARCH_LABEL}
        />
    };

    return <div className="landingView">
        <div className="grid searchGrid">
            <div className="searchText">
                בחר את <strong>ההגנש<br/>המושלם</strong> עבורך
            </div>
            <Searcher />
        </div>

        <div className="grid imageGrid">

        </div>
    </div>;
}