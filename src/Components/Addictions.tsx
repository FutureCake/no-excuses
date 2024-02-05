import React, { Component, ReactNode } from "react";
import Addiction, { BlockedDomain } from "./Addiction/Addiction";

interface AddictionsProps {
    addictions: BlockedDomain[];
    onRemove: (index: number) => void;
}

class Addictions extends Component<AddictionsProps> {
    constructor(props: AddictionsProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div id="addictions">
                {this.props.addictions.map((addiction) => {
                    return <Addiction domain={addiction.domain} id={addiction.id} onDelete={this.props.onRemove}/>
                })}
            </div>
        );
    }
}

export default Addictions;
export type { AddictionsProps };
