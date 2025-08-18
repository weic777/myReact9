import { useState } from 'react'

const App = () => {
    const [subject, setSubject] = useState('');
    // 建立下接清單的項目
    const opList=['HTML','CSS','JS','REACT']
    // 建立下接清單的內容
    const opListValue=['html','css','js','react']
    return (
        <div>
            <h2>捕捉下拉式方塊內容</h2><hr />
            <p>目前被選取的項目:{subject}</p>
            {/* <p>目前被選擇項目:{subject}</p> */}
            <select 
            name="" 
            id=""
            value={subject}
            onChange={(e) => {
                setSubject(e.target.value);
            }} >
                {/* disabled是失能的意思 可以變成預設值但點開選項後就不能點選了 */}
                <option value="" disabled>請選擇</option>  
                {/* 使用陣列 map 方法 */}
                {
                    opList.map((item,index)=>{
                        return <option key={item} value={opListValue[index]}>{item}</option>
                    })
                }
{/* 
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JS</option>
                <option value="react">REACT</option> */}

            </select>
        </div>
    )
}

export default App 