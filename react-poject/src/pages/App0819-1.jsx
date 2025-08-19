import React from 'react'
// 建立子元件

// 直接使用props
function MyComponent(props){
    // props.c();
    return<>

    <div>Hello標準寫法</div>
    {/* 標準寫法 */}
    <div>{props.a}</div>
    <div>{props.b}</div>
    {props.c()}
    </> 
}


// 方法2物件解構 就是{物件成員}

    function MyComponent2({a,b,c}){
        // c();
    return<>

    <div>Hello簡化寫法</div>

    {/* 簡化寫法 */}
<div>{a}</div>
<div>{b}</div>
{c()}


    </> 
}




function MyComponent3({a,b="我是預設值",c}){
    // c();
    return<>

    <div>Hello簡化寫法</div>

    {/* 簡化寫法 */}
<div>{a}</div>
<div>{b}</div>
{c()}


    </> 
}


// 父元件
const App = () => {
    return (
        <>
        {/* 呼叫元件 */}
        <MyComponent a="我是屬性a" b="我是屬性b"c={()=>{console.log("123")}}/>
        <MyComponent2 a="我是屬性a" b="我是屬性b" c={()=>{console.log("456")}}/>
        <MyComponent3 a="我是屬性a" b="王曉明" c={()=>{console.log("789")}}/>
        </>
    )
}

export default App