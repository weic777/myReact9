import React, { useRef } from 'react'

const App = () => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    // 捲動到黃色區
    function inputFocus1() {
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";

    }
    function inputFocus2() {
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "blue";
        inputRef3.current.style.backgroundColor = "";
    }
    function inputFocus3() {
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "red";
    }


    function inputFocus(no) {
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
        if (no == 1) {
            inputRef1.current.style.backgroundColor = "yellow";
        } else if (no == 2) {
            inputRef2.current.style.backgroundColor = "blue";
        } else if (no == 3) {
            inputRef3.current.style.backgroundColor = "red";
        }
    }

    return (
        <div>
            <h1>useRef-方塊變色</h1>

            <p>文字方塊1</p>
            <input type="text" ref={inputRef1} onFocus={inputFocus1} /><br />
            <p>文字方塊2</p>
            <input type="text" ref={inputRef2} onFocus={inputFocus2} /><br />
            <p>文字方塊3</p>
            <input type="text" ref={inputRef3} onFocus={inputFocus3} /><br />

        </div>
    )
}

export default App