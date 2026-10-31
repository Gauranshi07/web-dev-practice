import React from 'react'
import Lottery from './Lottery'
import {sum} from './helper'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import MinorProject from './minor-project/MinorProject';
import "./App.css"


const App = () => {
  // function winCondition(ticket){
  //   return ticket.every((num)=> num==ticket[0]);
  // }
  // return (
  //   <div>
  //     <Lottery n={3} winCondition={winCondition}/>
  //   </div>
  // )

  // function handleButton(){
  //   console.log("Button was Clicked");
  // }
  // return(
  //   <>
  //   {/* <h1>Material UI Components</h1>
  //   <Button variant="contained" onClick={handleButton}>Click Me</Button><br></br><br></br>
  //   <Button variant="contained" onClick={handleButton}  startIcon={<DeleteIcon />} color="success">Click Me to delete</Button>
  //   <Alert severity="error" color='error'>
  //   Delete option is given.
  //   </Alert> */}


  //   </>
  // )

  return(
    <div className="App">
      <MinorProject/>
    </div>
  )

}

export default App