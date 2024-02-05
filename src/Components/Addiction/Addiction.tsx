import React, { Component, ReactNode } from "react";
import blocked from "../../assets/app/icons/blocked.png";
import del from "../../assets/app/icons/delete.png";
import edit from "../../assets/app/icons/edit.png";
import "./Addiction.scss";

interface BlockedDomain {
    id: number;
    domain: string;
    excludedSubDomains?: string[];
    displayName?: string;
    BlockOnlySpecificPages?: string[];
}

interface AddictionProps extends BlockedDomain {
    onDelete?: (id: number) => void;
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
                <p>{this.props.domain}</p>
                <div className="overlay">
                    <img className="icon" onClick={this.onEdit} src={edit} alt="edit" />
                    <img className="icon" onClick={this.props.onDelete?.bind(this, this.props.id)} src={del} alt="delete" />
                </div>
            </div>
        )
    }
}

export default Addiction;
export type { AddictionProps, BlockedDomain };

