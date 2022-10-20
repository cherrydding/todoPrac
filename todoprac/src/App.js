import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import todos, { addTodo, deleteTodo, updateTodo } from "./redux/modules/todos";
import Router from "./shared/Router";
import './App.css'
import {useNavigate } from "react-router-dom";


const App = () => {
  
  const [state, setState] = useState()
  const [contentState, setContentState] = useState()
  const navigator = useNavigate();
  const todosStore = useSelector((state) => state.todos); 
  const dispatch = useDispatch()
  console.log('투두',todosStore);

  const titleChange = (e) => {
   setState(e.target.value)
}

const contentChange = (e) => {
  setContentState(e.target.value)
 }

 const titleClick = (a) => {
  navigator(`/${a}`)
 }

 

  return <div>
    <Router/>
    <div className="layOut">
    <div className="form">
    <label>제목</label>
    <input type='text' name="title" placeholder="제목을 작성하세요" onChange={titleChange}></input>
    <label>내용</label>
    <input type= 'text' name="content" placeholder="내용을 작성하세요" onChange={contentChange}></input>
    <button className="formBtn" onClick={()=>{dispatch(addTodo({id:todos.length+1, title:state, content:contentState, isDone:false }))}}>추가</button>
    </div>

    <div>
      <h1 className="listName">진행중</h1>
      
      {todosStore.map((item)=>{
        if(!item.isDone) {
          return (
      <div  className="listBox">
        <div className="titleText" onClick={()=>titleClick(item.id)}>{item.title}</div>
        <p>{item.content}</p>
        <button className='btn' onClick={()=>dispatch(updateTodo(item.id))}>완료</button>
        <button className='btn' onClick={()=>{dispatch(deleteTodo(item.id))}}>삭제</button>
      </div>
          )
        } 
        
      })}
      

      <h1 className="listName">완료</h1>
      {todosStore.map((item)=>{
        if(item.isDone) {
          return (
            <div className="listBox">
            <div className="titleText">{item.title}</div>
            <p>{item.content}</p>
            <button className='btn' onClick={()=>dispatch(updateTodo(item.id))}>취소</button>
            <button className='btn'>삭제</button>
          </div>
          )
        }
      })}
     
    </div>

    </div>

  </div>;
}

export default App;