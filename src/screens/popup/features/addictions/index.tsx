import React from "react";
import "../../../../shared/styles/texts.scss";
import { BlockedDomain } from "../../../../shared/types/types";
import ContentSection from "../../components/content-section";
import Addiction from "./components/addiction";
import './style.scss';

export type AddictionsProps = {
    addictions: BlockedDomain[];
    onEditAddiction?: (addictionId: number) => void;
    onRemoveAddiction?: (addictionId: number) => void;
    onShowAddictionStats?: (addictionId: number) => void;
}

export default function Addictions(props: AddictionsProps) {

    const { addictions, onEditAddiction, onRemoveAddiction, onShowAddictionStats } = props;

    return (
        <ContentSection title="Your addictions">
            {
                (addictions.length > 0)
                    ? addictions.map((addiction, index) => (
                        <Addiction
                            {...addiction}
                            onEdit={onEditAddiction}
                            onStats={onShowAddictionStats}
                            onRemove={onRemoveAddiction}
                            key={index}
                        />
                    ))
                    : <p className="addiction-text-18" id="no-addictions">You dont have any addictions yet.<br />Add one above or do it directly from the website</p>
            }
        </ContentSection>
    );
}