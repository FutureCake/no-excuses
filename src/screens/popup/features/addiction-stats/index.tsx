import React from "react";
import useDomainStatistics from "../../../../shared/hooks/domain-statistics";
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
            <h2>{preventions.length} times you were stronger then your addiction</h2>
            <h2>You needed an average of {avgPreventionDoubtTime} seconds before leaving. The longest you were ever in doubt was {maxPreventionDoubtTime} seconds</h2>
            <h2>{failures.length} times you couldnt resist the temptation</h2>
            <h2>You only lasted an average of {avgFailureDoubtTime} seconds before succumbing to your addiction. The longest you were ever in doubt was {maxFailureDoubtTime} seconds</h2>
        </ContentSection>
    );
}