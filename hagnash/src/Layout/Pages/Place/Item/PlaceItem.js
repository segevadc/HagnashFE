import './PlaceItem.css';

import {Item, Label } from 'semantic-ui-react'

const EXAMPLE_IMAGE = "img.png"

export const FacilitiesSection = ({facilities}) => {
    let labels = facilities.map(facility => <Label content={facility} className="facility"/>);

    return <Item.Extra>
        {labels}
    </Item.Extra>
}

export const PlaceScore = ({score}) => {
    return <div className="placeScore">{score}</div>
}

export const PlaceItem = ({place}) => {

    return <Item className="placeItem">
        <Item.Image src={EXAMPLE_IMAGE}/>

        <Item.Content>
            <Item.Header className="placeName">{place.name}</Item.Header>
            <Item.Meta>
                <span className="placeArea">{place.area}</span>
            </Item.Meta>
            <Item.Description className="placeDescription">{place.description}</Item.Description>
            <FacilitiesSection facilities={place.facilities} />
        </Item.Content>

        <PlaceScore score={place.score} />
    </Item>
}