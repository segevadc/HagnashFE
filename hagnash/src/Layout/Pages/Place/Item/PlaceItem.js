import './PlaceItem.css';

import {Item, Label, Loader} from 'semantic-ui-react'
import {HagnashApi} from "../../../../api/HagnashAPI";
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";


export const FacilitiesSection = ({facilities}) => {
    const facilities_dict = {
        'pool': 'בריכה',
        'music_room': 'חדר מוזיקה',
        'gym': 'חדר כושר'
    }

    let labels = facilities.map(facility => <Label content={facilities_dict[facility]} className="facility"/>);

    return <Item.Extra>
        {labels}
    </Item.Extra>
}

export const PlaceScore = ({placeId}) => {

    const [placeScore, setPlaceScore] = useState(0);
    const [fetchingStore, setFetchingScore] = useState(true);

    const score_to_color = () => {
        if(placeScore === 0)
        {
            return 'gray'
        }
        else if(placeScore < 3){
            return '#c41b00'
        }
        else if(placeScore <= 4)
        {
            return '#e78800'
        }
        return '#437d00'
    }

    useEffect(() => {
        (async () => {
            const placeScore = await HagnashApi.getPlaceScore(placeId);
            setPlaceScore(placeScore.data.avg_grade || 0);
            setFetchingScore(false);
        })();
    }, [])

    return fetchingStore ? <Loader inline active size='small' /> : <div className="placeScore"
    style={{backgroundColor: score_to_color()}}
    >{placeScore}</div>;
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