import {api} from '../api'
import React, { useEffect, useState } from 'react'
import WriteComments from './WriteComments'
import axios from 'axios'


const WriteDetail = (props) => {


    //yazı detayları useState si
    const [writeDetail, setWriteDetail] = useState({})

    // yorumlar
    const [comments, setComments] = useState([])

    // destructuring
    const { id } = props.match.params



    // yazılan yorumları apı ye gönderiyoruz, veri tabanına obje içerisindeki isimler ile kayıt olur
    const handleCommentSubmit = (event, commentBody) => {
        event.preventDefault();

        api().post(`/posts/${id}/comments`, commentBody)
            .then(response => { setComments([...comments, response.data]) }) //yorumları dataya ekliyoruz
            .catch((error) => { console.log(error) })
    }


    // 1. her bir yazı detayına tıklanınca ıd numarasına göre data bilgileri alınacak
    // 2. kullanıcı yorumlarını görmek için
    useEffect(() => {

        axios.all([
            api().get(`/posts/${id}`),
            api().get(`/posts/${id}/comments`)])
            .then(responses => {
                console.log(responses)
                setWriteDetail(responses[0].data)
                setComments(responses[1].data)
            })
            .catch(error => { console.log(error) })
    }, [])


    return (
        <>
            <h2 className="ui header">{writeDetail.title}</h2>
            <p>{writeDetail.content}</p>
            <p>{writeDetail.created_at}</p>

            <WriteComments comments={comments} handleCommentSubmit={handleCommentSubmit} />

        </>
    )
}

export default WriteDetail
