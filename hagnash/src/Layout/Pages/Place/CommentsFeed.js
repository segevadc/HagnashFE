import {useEffect, useState} from "react";
import {HagnashApi} from "../../../api/HagnashAPI";
import axios from "axios";
import {Header, Comment, Loader, Form, Button} from "semantic-ui-react";

export const CommentsFeed = () => {
    const [comments, setComments] = useState(null);

    const urlParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        (async () => {
            const comments = await HagnashApi.getComments(urlParams.get('id'));
            console.log(comments);
            setComments(comments.data);
        })();
    }, [])

    return (
        <div style={{direction: 'rtl'}}>
            <Header as='h1' dividing>
                תגובות
            </Header>
            {comments ?
                <Comment.Group>

                    {
                        comments.map(comment => {
                            return (
                                <Comment>
                                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
                                    <Comment.Content>
                                        <Comment.Author as='a'>
                                            {comment.user}
                                        </Comment.Author>
                                        <Comment.Text>
                                            {comment.content}
                                        </Comment.Text>
                                    </Comment.Content>
                                </Comment>
                            )
                        })
                    }
                    <Form post>
                        <Form.TextArea placeholder={'הכנס תגובה כאן'}/>
                        <Button content='הוסף תגובה' labelPosition='right' icon='send' primary />
                    </Form>
                </Comment.Group> :
                <Loader style={{marginTop:'2rem'}} active size='huge'/>}
        </div>
    )

}