import React, { useState } from 'react'
import "./Todo.css"
import { AiOutlineDelete } from "react-icons/ai";
import { LiaSortSolid } from "react-icons/lia";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";



export default function Todo({ onRemove, up, down, id, title }) {


    const deleteTodoHandler = (id) => {

        onRemove(id)

    }

    const upHandler = (id) => {
        up(id)
    }
    const downHandler = (id) => {
        down(id)
    }


    return (

        <>
            <div className='todo'>
                <h1 className='todo-text'>{title}</h1>

                <div className='todo-btnBox'>
                    <button className='todo-btnBox-btn'>
                        <AiOutlineDelete className='todo-btnBox-btn-icon delete' onClick={() => deleteTodoHandler(id)}></AiOutlineDelete>
                    </button>
                    <button className='todo-btnBox-btn'>
                        <AiOutlineArrowUp className='todo-btnBox-btn-icon up' onClick={() => upHandler(id)}></AiOutlineArrowUp>
                        <AiOutlineArrowDown className='todo-btnBox-btn-icon down' onClick={() => downHandler(id)}></AiOutlineArrowDown>
                    </button>

                </div>
            </div>

        </>
    )
}
