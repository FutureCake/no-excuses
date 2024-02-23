import React, { Component, ReactNode } from "react";
import { BlockedDomain } from "../Addiction/Addiction";

interface AddictionContentProps extends BlockedDomain {
    onModificationSave: (index: number, changes: Partial<BlockedDomain>) => void;
    editMode: boolean;
}

interface AddictionContentState {
    editMode: boolean;
}

class AddictionContent extends Component<AddictionContentProps, AddictionContentState> {

    constructor(props: AddictionContentProps) {
        super(props);

        this.state = {
            editMode: props.editMode
        }
    }

    render(): ReactNode {
        return (
            <div style={{ "height": "100px", background: "red" }}></div>
        );
    }
}

export default AddictionContent;
export type { AddictionContentProps };
