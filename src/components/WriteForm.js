import React, { useEffect, useState } from 'react'
import { useHistory, useParams, withRouter } from 'react-router-dom' // history geldi
import { api } from '../api'

const WriteForm = (props) => {

    const [write, setWrite] = useState({ title: "", content: "" })
    const [err, setErr] = useState("")

    const {id} = useParams()
    const history = useHistory()

    const onInputChange = (event) => {
        setWrite({ ...write, [event.target.name]: event.target.value })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        setErr("")
           // eğer yazı kısmı yoksa daha ileriye gitme
        if (props.editWrite?.title) {
            // edit işlemi yapılacak put request 
            console.log("id", id)
            api()
                .put(`/posts/${id}`, write)
                .then((response) => {
                    console.log(response)
                    history.push(`/posts/${id}`)
                })
                .catch((err) => setErr("You have to fill Header and Content"))

        } else {
            // add işlemi yapılacak
            api().post("/posts", write)
                .then(response => { history.push("/") })  // yazımız eklendiğinde onu ana sayfaya yönlendiriyoruz
                .catch((err) => { setErr() })
        }
    }

    // propstan gelen yazı
    useEffect(() => {
        if (props.editWrite?.title && props.editWrite?.content){setWrite(props.editWrite)} 
    }, [props.editWrite])


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

export default WriteForm

// useParams ve useHistory kullandık withRouter e gerek kalmadı
// withRoter kullanmamızın sebebi;
// App.js içinde route olan componentlerden olmadığı için burada boyle bir yöntem kullandık
