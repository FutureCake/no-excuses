import React, { Component, ReactNode } from "react";
import { BlockedDomain } from "./Addiction/Addiction";

interface QuickAddAddictionProps {
    onNew: (addiction: BlockedDomain) => void;
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
