import React, { useState } from 'react'

const App = () => {
    // useState(1)是預設值哪一張的意思
    const[curImg, setCurImg]=useState(0);  
    const arrPhotots=[
        "./images/p1.jpg",
        "./images/p3.jpg",
        "./images/p5.jpg",
        "./images/p7.jpg",
    ]
    return (
        <div>
            <h1>小圖換大圖</h1><hr />
            <div>
                <div>
                    {/* <img src="./images/p1.jpg" alt="" width={120} height={80} style={{cursor:"pointer"}}/>
                    <img src="./images/p3.jpg" alt="" width={120} height={80} style={{cursor:"pointer"}}/>
                    <img src="./images/p5.jpg" alt="" width={120} height={80} style={{cursor:"pointer"}}/>
                    <img src="./images/p7.jpg" alt="" width={120} height={80} style={{cursor:"pointer"}}/> */}
                    {
                        arrPhotots.map((photo,index)=>{
                            
                            return(
                                <img 
                                key={index} 
                                src={photo} 
                                alt="" 
                                width={120} 
                                height={80} 
                                style={{cursor:"pointer"}}

                                // 滑鼠點擊時小圖就會變大圖
                                onClick={()=>{
                                    setCurImg(index)
                                    // 點擊小圖時才會出現大圖
                                    let showPic=document.querySelector('#showPic')
                                    showPic.style.display="block"
                                }}
                                // 滑鼠碰到時小圖就會變大圖
                                onMouseOver={()=>{
                                    setCurImg(index)
                                }}
                                // 離開小圖後會回到哪一張
                                onMouseOut={()=>{
                                    setCurImg(2)
                                }}
                                />
                            )
                                
                            
                        })
                    }
                </div>
                <div>
                    {/* <img src="./images/p1.jpg" alt="" width={420} height={280}/> */}
                    {/* 顯示大圖預設看不見 當縮圖被點擊時才會顯示 */}
                    <img id="showPic" 
                    src={arrPhotots[curImg]} 
                    alt="" 
                    width={420} 
                    height={280} 
                    style={{display:"none"}}
                    />
                </div>
            </div>
        </div>


    )
}

export default App