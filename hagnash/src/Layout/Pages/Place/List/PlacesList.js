import {Item, Loader} from "semantic-ui-react";
import {useEffect, useState} from "react";
import {HagnashApi} from "../../../../api/HagnashAPI";
import {PlaceItem} from "../Item/PlaceItem";
import '../placesList.css';

export const PlacesList = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const [places, setPlacesList] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            setLoading(true)
            const placesList = await HagnashApi.searchPlaces(urlParams.get('text'));
            setPlacesList(placesList.data);
            setLoading(false)
        })();
    }, [])


    return loading ? <Loader size='huge' active /> : places.length ? <div className='placesList'>
        <Item.Group>
            {places.map((place) =>
                <PlaceItem place={place}/>
            )}
        </Item.Group>
    </div> : <div style={{display: "flex", justifyContent:"center", alignItems:'center', height:'30vh'}}><h1>😥לא נמצאו תוצאות</h1></div>
}