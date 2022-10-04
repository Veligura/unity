import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "@mui/material";
import {sendMessage} from "./utils";
import {Actions, publish, subscribe} from "./messages";

function App() {
    useEffect(()=>{
        //@ts-ignore
        window.sendMessage = (data: any)=> publish(data)
    },[])
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={()=>sendMessage(Actions.GET_ACCESS_TOKEN)} >Request unity side to get token</Button>
      </header>
    </div>
  );
}

export default App;
