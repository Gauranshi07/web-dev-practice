import {useState} from 'react'
import Counter from './Counter'
import LikeButton from './LikeButton'
import Ludo from './Ludo'
import Todo from './Todo'
import Form from './Form'
// import CommentForm from './CommentForm'
import Comment from './Comment'
import './App.css'

const App = () => {
  return(
    <div className="app">
      {/* <h2>My Todo Task App</h2> */}
  {/* // <Counter/>
  // <LikeButton/>
  // <Ludo/> */}
  {/* <Todo /> */}
  {/* <CommentForm/> */}
  <Comment/>
  </div>
  )
}

export default App