import React, { Component, ReactNode } from "react";
import { BlockedDomain } from "../Addiction/Addiction";

interface AddictionContentProps extends BlockedDomain {
    onModificationSave: (index: number) => void;
}

class AddictionContent extends Component<AddictionContentProps> {

    constructor(props: AddictionContentProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div></div>
        );
    }
}

export default AddictionContent;
export type { AddictionContentProps };
