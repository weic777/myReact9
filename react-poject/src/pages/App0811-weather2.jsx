import { IoIosUmbrella } from "react-icons/io";
import '../css/App0811-weather2.css'
import { useEffect } from "react";
import axios from "axios";

const App = () => {
    // useEffect() =>渲染後，只呼叫一次json
    useEffect(() => {
        // 非同步取資料方法

        (async () => {
            // 取得public中的json資料
            // const data = await axios.get('./json/F-C0032-001.json');
            // // 檢測是否連上json
            // console.log(data.data.cwaopendata.dataset);

            // 取得src中的json資料
            const data = await axios.get('./src/json/F-C0032-001.json');
            // 檢測是否連上json
            console.log(data.data.cwaopendata.dataset);
        })();
    }, [])



    return (
        <>
            <h2>三十六小時天氣預報</h2>
            <div className="cards">
                {/* 取得縣市陣列跑回圈 */}
                <div className="card">
                    {/* 卡片標題 */}
                    <div className="card-header">
                        台北市
                    </div>
                    {/* 卡片內容 */}
                    <div className="card-body">
                        {/* 取得資料後跑回圈 */}
                        <div className="item">
                            {/* 日期 */}
                            <div className="date">
                                11日
                            </div>
                            <div className="time">
                                上午6:00 <br />
                                ~ <br />
                                下午6:00 <br />
                            </div>
                            {/* 天氣圖 */}
                            <div className="weatherPic">
                                {/* 天氣圖:使用路徑，所以要將圖片放在public資料夾 */}
                                <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="天氣圖" />
                            </div>
                            {/* 降雨機率pop */}
                            <div className='pop'>
                                <IoIosUmbrella />
                                80%

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default App;
