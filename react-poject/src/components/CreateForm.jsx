import { useState } from "react"


const CreateForm = () => {
    const [content, setContent] = useState('');


    return (
        <form className='create-form'>
            <input
                type="text"
                placeholder='輸入待辦事項'
                value={content}
                onChange={(e) => { setContent(e.target.value) }}
            />
            <button type="button">加入</button>
        </form>
    )
}


export default CreateForm

