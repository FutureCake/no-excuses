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

interface AddictionState {
    openContent: boolean;
    editContent: boolean;
}

class Addiction extends Component<AddictionProps, AddictionState> {
    constructor(props: AddictionProps) {
        super(props);

        this.state = {
            openContent: false,
            editContent: false
        }
    }

    onPreviewEvent(type: PreviewActionType): void {
        if (type === "info") {
            this.setState((prev) => {
                return {
                    openContent: !prev.openContent
                }
            });
        }
    }

    updateAddiction(index: number, changes: Partial<BlockedDomain>): void {

    }

    render(): ReactNode {
        return (
            <div className="addiction-wrapper">
                <AddictionPreview {...this.props} onUserAction={this.onPreviewEvent.bind(this)} />
                {this.state.openContent && <AddictionContent {...this.props} editMode={this.state.editContent} onModificationSave={this.updateAddiction.bind(this)} />}
            </div>
        )
    }
}

export default Addiction;
export type { AddictionProps, BlockedDomain };

