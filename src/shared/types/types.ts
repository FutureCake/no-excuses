export type Entity = "background" | "content" | "popup" | "newTab";
export type Action = "close-tab" | "toggle-quick-add";

export interface ExtensionMessage<T,> {
    sender: Entity;
    recipient: Entity;
    action: Action;
    data?: T
}

export type DomainActivity = {
    datetime: string;
    doubtingFor: number;
}

export type Failures = DomainActivity & {
    reason: string;
}

export type TimeConstraint = {

}

export interface BlockedDomain {
    id: number;
    name: string;
    url: string;
    allowExcuses: boolean;
    allowTimeConstraints: boolean;
    timeConstraints: TimeConstraint[];
    preventions: DomainActivity[];
    failures: Failures[];
}

export type DomainStatistics = {
    name: string;
    failures: Failures[];
    preventions: DomainActivity[];
    totalFailures: number;
    totalPreventions: number;
    avgPreventionDoubtTime: number;
    maxPreventionDoubtTime: number;
    avgFailureDoubtTime: number;
    maxFailureDoubtTime: number;
}

export type Ok<T> = { type: 'ok'; value: T };
export type Err<E extends Error> = { type: 'err'; error: E };

export type Result<T, E extends Error = Error> = Ok<T> | Err<E>;