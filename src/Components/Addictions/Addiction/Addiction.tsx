import React, { Component, ReactNode } from "react";
import AddictionContent from "../Content/AddictionContent";
import AddictionPreview, { PreviewActionType } from "../Preview/AddictionPreview";
import "./Addiction.scss";

interface BlockedDomain {
    id: number;
    domain: string;
    blockedSubdomains?: string[];
    blockedPages?: string[];
    excludedPages?: string[];
    excludedSubdomains?: string[];
    displayName?: string;
    lastExcuse?: string;
    allExcuses?: string[];
    lastAccess?: string;
    lastPreventedAccess?: string;
    totalAccessTries?: number;
    avgTimeSpend?: string;
    avgTimeSaved?: string;
    blockedOn: string;
}

interface AddictionProps extends BlockedDomain {
    onDelete?: (id: number) => void;
}

class Addiction extends Component<AddictionProps> {
    constructor(props: AddictionProps) {
        super(props);
    }

    onPreviewEvent(type: PreviewActionType): void {

    }

    updateAddiction(): void {

    }

    render(): ReactNode {
        return (
            <div className="addiction-wrapper">
                <AddictionPreview {...this.props} onUserAction={() => { }} />
                <AddictionContent {...this.props} onModificationSave={() => { }} />
            </div>
        )
    }
}

export default Addiction;
export type { AddictionProps, BlockedDomain };

