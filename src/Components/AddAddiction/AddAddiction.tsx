import React, { Component, ReactNode, SyntheticEvent } from "react";
import add from "../../assets/app/icons/add.png";
import cancel from "../../assets/app/icons/cancel.png";
import confirm from "../../assets/app/icons/confirm.png";
import { BlockedDomain } from "../Addiction/Addiction";
import "./AddAddiction.scss";

interface AddAddictionProps {
    onNew: (addiction: BlockedDomain) => void;
}

interface AddAddictionState {
    adding: boolean;
}

class AddAddiction extends Component<AddAddictionProps, AddAddictionState> {

    private newUrl?: string;

    constructor(props: any) {
        super(props);

        this.state = {
            adding: false
        }
    }

    onAdd(): void {
        this.setState((prev) => {
            return {
                adding: !prev.adding
            }
        });
    }

    createNewAddiction(): void {

        // TODO: find better solution for this
        if (!this.newUrl) return;

        this.props.onNew({
            url: this.newUrl
        });

        this.onAdd();
    }

    cancelNewAddiction(): void {
        this.newUrl = undefined;
        this.setState((prev) => {
            return {
                adding: !prev.adding
            }
        })
    }

    onKeyPress(event: SyntheticEvent<HTMLInputElement, KeyboardEvent>): void {

        const url = event.currentTarget.value;
        // this.getValidUrl()
        this.newUrl = url;

        if (event.nativeEvent.key === "Enter") {
            this.createNewAddiction();
        }
    }

    render(): ReactNode {
        return (
            <div id="add-addiction">
                {this.state.adding && <div id="add-input">
                    <input type="text" name="url" id="url" placeholder="wwww.youtube.com or just youtube" onKeyUp={this.onKeyPress.bind(this)} />
                    <img className="icon" src={confirm} alt="add" onClick={this.createNewAddiction.bind(this)} />
                    <img className="icon" src={cancel} alt="cancel" onClick={this.cancelNewAddiction.bind(this)} />
                </div>}
                {!this.state.adding && <div id="add-overlay" onClick={this.onAdd.bind(this)}>
                    <img className="icon" id="icon" src={add} />
                    <p>Add addiction</p>
                </div>}
            </div>
        );
    }
}

export default AddAddiction;
export type { AddAddictionProps };
