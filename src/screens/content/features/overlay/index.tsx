import React, { useState } from "react";
import "../../../../shared/styles/buttons.scss";
import "../../../../shared/styles/texts.scss";
import { ExtensionMessage } from "../../../../shared/types/types";
import Block from "./components/block";
import Excuse from "./components/excuse";
import "./style.scss";

export type OverlayProps = {
    allowExcuses: boolean;
    addictionId: number;
    onRemove: () => void;
}

export default function Overlay(props: OverlayProps) {

    const { addictionId, allowExcuses, onRemove } = props;
    const [showExcuse, setShowExcuse] = useState<boolean>(false);

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
                ? <Excuse onExit={exit} onEnter={onRemove} />
                : <Block onExit={exit} onEnter={() => setShowExcuse(true)} allowExcuses={allowExcuses} />
            }
        </div>
    )
}