import React from "react";

export type BlockProps = {
    onExit: () => void;
    onEnter: () => void;
}

export default function Block(props: BlockProps) {

    const { onEnter, onExit } = props;

    return (
        <>
            <h1 className="addiction-text-60">! WTF BRO STOP !</h1>
            <h2 className="addiction-text-40">YOU ADDED THIS WEBSITE AS AN ADDICTION FOR A REASON</h2>
            <h3 className="addiction-text-30">safe yourself and leave the website now</h3>
            <button className="strong-addiction-button" onClick={onExit}>Click to exit</button>
            <button id="addiction-want-to-stay" onClick={onEnter}>pls let me enter</button>
        </>
    )
}