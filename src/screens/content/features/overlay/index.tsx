import React, { useState } from "react";
import { updateBlockedDomain } from "../../../../shared/services/storage";
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
    const blockStarted = new Date().getTime();

    const exit = () => {

        const now = new Date().getTime();
        const doubtingFor = now - blockStarted;

        updateBlockedDomain(addictionId, (current) => ({
            ...current,
            preventions: [...current.preventions, {
                datetime: new Date().toISOString(),
                doubtingFor
            }]
        }));

        chrome.runtime.sendMessage<ExtensionMessage<number>>({
            action: "close-tab",
            sender: "content",
            recipient: "background"
        });
    }

    const enter = (excuse: string) => {
        onRemove();

        const now = new Date().getTime();
        const doubtingFor = now - blockStarted;

        updateBlockedDomain(addictionId, (current) => ({
            ...current,
            failures: [...current.failures, {
                datetime: new Date().toISOString(),
                reason: excuse,
                doubtingFor
            }]
        }));
    }

    return (
        <div id="addiction-prevention-overlay">
            {showExcuse
                ? <Excuse onExit={exit} onEnter={enter} />
                : <Block onExit={exit} onEnter={() => setShowExcuse(true)} allowExcuses={allowExcuses} />
            }
        </div>
    )
}