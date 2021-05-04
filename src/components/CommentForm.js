import React, {useState} from 'react'

const CommentForm = (props) => {

    const COMMENT_INITIAL = {
        display_name: "",
        body: ""
    }

    // forum alanı 
    const [commentBody, setCommentBody] = useState(COMMENT_INITIAL)

    // form alanından gelen değeri kayıt edecek
    const handleOnChange = (event) => {
        setCommentBody({ ...commentBody, [event.target.name]: event.target.value })
    }

    return (
       <>
       <h4>Write Comment</h4>
            <form className="ui form" onSubmit={(event) => {
                props.handleCommentSubmit(event, commentBody)
                setCommentBody(COMMENT_INITIAL)
                }}>

                <div class="ui large icon input">
                    <input
                        name="display_name"
                        type="text"
                        placeholder="Enter Your Name"
                        value={commentBody.display_name}
                        onChange={handleOnChange} />
                </div>
                <textarea
                    name="body"
                    placeholder="Your Comment..."
                    rows="3"
                    onChange={handleOnChange}
                    value={commentBody.body}>

                </textarea>
                <div><button type="submit" className="ui animated button blue"><div className="visible content">Share</div><div className="hidden content"><i aria-hidden="true" className="arrow right icon"></i></div></button></div>
            </form>
       </>
    )
}

export default CommentForm
