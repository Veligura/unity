import React, {useEffect, useState} from "react";
import {Actions, subscribe} from "./messages";

import {CodeBlock, nord} from 'react-code-blocks'
import {Box, Button, CircularProgress, Typography} from "@mui/material";
import {sendMessage} from "./utils";

type Message = {
    action: string,
    payload: any
}

const webviewMessage = `message.Scheme // "uniwebview"
message.Path   // "action"
message.Args   // {"actionType": "GET_INIT_PARAMS"}
`

const text = `
webView.EvaluateJavaScript("sendMessage({action:'INIT_PARAMS', payload: {
workspaceID: "51816ca8-2a6a-45fe-a2be-cecb69cdfe7a",
sceneID: "941a4ba5-bd70-4cdf-a467-e9a22927869f",
page: "scene"
}});", 
(payload) => {
    if (payload.resultCode.Equals("0")) {
     //
    }
  });
`

export const InitParams = () => {
    const [params, setParams] = useState()

    useEffect(() => {
        subscribe(({action,payload}: Message): void => {
            if(action === Actions.INIT_PARAMS){
                setParams(payload)
            }
        })
    }, [])

    return <div>
        <Typography variant="h3">Initial Params</Typography>

        <br/>
        <Button variant={"outlined"} onClick={() => sendMessage(Actions.GET_INIT_PARAMS)}>Request the unity side to
            send initial parameters</Button>
        <br/>
        <br/>

        <Typography variant={"body1"}>
            To request access token webview sends message to the unity side via
            link <code>uniwebview://action?actionType=GET_INIT_PARAMS</code>
            <br/>
            <br/>
            UniWebView parses the input and pass it to you in the OnMessageReceived event, as the message
            parameter:
            <Box my={4}>
                <CodeBlock
                    customStyle={{width: 800}}
                    theme={nord}
                    wrapLines={true}
                    codeBlock
                    language={'js'}
                    showLineNumbers={false}
                    text={webviewMessage}
                />
            </Box>
        </Typography>

        <Box mt={4}>
            <Typography variant={"body1"}>
                To answer on this request from unity side:
            </Typography>

            <Box mb={4}>
                <Typography variant={"body1"}>
                    <CodeBlock
                        customStyle={{width: 850}}
                        theme={nord}
                        wrapLines={true}
                        codeBlock
                        language={'js'}
                        showLineNumbers={false}
                        text={text}
                    />
                </Typography>
            </Box>
            <Typography variant={"h4"}>Initial params: {params ? JSON.stringify(params) : <CircularProgress/>}</Typography>
        </Box>
    </div>


}