import './PlaceItem.css';

import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'

const EXAMPLE_IMAGE = "img.png"

export const PlaceItem = (props) => {

    const generateFacilitiesSection = () => {
        let labels = props.place.facilities.map(facility => <Label content={facility} className="facility"/>);

        return <Item.Extra>
            {labels}
        </Item.Extra>
    }

    return <Item className="placeItem">
        <Item.Image src={EXAMPLE_IMAGE}/>

        <Item.Content>
            <Item.Header className="placeName">{props.place.name}</Item.Header>
            <Item.Meta>
                <span className="placeArea">{props.place.area}</span>
            </Item.Meta>
            <Item.Description className="placeDescription">{props.place.description}</Item.Description>
            {generateFacilitiesSection()}
        </Item.Content>
    </Item>
}