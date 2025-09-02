import React from 'react'

const App = () => {
    // 表格元件
    const ProdTable=()=>{
        return(
            <table>
            <tbody>
                <tr>
                    <td>產品名稱</td>
                    <td>產品圖</td>
                    <td>價格</td>
                </tr>
            </tbody>
        </table>
        )
    }

  return (
    <div className='wrap'>
        排序：
        <input type="checkbox" /><br />

        搜尋：
        <input type="text" />

        {/* 表格 */}
        <ProdTable/>
    </div>
  )
}

export default App
