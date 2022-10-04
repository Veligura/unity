import {useEffect, useState} from "react";
import {subscribe} from "./messages";

import {CodeBlock, dracula} from 'react-code-blocks'

type Message = {
    action: string,
    payload: any
}

export const ViewAccessToken = () => {
    const [token, setToken] = useState()

    useEffect(() => {
        subscribe(({payload}: Message): void => setToken(payload))
    }, [])

    return <CodeBlock

        text={`void Start ()
{
    //...

    webView.OnPageFinished += (view, statusCode, url) => {
        webView.EvaluateJavaScript("startGame();", (payload)=>{
            if (payload.resultCode.Equals("0")) {
                Debug.Log("Game Started!");
            } else {
                Debug.Log("Something goes wrong: " + payload.data);
            }
        });
    };

    //...
}`}

    />


}