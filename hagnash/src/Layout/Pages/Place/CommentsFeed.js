import {useEffect, useState} from "react";
import {HagnashApi} from "../../../api/HagnashAPI";
import {name, image} from 'faker'
import {Header, Comment, Loader, Form, Button, Rating} from "semantic-ui-react";

export const CommentsFeed = () => {
    const [comments, setComments] = useState(null);
    const [commentVal, setCommentVal] = useState();
    const [rating, setRating] = useState(0);
    const urlParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        getComments()
    }, [])

    const getComments = async () => {
        const comments = await HagnashApi.getComments(urlParams.get('id'));
        console.log("fetching comments");
        setComments(comments.data);
    }

    const postMessage = async () => {
        if (commentVal) {
            await HagnashApi.addComment({
                place_id: urlParams.get('id'),
                user: name.firstName(),
                content: commentVal,
                rate: rating ? rating : null
            }).then(() => {
                setCommentVal("")
                getComments()
            })
        }
    }

    return (
        <div style={{direction: 'rtl'}}>
            <Header as='h1' dividing>
                תגובות
            </Header>
            {comments ?
                <div>
                    <div style={{height:'30rem', overflowY:'auto'}}>
                        <Comment.Group>

                            {
                                comments.map(comment => {
                                    return (
                                        <Comment>
                                            <Comment.Avatar src={image.avatar()}/>
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


                        </Comment.Group>
                    </div>
                    <Form post style={{paddingTop:'0.5rem'}}>
                        <Form.TextArea style={{width:'50%'}} placeholder={'הכנס תגובה כאן'} value={commentVal} onChange={(e) => {
                            setCommentVal(e.target.value)
                        }}/>
                        <a>דרג את המיקום, ועזור לחיילים לבחור נכון!</a>
                        <Rating icon='star' rating={rating} maxRating={5} onRate={(e, data) => {setRating(data.rating)}}/>
                        <br />
                        <br />
                        <Button content='הוסף תגובה' labelPosition='right' icon='send' primary onClick={postMessage}/>
                    </Form>
                </div> :
                <Loader style={{marginTop: '2rem'}} active size='huge'/>}
        </div>
    )

}