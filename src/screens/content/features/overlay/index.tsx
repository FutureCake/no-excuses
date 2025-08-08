import React, { useState } from "react";
import { ExtensionMessage } from "../../../../utils/types";
import "./style.scss";

export type OverlayProps = {
    addictionId: number;
    onExit?: () => void;
}

export default function Overlay(props: OverlayProps) {

    const { addictionId, onExit } = props;
    const [showExcuse, setShowExcuse] = useState<boolean>(false);
    const [excuse, setExcuse] = useState<string>();

    const exit = () => {
        chrome.runtime.sendMessage<ExtensionMessage<number>>({
            action: "close-tab",
            sender: "content",
            recipient: "background",
            data: addictionId
        });
    }

    return (
        <div id="addiction-prevention-overlay">
            {showExcuse
                ? (
                    <>
                        <h1 className="addiction-message" id="addiction-prevention-title">REALLY!?!?...</h1>
                        <h2 className="addiction-message" id="addiction-prevention-title">YOU WEAK TODAY</h2>
                        <h3 className="addiction-message" id="addiction-prevention-suggestion">At least provide me a good reason before I let you enter</h3>
                        <input onChange={(e) => setExcuse(e.target.value)} value={excuse} type="text" placeholder='Your fake "good" reason'></input>
                        {(excuse !== undefined && excuse.length > 2) && <button onClick={onExit}>enter... </button>}
                    </>
                ) : (
                    <>
                        <h1 className="addiction-message" id="addiction-prevention-title">! WTF BRO STOP !</h1>
                        <h2 className="addiction-message" id="addiction-prevention-subtitle">YOU ADDED THIS WEBSITE AS AN ADDICTION FOR A REASON</h2>
                        <h3 className="addiction-message" id="addiction-prevention-suggestion">safe yourself and leave the website now</h3>
                        <button id="addiction-prevention-action" onClick={exit}>Click to exit</button>
                        <button id="addiction-want-to-stay" onClick={() => setShowExcuse(true)}>pls let me enter</button>
                    </>
                )}

        </div>
    )
}