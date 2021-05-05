import axios from "axios";

export function api() { 
    return axios.create({ baseURL: "https://react-yazi-yorum.herokuapp.com"})
}
// başka dosyalarda api().get('/posts') yapacağız
// axios.get("https://react-yazi-yorum.herokuapp.com/posts") yazmak yerine yukarıdakini yazabiliriz
// okunması daha kolay hale heldi