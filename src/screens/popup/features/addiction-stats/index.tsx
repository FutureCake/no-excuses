import React from "react";
import useDomainStatistics from "../../../../shared/hooks/domain-statistics";
import "../../../../shared/styles/containers.scss";
import "../../../../shared/styles/texts.scss";
import ContentSection from "../../components/content-section";
import "./style.scss";

export type AddictionStatsProps = {
    addictionId: number;
    onClose?: () => void;
}

export default function AddictionStats(props: AddictionStatsProps) {

    const { addictionId, onClose } = props;
    const stats = useDomainStatistics(addictionId);

    if (!stats) return null;

    const { totalFailures, totalPreventions, maxFailureDoubtTime, maxPreventionDoubtTime, avgFailureDoubtTime, avgPreventionDoubtTime, name } = stats;

    return (
        <ContentSection title={`${name}'s statistics`} onClose={onClose}>
            <div className="addiction-text-18">

                {(totalFailures === 0 && totalPreventions === 0) && <p> Since you added <span>{name}</span> you havent tried to visit your addiction very good!</p>}

                {(totalPreventions > 0) && <p>
                    <span>{totalPreventions}</span> times you were stronger then your addiction.<br />
                    {(totalPreventions > 1) && <p>You needed an average of <span>{avgPreventionDoubtTime}</span> seconds before leaving. The longest you were ever in doubt was <span>{maxPreventionDoubtTime}</span> seconds</p>}
                </p>}
                {(totalFailures > 0) && <p style={{ marginTop: 15 }}>
                    <span>{totalFailures}</span> times you couldnt resist the temptation.<br />
                    {(totalFailures > 1) && <p>You only lasted an average of <span>{avgFailureDoubtTime}</span> seconds before succumbing to your addiction. The longest you were ever in doubt was <span>{maxFailureDoubtTime}</span> seconds</p>}
                </p>}
            </div>
        </ContentSection >
    );
}