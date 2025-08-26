import '../css/app0826b.css';
import { useEffect, useState } from "react"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";


export default function App() {
    // 建立目前背景圖的變數
    const [currentImgIndex, setCurrentImgIndex] = useState(0);


    // 建立輪播圖片的陣列物件
    const slides = [
        { url: "./images/p3.jpg", title: "photo-1" },
        { url: "./images/p5.jpg", title: "photo-2" },
        { url: "./images/p7.jpg", title: "photo-3" },
        { url: "./images/p9.jpg", title: "photo-4" },
    ]


    // 當currentImgIndex改變時，會觸發useEffect
    useEffect(() => {
        // 每3秒呼叫nextSlide()換下一張圖
        const autoplay = setInterval(() => {
            nextSlide();
        }, 3000);


        // 每3秒後，移除autoplay，這樣才能取得最新的索引編號
        return () => clearInterval(autoplay);
    }, [currentImgIndex]);


    // 下一張
    const nextSlide = () => {
        // 取得前一張的索引編號，檢查是否為最後一個編號
        // 是=>回到第一張
        // 否=>跳到下一張
        setCurrentImgIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
    }


    // 上一張
    const prevSlide = () => {
        // 取得前一張的索引編號，檢查是否為第一個編號
        // 是=>跳到最後張
        // 否=>跳到前一張
        setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
    }


    // 建立左右icon元件
    const Arrow = ({ direction, onClick }) => {
        return (
            // 擺放icon的區域
            <div style={{
                position: "absolute",
                top: "20%",
                cursor: "pointer",
                color: "#fff",
                [direction]: "20px",  //將icon拆開，並且調整左右留白間距
            }}>
                {
                    direction === "left" ? (
                        <FaChevronCircleLeft size={50} onClick={onClick} />
                    ) : (<FaChevronCircleRight size={50} onClick={onClick} />)
                }
            </div>
        )
    }


    return (
        <>
            {/* 滿版最外層 */}
            <div className="wrapper" style={{
                // maxWidth: "100vw",
                // height: "100vh",
                width: "100%",
                height: "300px",
                margin: "auto",
            }}>
                {/* 滿版背景輪播區 */}
                <div style={{
                    backgroundImage: `url(${slides[currentImgIndex].url})`,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    margin: "auto"
                }}>
                    {/* 文字區 */}
                    <h2 style={{ color: "red" }}>{slides[currentImgIndex].title}</h2>
                    {/* 上一張 */}
                    <Arrow direction="left" onClick={prevSlide} />
                    {/* 下一張 */}
                    <Arrow direction="right" onClick={nextSlide} />
                </div>
            </div>
        </>
    )
}
