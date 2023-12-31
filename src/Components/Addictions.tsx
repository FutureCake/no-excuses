import React, { Component, ReactNode } from "react";
import Addiction from "./Addiction";

interface AddictionsProps {
    addictions: AddictionsProps[];
    onRemove: (index: number) => void;
}

class Addictions extends Component<AddictionsProps> {
    constructor(props: AddictionsProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div>
                {this.props.addictions.map(() => {
                    return <Addiction url={""} />
                })}
            </div>
        );
    }
}

export default Addictions;
export type { AddictionsProps };
