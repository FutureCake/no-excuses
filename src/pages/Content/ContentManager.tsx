import React from "react";
import { Root, createRoot } from "react-dom/client";

class ContentManager {

    private root?: Root;

    constructor() {

        if (this.checkUrlBlocked(window.location.href)) {
            this.setupOverlay();
        }
    }

    private checkUrlBlocked(url: string): boolean {
        return true;
    }

    private setupOverlay(): void {
        document.addEventListener("readystatechange", () => {

            const state = document.readyState;
            if (state === "interactive" || state === "complete") {

                this.root = this.setupReactContext();
                this.renderOverlay();
            }
        });
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

    private renderOverlay(): void {
        this.root?.render(<div style={{ position: "fixed", left: 0, top: 0, zIndex: 10000000, backgroundColor: "green", width: "100vw", height: "100vh" }}></div>);
    }
}

export default ContentManager;