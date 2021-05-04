
import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

const WriteComments = (props) => {

    return (
        <>
            <CommentList comments={props.comments} />
            <CommentForm handleCommentSubmit={props.handleCommentSubmit}/>
        </>
    )
}

export default WriteComments
