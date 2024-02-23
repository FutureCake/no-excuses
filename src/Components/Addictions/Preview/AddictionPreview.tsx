import React, { Component, ReactNode } from "react";
import { AddictionProps } from "../Addiction/Addiction";

type PreviewActionType = "info" | "edit" | "delete";
type AddictionSeverity = "severe" | "high" | "medium" | "low" | "barely" | "indeterminable";

interface AddictionPreviewProps extends Pick<AddictionProps, "displayName" | "lastAccess" | "blockedOn" | "allExcuses" | "totalAccessTries"> {
    onUserAction: (type: PreviewActionType) => void;
}

interface AddictionPreviewState {
    addictionLevel: AddictionSeverity;
    timeSinceLastAccess: string;
    hovering: boolean;
}

class AddictionPreview extends Component<AddictionPreviewProps, AddictionPreviewState> {
    constructor(props: AddictionPreviewProps) {
        super(props);

        this.state = {
            addictionLevel: "medium",
            timeSinceLastAccess: "5 days",
            hovering: false
        }
    }

    render(): ReactNode {
        return (
            <div className="addiction-preview">
                <h2>{this.props.displayName}</h2>
                <h3>{this.state.addictionLevel}</h3>
                <p>{this.state.timeSinceLastAccess}</p>
                <p>{this.props.blockedOn}</p>
            </div>
        );
    }
}

export default AddictionPreview;
export { PreviewActionType };
