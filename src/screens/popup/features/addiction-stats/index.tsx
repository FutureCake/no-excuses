import React from "react";
import useDomainStatistics from "../../../../shared/hooks/domain-statistics";
import "../../../../shared/styles/containers.scss";
import "../../../../shared/styles/texts.scss";
import ContentSection from "../../components/content-section";

export type AddictionStatsProps = {
    addictionId: number;
    onClose?: () => void;
}

export default function AddictionStats(props: AddictionStatsProps) {

    const { addictionId, onClose } = props;
    const stats = useDomainStatistics(addictionId);

    if (!stats) return null;

    const { failures, preventions, maxFailureDoubtTime, maxPreventionDoubtTime, avgFailureDoubtTime, avgPreventionDoubtTime, name } = stats;

    return (
        <ContentSection title={`${name}'s statistics`} onClose={onClose}>
            <div className="addiction-content-container">
                <p className="addiction-text-18">
                    <span>{preventions.length}</span> times you were stronger then your addiction<br />
                    You needed an average of {avgPreventionDoubtTime} seconds before leaving. The longest you were ever in doubt was {maxPreventionDoubtTime} seconds<br /><br />
                    <span>{failures.length}</span> times you couldnt resist the temptation<br />
                    You only lasted an average of {avgFailureDoubtTime} seconds before succumbing to your addiction. The longest you were ever in doubt was {maxFailureDoubtTime} seconds
                </p>
            </div>
        </ContentSection>
    );
}