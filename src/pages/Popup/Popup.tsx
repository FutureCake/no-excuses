import React, { Component, ReactNode } from 'react';
import AddAddiction from '../../Components/AddAddiction/AddAddiction';
import { BlockedDomain } from '../../Components/Addiction/Addiction';
import Addictions from '../../Components/Addictions';
import QuickAddAddiction from '../../Components/QuickAddAddiction';
import { Message, PopupMessage, ReplyMessage } from '../../Utils/types';
import './Popup.scss';

interface PopupState {
    addictions: BlockedDomain[];
}

class Popup extends Component<{}, PopupState> {
    
    constructor(props: {}) {
        super(props);

        this.state = {
            addictions: []
        }

        chrome.runtime.onMessage.addListener(this.onExtensionMessage);
    }

    async componentDidMount(): Promise<void> {
        chrome.runtime.sendMessage<PopupMessage, ReplyMessage<BlockedDomain[]>>({
            message: "default domains",
            sender: "popup",
            action: "set",
            domains: [
                {id: 0, url: "wwww.youtube.com"},
                {id: 1, url: "wwww.netflix.com"},
                {id: 2, url: "wwww.amazonvideo.com"}
            ],
        }, (msg) => {
            
            console.log(msg);
            if(!msg.data) return;
            
            console.log("set blocked domains");
            this.setState({
                addictions: msg.data
            });
        });
    }

    onExtensionMessage(msg: Message): void {
        
    }

    onAddAddiction(addiction: BlockedDomain): void {
        this.setState((prev) => {
            // CHECK: is it bad to modify an readonly array inplace?
            prev.addictions.push(addiction);
            return {
                addictions: prev.addictions
            }
        });
    }

    onRemoveAddiction(id: number): void {
        this.setState((prev) => {

            const filtered = prev.addictions.filter((addiction) => {
                return addiction.id != id;
            });

            return {
                addictions: filtered
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
