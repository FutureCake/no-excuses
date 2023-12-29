import React, { ReactNode } from "react";
import { Root, createRoot } from "react-dom/client";
import { OnUrlMatched } from "../../Utils/types";

class ContentManager {

    private root?: Root;

    constructor() {
        console.log("init");
        if (window.location.href.indexOf("www.netflix") !== -1) {
            console.log("match");
            document.addEventListener("readystatechange", () => {
                console.log("change: ", document.readyState);
                const state = document.readyState;
                if (state === "interactive" || state === "complete") {
                    console.log("render");
                    this.root = this.setupReactContext();
                    this.onMessage();
                }
            });
        }
    }

    private onMessage(msg?: OnUrlMatched): void {
        console.log("matched matched matched");
        this.renderContent(<div style={{ position: "fixed", left: 0, top: 0, zIndex: 10000000, backgroundColor: "green", width: "100vw", height: "100vh" }}></div>);
    }

    private setupReactContext(): Root {
        const app_container = document.createElement('div');
        app_container.id = 'react-root'

        if (document.body) {
            document.body.append(app_container);
        }

        const container = document.getElementById('react-root');
        return createRoot(container!);
    }

    private renderContent(content: ReactNode): void {
        this.root?.render(content);
    }
}

export default ContentManager;