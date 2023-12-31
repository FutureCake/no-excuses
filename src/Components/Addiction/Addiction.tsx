import React, { Component, ReactNode } from "react";
import "./Addiction.scss";

interface AddictionData {
    url: string;
    excludedSubDomeins?: string[];
    displayName?: string;
}

interface AddictionProps extends AddictionData{
    index: number;
    onDelete?: (index: number) => void;
}

class Addiction extends Component<AddictionProps> {
    constructor(props: AddictionProps) {
        super(props);
    }

    onEdit(): void {
        
    }

    render(): ReactNode {
        return (
            <div className="addiction">
                <p>{this.props.url}</p>
                <div className="overlay">
                    <img onClick={this.onEdit} src="../../assets/app/icons/edit.png" alt="edit" />
                    <img onClick={this.props.onDelete?.bind(this, this.props.index)} src="../../assets/app/icons/delete.png" alt="delete" />
                </div>
            </div>
        )
    }
}

export default Addiction;
export type { AddictionData, AddictionProps };

