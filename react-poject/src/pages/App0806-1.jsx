import'../css/App0806-1.css'
const App = () => {
    
    //資料抽離
    const photos={
        photo1:{
            imgURL:'https://images.unsplash.com/photo-1538964173425-93884d739596?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'海邊',
            desc:"漂亮海邊",
            btnName:'圖片來源',
            btnURL:'https://images.unsplash.com/photo-1538964173425-93884d739596?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo2:{
            imgURL:'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'狗狗',
            desc:"可愛狗狗在發呆",
            btnName:'圖片來源',
            btnURL:'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        photo3:{
            imgURL:'https://plus.unsplash.com/premium_photo-1711478282508-fbd04611ca78?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'山',
            desc:"漂亮的山",
            btnName:'圖片來源',
            btnURL:'https://plus.unsplash.com/premium_photo-1711478282508-fbd04611ca78?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
    }

    return (
        <>
        <div className='container'>
        <div className="card">
            <img src={photos.photo1.imgURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{photos.photo1.title}</h5>
                    <p className="card-text">{photos.photo1.desc}</p>
                    <a href={photos.photo1.btnURL} className="btn">{photos.photo1.btnName}</a>
                </div>
        </div>

        <div className="card">
            <img src={photos.photo2.imgURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{photos.photo2.title}</h5>
                    <p className="card-text">{photos.photo2.desc}</p>
                    <a href={photos.photo2.btnURL} className="btn">{photos.photo2.btnName}</a>
                </div>
        </div>

        <div className="card">
            <img src={photos.photo3.imgURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{photos.photo3.title}</h5>
                    <p className="card-text">{photos.photo3.desc}</p>
                    <a href={photos.photo3.btnURL} className="btn">{photos.photo3.btnName}</a>
                </div>
        </div>
        </div>
        </>
    )
}

export default App