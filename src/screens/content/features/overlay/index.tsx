import React from "react";
import { ExtensionMessage } from "../../../../utils/types";
import "./style.scss";

export type OverlayProps = {
    addictionId: number;
}

export default function Overlay(props: OverlayProps) {

    const { addictionId } = props

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
            <h1 className="addiction-message" id="addiction-prevention-title">! WTF BRO STOP !</h1>
            <h2 className="addiction-message" id="addiction-prevention-subtitle">YOU ADDED THIS WEBSITE AS AN ADDICTION FOR A REASON</h2>
            <h3 className="addiction-message" id="addiction-prevention-suggestion">safe yourself and leave the website now</h3>
            <button id="addiction-prevention-action" onClick={exit}>Click to exit</button>
        </div>
    )
}