import {useEffect, useState} from "react";
import {subscribe} from "./messages";

export const ViewAccessToken = ()=>{
   const [token, setToken] = useState()
    useEffect(()=>{
        subscribe(())
    })
}