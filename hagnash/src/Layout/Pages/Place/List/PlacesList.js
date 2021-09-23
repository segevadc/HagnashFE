import {Item, Loader} from "semantic-ui-react";
import {useEffect, useState} from "react";
import {HagnashApi} from "../../../../api/HagnashAPI";
import {PlaceItem} from "../Item/PlaceItem";
import '../placesList.css';

export const PlacesList = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const [places, setPlacesList] = useState(null);

    useEffect(() => {
        (async () => {
            const placesList = await HagnashApi.searchPlaces(urlParams.get('text'));
            setPlacesList(placesList.data);
        })();
    }, [])


    return places ? <div className='placesList'>
        <Item.Group>
            {places.map((place) =>
                <PlaceItem place={place}/>
            )}
        </Item.Group>
    </div> : <Loader size='huge' active />
}