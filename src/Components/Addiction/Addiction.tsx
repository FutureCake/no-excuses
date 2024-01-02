import React, { Component, ReactNode } from "react";
import del from "../../assets/app/icons/delete.png";
import edit from "../../assets/app/icons/edit.png";
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
                    <img className="icon" onClick={this.onEdit} src={edit} alt="edit" />
                    <img className="icon" onClick={this.props.onDelete?.bind(this, this.props.index)} src={del} alt="delete" />
                </div>
            </div>
        )
    }
}

export default Addiction;
export type { AddictionData, AddictionProps };

