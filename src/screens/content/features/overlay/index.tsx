import React from "react";
import { ExtensionMessage } from "../../../../utils/types";
import "./style.scss";

export default function Overlay() {

    const exit = () => {
        chrome.runtime.sendMessage<ExtensionMessage>({
            action: "close-tab",
            sender: "content",
            recipient: "background"
        });
    }

    return (
        <div id="addiction-prevention-overlay">
            <h1 id="addiction-prevention-title">! WTF BRO STOP !</h1>
            <button onClick={exit}>Leave website</button>
        </div>
    )
}