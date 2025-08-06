import React from "react";
import useBlockedDomains from "../../hooks/domains";
import Addictions from "./features/addictions";
import NewAddiction from "./features/new-addiction";
import './style.scss';

export default function Popup() {

    const addictions = useBlockedDomains();

    return (
        <div id="popup">
            <h1 id="popup-title">Digital Addictions</h1>
            <NewAddiction />
            <Addictions addictions={addictions} />
        </div>
    )
}