import React from "react";
import { createRoot, Root } from "react-dom/client";
import Content from "../../screens/content";

const rootId = 'no-excuses-overlay-root';
let overlayRoot: Root;

document.addEventListener("readystatechange", () => {

    const state = document.readyState;
    if (state === "complete") {

        setTimeout(() => {
            overlayRoot = setupReactContext();
            overlayRoot.render(<Content />);
        }, 100);
    }
});

function setupReactContext() {
    const app_container = document.createElement('div');
    app_container.id = rootId;
    app_container.style = 'position: fixed; z-index: 99999999999;';

    if (document.body) {
        document.body.append(app_container);
    }

    const container = document.getElementById(rootId);
    return createRoot(container!);
}