import React, { Component, ReactNode } from "react";
import Addiction, { BlockedDomain } from "../Addiction/Addiction";

interface AddictionsListProps {
    addictions: BlockedDomain[];
}

class AddictionsList extends Component<AddictionsListProps> {
    constructor(props: AddictionsListProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div id="addictions">
                {this.props.addictions.map((addiction) => {
                    return <Addiction {...addiction} />
                })}
            </div>
        );
    }
}

export default AddictionsList;
export type { AddictionsListProps };
