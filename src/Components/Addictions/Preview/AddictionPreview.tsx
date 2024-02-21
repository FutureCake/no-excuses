import React, { Component, ReactNode } from "react";
import { AddictionProps } from "../Addiction/Addiction";

type PreviewActionType = "info" | "edit" | "delete";

interface AddictionPreviewProps extends Pick<AddictionProps, "displayName" | "lastAccess" | "blockedOn" | "allExcuses" | "totalAccessTries"> {
    onUserAction: (type: PreviewActionType) => void;
}

class AddictionPreview extends Component<AddictionPreviewProps> {
    constructor(props: AddictionPreviewProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div className="addiction-preview">

            </div>
        );
    }
}

export default AddictionPreview;
export { PreviewActionType };
