import React, { Component, ReactNode } from 'react';
import AddAddiction from '../../Components/AddAddiction';
import { AddictionProps } from '../../Components/Addiction';
import Addictions from '../../Components/Addictions';
import QuickAddAddiction from '../../Components/QuickAddAddiction';
import { Message } from '../../Utils/types';
import './Popup.scss';

interface PopupState {
    addictions: AddictionProps[];
}

class Popup extends Component<{}, PopupState> {
    
    constructor(props: {}) {
        super(props);
        chrome.runtime.onMessage.addListener(this.onExtensionMessage);
        
        // REMOVE: for testing pruposes
        this.state = {
            addictions: [
                {url: "wwww.youtube.com"},
                {url: "wwww.netflix.com"},
                {url: "wwww.amazonprime.com"},
            ]
        }
    }

    async componentDidMount(): Promise<void> {
        this.setState({
            addictions: await chrome.storage.local.get("addictions") as AddictionProps[]
        });
    }

    onExtensionMessage(msg: Message): void {
        
    }

    onAddAddiction(addiction: AddictionProps): void {
        
    }

    onRemoveAddiction(index: number): void {
        
    }

    render(): ReactNode {
        return (
            <div id='popup'>
                <h1 id='title'>Your addictions</h1>
                <div id='addictions-manager'>
                    <Addictions addictions={[]} onRemove={this.onRemoveAddiction}/>
                    <AddAddiction onNew={this.onAddAddiction}/>
                </div>
                <QuickAddAddiction onNew={this.onAddAddiction}/>
            </div>
        );
    }
}

export default Popup;
