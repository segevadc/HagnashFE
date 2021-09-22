import './Home.css';
import {Header, Item, Search} from "semantic-ui-react";
import {PlaceItem} from "../Place/PlaceItem";

const SEARCH_LABEL = "חפש את ההגנש שלך";
const PLACE_EXAMPLE = {
    id: "1",
    name: "בת עין",
    images: [],
    description: "ההגנש הכי טוב שיכלת למצוא",
    facilities: ["טלויזיה", "חדר כושר", "מעיין"],
    location: "POINT(0,0)",
    guard_posts: [
        {
            type: "שג",
            name: "רקפת",
            description: "עמדת שג עם מזגן, יש תצפיתנית שעושה את העבודה"
        }
    ]
}

export const Home = () => {

    return <div className='homeContainer'>
            <Search
                input={{ icon: 'search', iconPosition: 'left', size:'big' }}
            />
            <Header className='searchLabel'>
                {SEARCH_LABEL}
            </Header>
            <div>
                <Item.Group>
                    <PlaceItem place={PLACE_EXAMPLE} />
                </Item.Group>
            </div>
        </div>;
}