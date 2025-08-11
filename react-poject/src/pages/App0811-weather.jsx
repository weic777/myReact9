import '../css/App0811-weather.css'
import weatherIcon from '../images/晴午後短暫雷陣雨.svg';
import { IoIosUmbrella } from "react-icons/io";



const App = () => {
    return (
        <>
        <div className="all">
        <div className="title">
            <h1>臺北市</h1>
        </div>
        <div className='container'>
            <div className="word">
                <h1>11日</h1>
                <p>上午6:00</p>
                <p>~</p>
                <p>下午6:00</p>
                <img src={weatherIcon} alt="晴午後短暫雷陣雨" />
                <p>晴午後短暫雷陣雨</p>
                <div className='rain'>
                    <IoIosUmbrella />
                    80%
                </div>
                

            </div>
            <div className="word">
                <h1>11日</h1>
                <p>上午6:00</p>
                <p>~</p>
                <p>下午6:00</p>
                <img src={weatherIcon} alt="晴午後短暫雷陣雨" />
                <p>晴午後短暫雷陣雨</p>
                <div className='rain'>
                    <IoIosUmbrella />
                    80%
                </div>
            </div>
            <div className="word">
                <h1>11日</h1>
                <p>上午6:00</p>
                <p>~</p>
                <p>下午6:00</p>
                <img src={weatherIcon} alt="晴午後短暫雷陣雨" />
                <p>晴午後短暫雷陣雨</p>
                <div className='rain'>
                    <IoIosUmbrella />
                    80%
                </div>

                
            </div>
            </div>
            </div>
        </>
    )
}

export default App