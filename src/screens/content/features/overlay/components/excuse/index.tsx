import React, { useState } from "react";
import '../../../../../../shared/styles/inputs.scss';
import './style.scss';

export type ExcuseProps = {
    onExit: () => void;
    onEnter: (reason: string) => void;
}

export default function Excuse(props: ExcuseProps) {

    const { onEnter, onExit } = props;
    const [excuse, setExcuse] = useState<string>();

    return (
        <div className="addiction-alert-container">
            <h1 className="addiction-text-60">REALLY !?!?<br />YOU WEAK TODAY...</h1>
            <h3 className="addiction-text-30 addiction-text-spacing">At least provide me a good reason before I let you enter</h3>

            <input className="addiction-text-input-20" id="addiction-excuse-input" onChange={(e) => setExcuse(e.target.value)} value={excuse} type="text" placeholder='Your "good" reason'></input>
            {(excuse !== undefined && excuse.length > 2) && <button className="addiction-button-20" onClick={() => onEnter(excuse)}>enter... </button>}

            <h3 className="addiction-text-30 addiction-text-spacing">You're right this is dumb...</h3>
            <button className="addiction-button-20" onClick={onExit}>Leave now</button>
        </div>
    );
}