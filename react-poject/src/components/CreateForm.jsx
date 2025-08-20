import React, { useState } from 'react'
import { Connect } from 'vite'

const CreateForm = () => {
    const[content,setContent]=useState('123')
    return (
        <form className='create-font'>
            <input 
            type="text" 
            placeholder='輸入代辦事項'
            value={content}
            onChange={(e)=>{setContent(e.target.value)}}
            />
            <button type='button'>加入</button>
            {content}
        </form>
    )
}

export default CreateForm