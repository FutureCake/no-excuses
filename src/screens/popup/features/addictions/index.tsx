import React from "react";
import { useAddictionContext } from "../../contexts/addictions";
import Addiction from "./components/addiction";
import './style.scss';

export default function Addictions() {

    const addictionsCtx = useAddictionContext();

    return (
        <div id="addictions">
            <h2 id="addictions-title">Your Addictions</h2>
            {
                addictionsCtx.addictions.map((addiction, index) => (
                    <Addiction {...addiction} index={index} key={index} />
                ))
            }
        </div>
    );
}