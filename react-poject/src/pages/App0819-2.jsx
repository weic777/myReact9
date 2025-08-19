import React from 'react'

// 次元件
function SecondComponent({c}) {
    return <>
    <h1>我是SecondComponent元件</h1>
    <p>SecondComponent接收的屬性是:{c}</p>
    </>
    
}

function MyComponent2({b}) {
    // console.log(props)
    return (
        <>
        <h2>接收來自於主元件的傳遞</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem doloremque ex unde sunt nemo sint iste ullam itaque, commodi blanditiis fuga amet deserunt ut eligendi modi? Pariatur perspiciatis ipsam sed.</p>
        <SecondComponent c={b}/>
        我是:{b}
        </>
    )
}

// 子元件
function MyComponent({a,children}) {
    // console.log(props)
    return (
        <>
        <h2>接收來自於主元件的傳遞</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem doloremque ex unde sunt nemo sint iste ullam itaque, commodi blanditiis fuga amet deserunt ut eligendi modi? Pariatur perspiciatis ipsam sed.</p>
        {children}
        我是:{a}
        </>
    )
}





// 主元件
const App = () => {
    return (
        <div>
            <h1>元件之間傳遞元件</h1><hr />
            {/* 此方法是比較進階的方法 */}
            <MyComponent a="屬性a">
                <SecondComponent c="屬性a"/>
            </MyComponent>
            <hr />
            {/* 現階段使用此方法(逐層各自呼叫元件) */}
            <MyComponent2 b="屬性b"/>
        </div>
    )
}

export default App