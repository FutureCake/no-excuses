import React, { Component, ReactNode } from 'react';
import AddAddiction from '../../Components/AddAddiction/AddAddiction';
import { BlockedDomain } from '../../Components/Addiction/Addiction';
import Addictions from '../../Components/Addictions';
import QuickAddAddiction from '../../Components/QuickAddAddiction';
import { ExtensionMessage } from '../../Utils/types';
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
    }

    async componentDidMount(): Promise<void> {
        this.setState({
            addictions: await chrome.runtime.sendMessage<ExtensionMessage, BlockedDomain[]>({
                sender: "content",
                recipient: "background",
                action: "get"
            })
        });
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
