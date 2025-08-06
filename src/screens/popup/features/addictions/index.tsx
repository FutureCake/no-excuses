import React from "react";
import { BlockedDomain } from "../../../../utils/types";
import Addiction from "./components/addiction";
import './style.scss';

export type AddictionsProps = {
    addictions: BlockedDomain[] | undefined;
}

export default function Addictions(props: AddictionsProps) {

    const { addictions } = props;

    return (
        <div id="addictions">
            <h2 id="addictions-title">Your Addictions</h2>
            {
                (addictions !== undefined)
                    ? addictions.map((addiction, index) => (
                        <Addiction {...addiction} index={index} key={index} />
                    ))
                    : <p>Failed to load your addictions :(</p>
            }
        </div>
    );
}