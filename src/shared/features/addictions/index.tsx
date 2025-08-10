import React from "react";
import { BlockedDomain } from "../../types/types";
import Addiction from "./components/addiction";
import './style.scss';

export type AddictionsProps = {
    addictions: BlockedDomain[] | undefined;
    onEditAddiction?: (addictionId: number) => void;
    onRemoveAddiction?: (addictionId: number) => void;
    onShowAddictionStats?: (addictionId: number) => void;
}

export default function Addictions(props: AddictionsProps) {

    const { addictions, onEditAddiction, onRemoveAddiction, onShowAddictionStats } = props;

    return (
        <div id="addictions">
            <h2 id="addictions-title">Your Addictions</h2>
            {
                (addictions !== undefined)
                    ? addictions.map((addiction, index) => (
                        <Addiction
                            {...addiction}
                            onEdit={onEditAddiction}
                            onStats={onShowAddictionStats}
                            onRemove={onRemoveAddiction}
                            key={index}
                        />
                    ))
                    : <p>Failed to load your addictions :(</p>
            }
        </div>
    );
}