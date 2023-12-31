import React, { Component, ReactNode } from "react";
import { AddictionData } from "./Addiction/Addiction";

interface QuickAddAddictionProps {
    onNew: (addiction: AddictionData) => void;
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
