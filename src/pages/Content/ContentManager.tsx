import { Root, createRoot } from "react-dom/client";
import * as uri from "uri-js";

class ContentManager {

    private root?: Root;
    // private blockedDomains: BlockedDomain[] = [];

    public async init(): Promise<void> {
        // this.blockedDomains = await chrome.runtime.sendMessage<ExtensionMessage, BlockedDomain[]>({
        //     sender: "content",
        //     recipient: "background",
        //     action: "get"
        // });

        if (this.checkUrlBlocked(window.location.href)) {
            this.setupOverlay();
        }
    }

    private checkUrlBlocked(url: string): boolean {
        const domain = uri.parse(url).host;
        console.log(domain);

        if (domain) {
            // for (let i = 0; i < this.blockedDomains.length; i++) {
            //     const blocked = this.blockedDomains[i];
            //     if (blocked.domain === domain) {
            //         return true;
            //     }
            // }
        }

        return false;
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
        // this.root?.render(<BlockedOverlay />);
    }
}

export default ContentManager;