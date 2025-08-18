import { useState } from 'react'

const App = () => {
    const [txt, setTxt] = useState('user');
    return (
        <div>
            <h2>文字方塊</h2><hr />
            帳號﹔<input type="text" value={txt} onChange={(e) => {
                setTxt(e.target.value);
                console.log(e.target.value);
            }} />
            <button onClick={()=>{
                alert(`帳號:${txt}`)
            }}>確定送出</button>
        </div>
    )
}

export default App 