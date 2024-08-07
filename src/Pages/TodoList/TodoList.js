
import React, { useState } from 'react'
import "./TodoList.css"
import Todo from '../../Components/Todos/Todo'
import DeleteAllModal from '../../Components/DeleteAllModal/DeleteAllModal'


export default function TodoList() {

    const [todos, setTodos] = useState([])
    const [todoTitle, setTodoTitle] = useState("")
    const [isShowDeleteAllModal, setIsShowDeleteAllModal] = useState(false)
    const [isDisableSubmit, setIsDisableSubmit] = useState(false)


    const todoTitleHandler = (event) => {
        setTodoTitle(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()

        let newTodo = {
            id: todos.length + 1,
            title: todoTitle
        }
        setTodos(prevState => {
            return [...prevState, newTodo]
        })
        setTodoTitle("")
    }


    const deleteAllModalHandler = (event) => {
        event.preventDefault()
        setIsShowDeleteAllModal(true)
    }

    const removeTodo = (todoId) => {
        let newListAfterRemove = todos.filter(todo => {
            return todo.id !== todoId
        })

        setTodos(newListAfterRemove)

    }

    const acceptDeleteAll = () => {
        setIsShowDeleteAllModal(false)
        setTodos([])
    }
    const rejectDeleteAll = () => {
        setIsShowDeleteAllModal(false)
    }




    return (
        <>
            <form className='todoList-ctrl'>
                <div className='todoList'>
                    <input className='todoList-input' type="text" placeholder='New Todo ...'
                        maxLength="40" value={todoTitle} onChange={todoTitleHandler}
                    />
                    {
                        todoTitle.length !== 0 ? (<button className='todoList-btn' onClick={submitHandler} >Submit</button>)
                            : (<button className='todoList-btn' onClick={submitHandler} disabled style={{ color: "gray" }}>Submit</button>)
                    }
                    <button className='todoList-btn' onClick={deleteAllModalHandler}  >Delete All</button>
                </div>

            </form>


            <div className='todolist-item'>
                {todos.map(todo => (
                    <Todo key={todo.id} {...todo} onRemove={removeTodo}></Todo>
                ))}


            </div>
            {isShowDeleteAllModal &&
                <DeleteAllModal
                    accept={acceptDeleteAll} reject={rejectDeleteAll}
                ></DeleteAllModal>}
        </>
    )
}
