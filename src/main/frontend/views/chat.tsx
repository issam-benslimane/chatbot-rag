import { ChatAiService } from "Frontend/generated/endpoints";
import React, {useState} from "react";
import {Button, TextField} from "@vaadin/react-components";
import Markdown from "react-markdown";

export default function Chat() {
    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState("");

    async function send() {
        ChatAiService.ragChat(question).then(resp => {
            setResponse(resp);
        });
    }

    return (
        <div className="p-m">
            <h3>Chat Bot</h3>
            <div>
                <TextField style={{width: '80%'}} onChange={(e) => setQuestion(e.target.value)} />
                <Button theme="primary" onClick={send}>Send</Button>
                <div>
                    <Markdown>{response}</Markdown>
                </div>
            </div>
        </div>
    );
}
