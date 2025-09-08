import React, { useState } from 'react'
import axios from "axios"; // <- 這行一定要加

const App = () => {
    // 檢測是否連上api
    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

    const api = "https://api.unsplash.com/search/photos/"
    const accessKey = "oY3TFnoq0V0MaM_ZXxG3TSmNeDaTtr_kbrjwdyQGkiY"
    const [filterString,setFilterString]=useState('dog');
    const getPhotos=async()=>{
        // console.log(`${api}?client_id=${accessKey}&query=${filterString}`)
    const result=await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`)
        console.log(result)
}
    getPhotos();
    return (
        <div>App</div>
    )
}

export default App