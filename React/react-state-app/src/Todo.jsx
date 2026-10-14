import "./Todo.css"
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
    // const [list,setList]=useState([]);
    const [newTodo,setNewTodo]=useState("")
    const [list,setList]=useState([{task:"sample-task", id: uuidv4(), isDone:false}])

    function addTask(){
        setList((currList)=>{
            return [...currList, {task: newTodo ,id:uuidv4(), isDone:false}]
        })
        setNewTodo("");
    }
    function updateTodo(event){
        setNewTodo(event.target.value);
    }
    function deleteTodo(id){
        setList((prevTodo)=>(list.filter((prevTodo)=>prevTodo.id != id)))
    }
    // function upperCaseTodo(){
    //     setList((todos)=>
    //     todos.map((todo)=>{
    //         return{
    //             ...todo,
    //         task: todo.task.toUpperCase(),
    //         };
    //     })
    // )
    // }

    // function upperCaseOne(id){
    //     setList((todos)=>
    //         todos.map((todo)=>{
    //             if (todo.id == id){
    //                 return{
    //                     ...todo,
    //                     task: todo.task.toUpperCase(),
    //                 };
    //             }
    //             else{
    //                 return todo;
    //             }
    //         })
    //     )
    // }


    function markDoneAll(){
        setList((todos)=>
            todos.map((todo)=>{
                return{
                    ...todo,
                    isDone: true,
                }
            // console.log(todo)
            })
        )
    }

    function markDoneOne(id){
        setList((todos)=>
            todos.map((todo)=>{
                if(todo.id == id){
                return{
                    ...todo,
                    isDone: true,
                }
            
        }
            // console.log(todo)
            })
        )
    }

  return (
    <div className="mytodo">
    <div className="todo">
        <input placeholder="Enter your Task" type="text" value={newTodo} onChange={updateTodo}/>
        <button onClick={addTask}>Add a Task</button>
        
    </div>
    <div className="updateTask">
        <div>
        <h1>Tasks to do</h1>
        <ul>
            {
            list.map((todo)=>(
                <li key={todo.id}><span style={todo.isDone ? {textDecorationLine:"line-through"}: {textDecoration:"none"}}>{todo.task}</span>
                &nbsp;&nbsp;
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>&nbsp;
                <button onClick={()=>markDoneOne(todo.id)}>Done</button>
                </li>
            ))
        }
        </ul>
        </div>
        <br></br><br></br><br></br><br></br>
        <div>
        <button onClick={markDoneAll} style={{width:"150px",height:"40px",fontSize:"14px"}}>Mark as Done All</button>
        </div>
    </div>
    </div>
  )
}

export default Todo