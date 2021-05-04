import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const WriteList = () => {
    const [writeList, setWriteList] = useState([])

    useEffect(() => {
        axios.get("https://react-yazi-yorum.herokuapp.com/posts")
            .then((response) => {
                setWriteList(response.data)
                console.log(response.data)
            }) // apıden gelenler state kaydedilir (writeList)
    }, [])

    return ( 
    <div className="ui relaxed divided list"> 
    {writeList.map(comment => {
        return (
            <div key={comment.id} className="item">
                <i className="large github middle aligned icon"></i>
                <div className="content">
                    <Link to={`/posts/${comment.id}`} className="header">{comment.title}</Link>
                    <div className="description">{comment.content}</div>
                    <div className="description">{comment.created_at}</div>
                </div>
            </div>
        )
    })}
    </div>
    );
};

export default WriteList
