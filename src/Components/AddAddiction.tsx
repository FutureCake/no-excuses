import React, { Component, ReactNode, SyntheticEvent } from "react";
import { AddictionData } from "./Addiction/Addiction";

interface AddAddictionProps {
    onNew: (addiction: AddictionData) => void;
}

class AddAddiction extends Component<AddAddictionProps> {
    
    private newUrl?: string;

    constructor(props: any) {
        super(props);
    }

    createNewAddiction(): void {

        // TODO: find better solution for this
        if(!this.newUrl) return;
        
        this.props.onNew({
            url: this.newUrl
        });
    }

    onKeyPress(event: SyntheticEvent<HTMLInputElement, KeyboardEvent>): void {

        this.newUrl = event.currentTarget.value;

        if(event.nativeEvent.key === "Enter") {
            this.createNewAddiction();
        }
    }

    render(): ReactNode {
        return (
            <div>
                <div id="add-overlay">
                    <img id="icon" src="../assets/app/icons/add.png"/>
                    <p id="title">Add addiction</p>
                </div>
                <div id="add-input">
                    <input type="text" name="url" id="url" onKeyUp={this.onKeyPress.bind(this)}/>
                    <img src="../assets/app/icons/confirm.png" alt="add" onClick={this.createNewAddiction.bind(this)}/>
                    <img src="../assets/app/icons/cancel.png" alt="cancel" />
                </div>
            </div>
        );
    }
}

export default AddAddiction;
export type { AddAddictionProps };
