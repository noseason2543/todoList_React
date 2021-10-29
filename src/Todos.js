import React from "react";

const Todos = ({todo,handleDelete}) =>{
    return (
        <div className='todo collection'>
            {todo.length ? (todo.map(d =>{
                return <div className='collection-item'   key={d.id}>
                            <span onClick={CheckMark} key={d.id}>{d.content}</span>
                            <button onClick={() =>{handleDelete(d.id)}} style={{float:'right'}}>delete</button>
                        </div>
            })):(
                <p className='center'>Your are not have todo list.</p>
            )}
        </div>
    )
}

const CheckMark = (e) =>{
    if(e.target.style.textDecoration !== 'line-through'){
        e.target.style.textDecoration = 'line-through'
    }else{
        e.target.style.textDecoration = 'none'
    }   
}

export default Todos
