import {useState} from 'react';
import './Home.css';
import {useHistory} from 'react-router-dom';
import {Input, Segment, Icon, Form} from "semantic-ui-react";


const SEARCH_LABEL = "חיפוש חופשי";

export const Home = () => {

    const history = useHistory();

    const [inputText, setInputText] = useState("");

    const onSearch = () => {
        history.push(`/places?text=${inputText}`)
    };

    return <div className="landingView">
        <div className="home-grid searchGrid">
            <div className="searchText">
                בחר את <strong>ההגנש<br/>המושלם</strong> עבורך
            </div>
            <Form onSubmit={onSearch}>
            <Form.Input
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
            </Form>
        </div>

        <div className="home-grid imageGrid">

        </div>
    </div>;
}