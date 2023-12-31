import React, { Component, ReactNode } from "react";
import { AddictionProps } from "./Addiction";

interface AddAddictionProps {
    onNew: (addiction: AddictionProps) => void;
}

class AddAddiction extends Component<AddAddictionProps> {
    
    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div>

            </div>
        );
    }
}

export default AddAddiction;
export type { AddAddictionProps };
