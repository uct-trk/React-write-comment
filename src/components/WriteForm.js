import axios from 'axios'
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom' // history geldi

const WriteForm = (props) => {

    const [write, setWrite] = useState({ title: "", content: "" })
    const [err, setErr] = useState("")

    const onInputChange = (event) => {
        setWrite({ ...write, [event.target.name]: event.target.value })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        axios.post("https://react-yazi-yorum.herokuapp.com/posts", write)
            .then(response => { props.history.push("/") })  // yazımız eklendiğinde onu ana sayfaya yönlendiriyoruz
            .catch((err) => { setErr("You have to fill Header and Content") })
        
        setErr("")
    }

    return (
        <>
        {err && (
            <div className="ui error message">
            <div className="header">Error</div>
            <p>{err}</p>
        </div>
        )}
            
            <div className="ui form">
                <div className="field">
                    <label>Header</label>

                    <input name="title" value={write.title} type="text" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Short Text</label>
                    <textarea name="content" value={write.content} rows="3" onChange={onInputChange}></textarea>
                </div>
                <button className="ui primary button" onClick={onFormSubmit}>Send</button>
                <button className="ui button">Cancel</button>
            </div>
        </>
    )
}

export default withRouter(WriteForm)
