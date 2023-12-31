import React, { Component, ReactNode } from "react";
import Addiction, { AddictionData } from "./Addiction/Addiction";

interface AddictionsProps {
    addictions: AddictionData[];
    onRemove: (index: number) => void;
}

class Addictions extends Component<AddictionsProps> {
    constructor(props: AddictionsProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div id="addictions">
                {this.props.addictions.map((addiction, index) => {
                    return <Addiction url={addiction.url} index={index} onDelete={this.props.onRemove}/>
                })}
            </div>
        );
    }
}

export default Addictions;
export type { AddictionsProps };
