import React, { Component, ReactNode } from 'react';
import AddAddiction from '../../Components/AddAddiction/AddAddiction';
import { AddictionData } from '../../Components/Addiction/Addiction';
import Addictions from '../../Components/Addictions';
import QuickAddAddiction from '../../Components/QuickAddAddiction';
import { Message } from '../../Utils/types';
import './Popup.scss';

interface PopupState {
    addictions: AddictionData[];
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
                {url: "wwww.amazonvideo.com"},
            ]
        }
    }

    async componentDidMount(): Promise<void> {
        // this.setState({
        //     addictions: await chrome.storage.local.get("addictions") as AddictionProps[]
        // });
    }

    onExtensionMessage(msg: Message): void {
        
    }

    onAddAddiction(addiction: AddictionData): void {
        this.setState((prev) => {
            // CHECK: is it bad to modify an readonly array inplace?
            prev.addictions.push(addiction);
            return {
                addictions: prev.addictions
            }
        });
    }

    onRemoveAddiction(index: number): void {
        
        this.setState((prev) => {
            // CHECK: is it bad to modify an readonly array inplace?
            prev.addictions.splice(index, 1);
            
            return {
                addictions: prev.addictions
            }
        });
    }

    render(): ReactNode {
        return (
            <div id='popup'>
                <h1 id='title'>Your addictions</h1>
                <div id='addictions-manager'>
                    <Addictions addictions={this.state.addictions} onRemove={this.onRemoveAddiction.bind(this)}/>
                    <AddAddiction onNew={this.onAddAddiction.bind(this)}/>
                </div>
                <QuickAddAddiction onNew={this.onAddAddiction.bind(this)}/>
            </div>
        );
    }
}

export default Popup;
