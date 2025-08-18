import { useState } from 'react'

// 建立元件方法1
function Mycomponent(){
    const [counts, setCounts] = useState(0);
    const handleClick=()=>{
        setCounts(counts + 1);
    }
    return(
        // 呼叫自訂函式不用加上小括號
        <button id="btn1" onClick={handleClick}>點擊次數:{counts}</button>
    )
}

// 建立元件方法2
// const  Mycomponent=()=>{
//     return(
        
//     )
// }

const App = () => {
    // let counts=0;
    // const [counts, setCounts] = useState(0);
    return (
        <div>
            {/* <button id="btn1" onClick={() => {
                counts++;
                setCounts(counts + 1);
                console.log(counts);
            }}>點擊次數:{counts}</button> */}
            <Mycomponent/>
        </div>
    )
}

export default App