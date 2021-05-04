import React from 'react'

const CommentList = (props) => {
    return (
        <>
            <h4>Comments</h4>
            {props.comments.map(comment => {
                return (
                    <div className="ui relaxed list" key={comment.id}>
                        <div className="item">
                            <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" />
                            <div className="content">
                                <a className="header">{comment.display_name}</a>
                                <div className="description">{comment.body}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CommentList
