import { Err, Ok, castError, isErr } from "../helpers/errors";
import { BlockedDomain, Result } from "../types/types";


export async function getBlockedDomains(): Promise<Result<BlockedDomain[]>> {

    try {
        const blockedDomains = await chrome.storage.local.get("domains") as { domains: BlockedDomain[] } | undefined;

        if (blockedDomains === undefined || blockedDomains.domains === undefined) return Ok([]);
        return Ok(blockedDomains.domains);

    } catch (error) {
        return Err(castError(error));
    }
}

export async function getBlockedDomain(id: number): Promise<Result<BlockedDomain>> {

    try {
        const domains = await getBlockedDomains();

        if (isErr(domains)) return domains;

        const domain = domains.value.find((domain) => {
            return domain.id === id;
        });

        if (domain) return Ok(domain);
        else return Err(new Error(`Could not find domain with id of ${id}`));


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

export async function addBlockedDomains(...newDomains: Omit<BlockedDomain, "id">[] | string[]): Promise<Result<BlockedDomain[]>> {

    const domains = await getBlockedDomains();

    if (isErr(domains)) return domains;

    const lastId = domains.value.length > 0 ? domains.value[domains.value.length - 1].id : 0;
    const newDomainsWithId = newDomains.map((domain, index) => {

        const newId = lastId + index + 1;

        if (typeof domain === 'string') {
            return {
                url: domain,
                preventions: [],
                failures: [],
                id: newId,
                name: domain
            }
        }

        return {
            id: newId,
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

export async function updateBlockedDomain(id: number, updater: (current: BlockedDomain) => BlockedDomain): Promise<Result<BlockedDomain[]>> {

    const domains = await getBlockedDomains();

    if (isErr(domains)) return domains;

    const updated = domains.value.map((domain) => {
        return (domain.id === id) ? updater(domain) : domain;
    });

    return overwriteBlockedDomains(...updated);
}