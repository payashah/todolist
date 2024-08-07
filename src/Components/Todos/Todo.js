import React, { useState } from 'react'
import "./Todo.css"
import { AiOutlineDelete } from "react-icons/ai";
import { LiaSortSolid } from "react-icons/lia";
import DeleteAllModal from '../DeleteAllModal/DeleteAllModal';



export default function Todo({ onRemove, id, title }) {

    const [isShowDeleteTodoModal, setIsShowDeleteTodoModal] = useState(false)

    const deleteTodoHandler = (id) => {

        onRemove(id)

        setIsShowDeleteTodoModal(true)
    }

    const acceptDeleteTodo = () => {
        setIsShowDeleteTodoModal(false)

    }
    const rejectDeleteTodo = () => {
        setIsShowDeleteTodoModal(false)
    }

    return (

        <>
            <div className='todo'>
                <h1 className='todo-text'>{title}</h1>

                <div className='todo-btnBox'>
                    <button className='todo-btnBox-btn'>
                        <AiOutlineDelete className='todo-btnBox-btn-icon' onClick={() => deleteTodoHandler(id)}></AiOutlineDelete>
                    </button>
                    <button className='todo-btnBox-btn'>
                        <LiaSortSolid className='todo-btnBox-btn-icon'></LiaSortSolid>
                    </button>

                </div>
            </div>
            {/* {isShowDeleteTodoModal &&
                <DeleteAllModal
                    accept={acceptDeleteTodo} reject={rejectDeleteTodo}
                ></DeleteAllModal>} */}
        </>
    )
}
