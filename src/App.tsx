import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Typography} from "@mui/material";
import {sendMessage} from "./utils";
import {Actions, publish, subscribe} from "./messages";
import {ViewAccessToken} from "./ViewAccessToken";

function App() {
    useEffect(()=>{
        //@ts-ignore
        window.sendMessage = (data: any)=> publish(data)
    },[])
  return (
    <div className="App">
      <header className="App-header">
          <Typography variant="h1">Access token</Typography>
        <Button onClick={()=>sendMessage(Actions.GET_ACCESS_TOKEN)} >Request unity side to get token</Button>
          <ViewAccessToken />
      </header>
    </div>
  );
}

export default App;
