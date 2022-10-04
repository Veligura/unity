import {Box, Button, Typography} from "@mui/material";
import {sendMessage} from "./utils";
import {Actions} from "./messages";
import React from "react";
import {CodeBlock, nord} from "react-code-blocks";


const webviewMessage = `message.Scheme // "uniwebview"
message.Path   // "action"
message.Args   // {"actionType": "BACK_PROJECT_LIST"}
`

export const ToProjectList = () => {
    return <Box>
        <Typography variant="h3">To Project List</Typography>
        <br/>
        <Button variant={"outlined"} onClick={() => sendMessage(Actions.BACK_PROJECT_LIST)}>To product list</Button>
        <br/>
        <br/>
        <Typography variant={"body1"}>
            To request access token webview sends message to the unity side via
            link <code>uniwebview://action?actionType=BACK_PROJECT_LIST</code>
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
    </Box>

}