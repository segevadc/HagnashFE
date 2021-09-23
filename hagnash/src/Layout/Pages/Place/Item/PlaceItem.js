import './PlaceItem.css';

import {Item, Label, Loader} from 'semantic-ui-react'
import {HagnashApi} from "../../../../api/HagnashAPI";
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";


export const FacilitiesSection = ({facilities}) => {
    let labels = facilities.map(facility => <Label content={facility} className="facility"/>);

    return <Item.Extra>
        {labels}
    </Item.Extra>
}

export const PlaceScore = ({placeId}) => {

    const [placeScore, setPlaceScore] = useState(0);
    const [fetchingStore, setFetchingScore] = useState(true);


    useEffect(() => {
        (async () => {
            const placeScore = await HagnashApi.getPlaceScore(placeId);
            setPlaceScore(placeScore.data.avg_grade || 0);
            setFetchingScore(false);
        })();
    }, [])

    return fetchingStore ? <Loader inline active size='small' /> : <div className="placeScore">{placeScore}</div>;
}


export const PlaceItem = ({place}) => {

    const history = useHistory();

    const goToPlacePage = () => {
        history.push(`/place?id=${place.id}`);
    }
    return <Item className="placeItem"  onClick={goToPlacePage}>
        <Item.Image  className='previewImage' src={HagnashApi.getImage(place.images[0].path)}/>

        <Item.Content>
            <Item.Header className="placeName">{place.name}</Item.Header>
            <Item.Meta>
                <span className="placeArea">{place.area}</span>
            </Item.Meta>
            <Item.Description className="placeDescription">{place.description}</Item.Description>
            <FacilitiesSection facilities={place.facilities}/>
        </Item.Content>

        <PlaceScore placeId={place.id}/>
    </Item>
}