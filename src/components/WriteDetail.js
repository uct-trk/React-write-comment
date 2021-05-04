import axios from 'axios'
import React, { useEffect, useState } from 'react'

const WriteDetail = (props) => {

    //yazı detayları useState si
    const [writeDetail, setWriteDetail] = useState({})

    // destructuring
    const {id} = props.match.params

    // her bir yazı detayına tıklanınca ıd numarasına göre data bilgileri alınacak
    useEffect(() => {
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
        .then(response => {setWriteDetail(response.data)})
        .catch(err => {console.log(err)})
        console.log(writeDetail)
    },[])
    return (
        <>
        <h2 className="ui header">{writeDetail.title}</h2>
        <p>{writeDetail.content}</p>
        <p>{writeDetail.created_at}</p>
        </>
    )
}

export default WriteDetail
