import React from "react";
import AddictionsProvider from "./contexts/addictions";
import Addictions from "./features/addictions";
import NewAddiction from "./features/new-addiction";
import getAddictions from "./hooks/get-addictions";
import './style.scss';

export default function Popup() {

    const addictions = getAddictions();
    console.log("hook addictions: ", addictions);

    return (
        <AddictionsProvider addictions={addictions}>
            <div id="popup">
                <h1 id="popup-title">Digital Addictions</h1>
                <NewAddiction />
                <Addictions />
            </div>
        </AddictionsProvider>
    )
}