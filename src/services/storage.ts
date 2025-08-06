import { castError, Err, isErr, Ok } from "../utils/helpers";
import { BlockedDomain, Result } from "../utils/types";

export async function getBlockedDomains(): Promise<Result<BlockedDomain[]>> {

    try {
        const blockedDomains = await chrome.storage.local.get("domains") as { domains: BlockedDomain[] } | undefined;

        if (blockedDomains === undefined || blockedDomains.domains === undefined) return Ok([]);
        return Ok(blockedDomains.domains);

    } catch (error) {
        return Err(castError(error));
    }
}

export async function overwriteBlockedDomains(...domains: BlockedDomain[]): Promise<Result<BlockedDomain[]>> {

    try {
        await chrome.storage.local.set({ domains: domains });
        return Ok(domains);

    } catch (error) {
        return Err(castError(error));
    }
}

export async function addBlockedDomains(...newDomains: Omit<BlockedDomain, "id">[]): Promise<Result<BlockedDomain[]>> {

    const domains = await getBlockedDomains();

    if (isErr(domains)) return domains;

    const lastId = domains.value[domains.value.length - 1].id;
    const newDomainsWithId = newDomains.map((domain, index) => {
        return {
            id: lastId + index,
            ...domain
        }
    });

    return await overwriteBlockedDomains(...domains.value, ...newDomainsWithId);
}

export async function removeBlockedDomains(...ids: number[]): Promise<Result<BlockedDomain[]>> {

    const domains = await getBlockedDomains();

    if (isErr(domains)) return domains;

    const updated = domains.value.filter((domain) => {
        return ids.includes(domain.id) === false;
    });

    return await overwriteBlockedDomains(...updated);
}

export async function updateBlockedDomain(id: number, updates: Partial<BlockedDomain>): Promise<Result<BlockedDomain[]>> {

    const domains = await getBlockedDomains();

    if (isErr(domains)) return domains;

    const updated = domains.value.map((domain) => {
        return (domain.id === id) ? { ...domain, ...updates } : domain;
    });

    return overwriteBlockedDomains(...updated);
}