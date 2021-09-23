import {useEffect, useState} from "react";
import {Grid, Segment, Loader, Header, Divider, List, Icon} from "semantic-ui-react";
import {Gallery} from "./Gallery";
import {Map} from './Map';
import {HagnashApi} from "../../../api/HagnashAPI";
import {CommentsFeed} from './CommentsFeed'
import "./place.css";

export const Place = () => {

    const [place, setPlace] = useState(null);

    const urlParams = new URLSearchParams(window.location.search);

    const icons = {
        'sit': 'bed',
        'walk': 'blind',
        'gym': 'heartbeat',
        'pool': 'bath',
        'music_room': 'music'
    }

    const facilities_dict = {
        'pool': 'בריכה',
        'music_room': 'חדר מוזיקה',
        'gym': 'חדר כושר'
    }

    useEffect(() => {
        (async () => {
            const placeDocument = await HagnashApi.getPlace(urlParams.get('id'));
            console.log(placeDocument);
            setPlace(placeDocument.data);
        })();
    }, [])

    return place ? <div style={{display: "flex", alignItems: 'center', flexDirection:'column'   }}>
            <Segment color='red' className="place">
                <Grid celled='internally'>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Gallery images={place.images}/>
                            <Map lat={place.location.lat} lon={place.location.lon} name={place.name}/>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Grid>
                                <Grid.Row>

                                    <Grid.Column>
                                        <div style={{height: '50rem', overflowY: 'auto'}}>
                                            <div>
                                                <Header as='h1'>{place.name}</Header>
                                                <Divider/>
                                                <Header as='h2'>תיאור כללי</Header>
                                                <p style={{fontSize: '1.6rem'}}>{place.description}</p>
                                            </div>
                                            <div style={{marginTop: '4rem'}}>
                                                <Header as='h2'>עמדות שמירה</Header>
                                                <List style={{direction: 'rtl'}} horizontal={true}>
                                                    {place.guard_post.map(post => {
                                                        return <List.Item>
                                                            <List.Icon size='big' name={icons[post.type]}
                                                                       verticalAlign='middle'/>
                                                            <List.Content>
                                                                <List.Header as='h3'>{post.name}</List.Header>
                                                                <List.Description as='a'
                                                                                  style={{width: '20rem'}}>{post.description}</List.Description>
                                                            </List.Content>
                                                        </List.Item>
                                                    })}
                                                </List>
                                            </div>
                                            <div style={{marginTop: '4rem'}}>
                                                <Header as='h2'>מתקנים</Header>
                                                <List style={{direction: 'rtl'}} horizontal={true}>
                                                    {place.facilities.map(facility => {
                                                        return <List.Item>
                                                            <List.Icon size='big' name={icons[facility]}
                                                                       verticalAlign='middle'/>
                                                            <List.Content>
                                                                <List.Header
                                                                    as='h3'>{facilities_dict[facility]}</List.Header>
                                                            </List.Content>
                                                        </List.Item>
                                                    })}
                                                </List>
                                            </div>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment color='blue' className="place" style={{minHeight:'20rem', margin:'1rem'}}>
                <CommentsFeed/>
            </Segment>
        </div> :
        <Loader active size='huge'/>
}