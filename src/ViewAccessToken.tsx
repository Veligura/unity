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
message.Args   // {"actionType": "GET_ACCESS_TOKEN"}
`

const text = `
webView.EvaluateJavaScript("sendMessage({action:'ACCESS_TOKEN', payload: 'eyJhbG....'});", 
(payload) => {
    if (payload.resultCode.Equals("0")) {
     //
    }
  });
`

export const ViewAccessToken = () => {
    const [token, setToken] = useState()

    useEffect(() => {
        subscribe(({action, payload}: Message): void => {
            if (action === Actions.ACCESS_TOKEN) {
                setToken(payload)
            }
        })
    }, [])

    return <div>
        <Typography variant="h3">Access Token</Typography>

        <br/>
        <Button variant={"outlined"} onClick={() => sendMessage(Actions.GET_ACCESS_TOKEN)}>Request the unity side to
            send access token</Button>
        <br/>
        <br/>

        <Typography variant={"body1"}>
            To request access token webview sends message to the unity side via
            link <code>uniwebview://action?actionType=GET_ACCESS_TOKEN</code>
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
            <Typography variant={"h4"}>Token: {token ? JSON.stringify(token) : <CircularProgress/>}</Typography>
        </Box>
    </div>


}