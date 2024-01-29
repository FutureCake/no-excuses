import React, { Component, ReactNode } from "react";
import { getDomainFromUrl } from "../Utils/helpers";
import { BlockedDomain } from "./Addiction/Addiction";

interface QuickAddAddictionProps {
    onNew: (addiction: BlockedDomain) => void;
}

interface QuickAddAddictionState {
    currentDomain?: string;
    currentPage?: string;
}

class QuickAddAddiction extends Component<QuickAddAddictionProps, QuickAddAddictionState> {
    
    constructor(props: QuickAddAddictionProps) {
        super(props);

        this.state = {
            currentDomain: undefined,
            currentPage: undefined
        }
    }

    async componentDidMount(): Promise<void> {
        const tabs = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const url = tabs[0].url;

        if(!url) return;

        this.setState({
            currentPage: url,
            currentDomain: getDomainFromUrl(url)
        });
    }

    onAdd(isDomain: boolean): void {

        if(this.state.currentDomain && this.state.currentPage) {
            this.props.onNew({
                id: Math.random() * 10000,
                url: (isDomain) ? this.state.currentDomain : this.state.currentPage
            });
        }
    }

    render(): ReactNode {
        
        if(!this.state.currentDomain) return null;

        return (
            <div>
                <div onClick={this.onAdd.bind(this, true)}>add {this.state.currentDomain}</div>
                <div onClick={this.onAdd.bind(this, false)}>
                    <p>add current page</p>
                    <p>{this.state.currentPage}</p>
                </div>
            </div>
        );
    }
}

export default QuickAddAddiction;
export type { QuickAddAddictionProps };
