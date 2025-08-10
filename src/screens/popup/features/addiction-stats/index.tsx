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

    return (
        <ContentSection title={`${"ok"} statistics`} onClose={onClose}>

        </ContentSection>
    );
}