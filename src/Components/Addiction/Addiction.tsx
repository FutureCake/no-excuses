import React, { Component, ReactNode } from "react";
import blocked from "../../assets/app/icons/blocked.png";
import del from "../../assets/app/icons/delete.png";
import edit from "../../assets/app/icons/edit.png";
import "./Addiction.scss";

interface BlockedDomain {
    id: number;
    url: string;
    excludedSubDomains?: string[];
    displayName?: string;
}

interface AddictionProps extends BlockedDomain{
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
                <img className="icon" src={blocked}/>
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
export type { AddictionProps, BlockedDomain };

