import Card from '../components/Card'
import'../css/App0806-1.css'

// 建立陣列物件資料

const arrCard = [
    {
        id:1,
        imgURL: 'https://images.unsplash.com/photo-1538964173425-93884d739596?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: "海邊",
        desc: "漂亮海邊",
        btnName:'圖片來源',
        btnURL:'https://images.unsplash.com/photo-1538964173425-93884d739596?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id:2,
        imgURL: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: "狗狗",
        desc: "可愛狗狗在發呆",
        btnName:'圖片來源',
        btnURL:'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {   
        id:3,
        imgURL: 'https://plus.unsplash.com/premium_photo-1711478282508-fbd04611ca78?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: "山",
        desc: "漂亮的山",
        btnName:'圖片來源',
        btnURL:'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {   
        id:4,
        imgURL: 'https://images.unsplash.com/photo-1557434440-d4d48e6578b5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: "沙灘",
        desc: "超美沙灘",
        btnName:'圖片來源',
        btnURL:'https://images.unsplash.com/photo-1557434440-d4d48e6578b5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

const App = () => {
    return (

        <div className='container'>
            
            {/* 呼叫員工元件，使用陣列物件資料:搭配map */}
            {
                arrCard.map((card) => {
                    return (
                        <Card key={card.id} imgURL={card.imgURL} title={card.title} desc={card.desc} btnName={card.btnName} btnURL={card.btnURL}/>
                    )

                })
            }
        </div>

        )
        /* 
const App = () => {
    
    //資料抽離
    // 物件資料
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
            <Card 
            imgURL={photos.photo1.imgURL}
            title={photos.photo1.title}
            desc={photos.photo1.desc}
            btnName={photos.photo1.btnName}
            btnURL={photos.photo1.btnURL}
            >
            </Card>
            <Card 
            imgURL={photos.photo2.imgURL}
            title={photos.photo2.title}
            desc={photos.photo2.desc}
            btnName={photos.photo2.btnName}
            btnURL={photos.photo2.btnURL}
            >
            </Card>
            <Card 
            imgURL={photos.photo3.imgURL}
            title={photos.photo3.title}
            desc={photos.photo3.desc}
            btnName={photos.photo3.btnName}
            btnURL={photos.photo3.btnURL}
            >
            </Card>

        </div>
        </>
    )
} */}


export default App