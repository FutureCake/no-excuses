import React, { Component, ReactNode } from "react";
import { AddictionProps } from "./Addiction";

interface QuickAddAddictionProps {
    onNew: (addiction: AddictionProps) => void;
}

class QuickAddAddiction extends Component<QuickAddAddictionProps> {
    
    constructor(props: QuickAddAddictionProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div>

            </div>
        );
    }
}

export default QuickAddAddiction;
export type { QuickAddAddictionProps };
