import React from "react";
import "../../../../../../shared/styles/containers.scss";
import "./style.scss";

export type BlockProps = {
    onExit: () => void;
    onEnter: () => void;
    allowExcuses: boolean;
}

export default function Block(props: BlockProps) {

    const { allowExcuses, onEnter, onExit } = props;

    return (
        <div className="addiction-alert-container">
            <h1 className="addiction-text-60">! WTF BRO STOP !</h1>
            <h2 className="addiction-text-40">YOU ADDED THIS WEBSITE AS AN ADDICTION FOR A REASON</h2>
            <h3 className="addiction-text-30">safe yourself and leave the website now</h3>
            <div id="addiction-action-buttons">
                <button id="addiction-exit" className="strong-addiction-button" onClick={onExit}>Click to exit</button>
                {allowExcuses && <button className="shy-addiction-button" onClick={onEnter}>pls let me enter</button>}
            </div>
        </div>
    )
}