import React, { Component, ReactNode } from "react";

interface AddictionProps {
    url: string;
    excludedSubDomeins?: string[];
    displayName?: string;
}

class Addiction extends Component<AddictionProps> {
    constructor(props: AddictionProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div></div>
        )
    }
}

export default Addiction;
export type { AddictionProps };
