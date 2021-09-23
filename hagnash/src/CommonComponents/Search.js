import {Container, Search, Segment} from "semantic-ui-react";

const SEARCH_LABEL = "חיפוש חופשי";
export const Searcher = ({onSearch}) => {

    return (<Search
            className="searchInput"
            input={{icon: 'search', iconPosition: 'left', size: 'big', placeholder: SEARCH_LABEL}}
            onResultSelect={(e, data) => onSearch(data.value)}
        />
    );
}