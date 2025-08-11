import { BlockedDomain, DomainStatistics } from "../types/types";

export default function extractStatistics(domain: BlockedDomain): DomainStatistics {

    const { preventions, failures, name } = domain;

    const avgFailureDoubtTime = failures.reduce((acc, current) => {
        return acc + current.doubtingFor
    }, 0) / failures.length / 1000;

    const maxFailureDoubtTime = failures.reduce((prev, current) => {
        return prev > current.doubtingFor ? prev : current.doubtingFor
    }, 0) / 1000;

    const avgPreventionDoubtTime = preventions.reduce((acc, current) => {
        return acc + current.doubtingFor
    }, 0) / preventions.length / 1000;

    const maxPreventionDoubtTime = preventions.reduce((prev, current) => {
        return prev > current.doubtingFor ? prev : current.doubtingFor
    }, 0) / 1000;

    return {
        preventions,
        avgFailureDoubtTime,
        avgPreventionDoubtTime,
        maxFailureDoubtTime,
        maxPreventionDoubtTime,
        failures,
        name
    };
}