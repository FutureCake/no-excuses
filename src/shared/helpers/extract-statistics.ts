import { BlockedDomain, DomainStatistics } from "../types/types";

function getAverage(items: number[]): number;

function getAverage<
    T extends Record<string, any>,
    K extends {
        [P in keyof T]: T[P] extends number ? P : never
    }[keyof T]
>(items: T[], key: K): number;

function getAverage(items: any[], key?: string): number {
    if (items.length === 0) return 0;

    let sum = 0;

    if (typeof items[0] === "number") {
        sum = (items as number[]).reduce((acc, val) => acc + val, 0);
    } else {
        if (!key) throw new Error("Key is required when averaging object values.");
        sum = (items as Record<string, number>[]).reduce((acc, obj) => acc + obj[key]!, 0);
    }

    return sum / items.length;
}

function getMax(items: number[]): number;

function getMax<
    T extends Record<string, any>,
    K extends {
        [P in keyof T]: T[P] extends number ? P : never
    }[keyof T]
>(items: T[], key: K): number;

function getMax(items: any[], key?: string): number {
    if (items.length === 0) return 0;

    if (typeof items[0] === "number") {
        return Math.max(...(items as number[]));
    } else {
        if (!key) throw new Error("Key is required when finding max in object values.");
        return Math.max(...(items as Record<string, number>[]).map(obj => obj[key]!));
    }
}

const toOneDecimal = (num: number) => Math.round(num * 10) / 10;

export default function extractStatistics(domain: BlockedDomain): DomainStatistics {

    const { preventions, failures, name } = domain;

    const totalPreventions = preventions.length;
    const totalFailures = failures.length;

    const avgFailureDoubtTime = toOneDecimal(getAverage(failures, "doubtingFor") / 1000);
    const maxFailureDoubtTime = toOneDecimal(getMax(failures, "doubtingFor") / 1000);

    const avgPreventionDoubtTime = toOneDecimal(getAverage(preventions, "doubtingFor") / 1000);
    const maxPreventionDoubtTime = toOneDecimal(getMax(preventions, "doubtingFor") / 1000);

    return {
        name,
        failures,
        preventions,
        totalPreventions,
        totalFailures,
        avgFailureDoubtTime,
        avgPreventionDoubtTime,
        maxFailureDoubtTime,
        maxPreventionDoubtTime,
    };
}