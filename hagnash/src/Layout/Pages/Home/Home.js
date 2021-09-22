import {useState, useMemo} from 'react';
import './Home.css';
import {Input, Segment, Icon} from "semantic-ui-react";

const SEARCH_LABEL = "חפש את ההגנש שלך";
export const Home = (factory, deps) => {

    const [inputText, setInputText] = useState("");

    const onSearch = () => {
        console.log(inputText);
    };

    return <Segment color='red' className='searchContainer'>
        <Input
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
        /> </Segment>;
}