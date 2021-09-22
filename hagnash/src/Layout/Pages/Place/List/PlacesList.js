import {Item} from "semantic-ui-react";
import {PlaceItem} from "../Item/PlaceItem";

export const PlacesList = ({places}) => {
    let placeItems = places.map(place => <PlaceItem place={place} />);

    return <div>
        <Item.Group>
            {placeItems}
        </Item.Group>
    </div>
}