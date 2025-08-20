import { useState } from 'react'
import CreateForm from './CreateForm'
import Todo from './Todo'


const TodoWrapper = () => {
    // 因為有N個todo，所以要用陣列存放
    
    const [todos, setTodos] = useState(['繳停車費', '對發票']);


    return (
        <div className='wrapper'>
            <h1>待辦事項</h1>
            <CreateForm />
            {
                todos.map((todo, index) => {
                    return <Todo todo={todo} key={index} />
                })
            }


        </div>
    )
}


export default TodoWrapper
