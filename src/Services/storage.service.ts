import { BlockedDomain } from "../Components/Addictions/Addiction/Addiction";

async function getBlockedDomains(): Promise<BlockedDomain[]> {
    const urlsObj = await chrome.storage.local.get("urls") as { domains: BlockedDomain[] };
    return urlsObj.domains;
}

async function overwriteBlockedDomains(...domains: BlockedDomain[]): Promise<boolean> {
    try {
        await chrome.storage.local.set({ domains: domains });
        return true;
    } catch (err) {
        return false;
    }
}

async function addBlockedDomains(...newDomains: BlockedDomain[]): Promise<BlockedDomain[]> {
    const domains = await getBlockedDomains();
    const updated = [...domains, ...newDomains];
    chrome.storage.local.set({
        domains: updated
    });

    return updated;
}

async function removeBlockedDomains(...oldDomains: BlockedDomain[]): Promise<BlockedDomain[] | undefined> {
    const domains = await getBlockedDomains();

    const updated = domains.filter((domain) => {
        return (!oldDomains.includes(domain))
    });

    const success = await overwriteBlockedDomains(...updated);

    return success ? updated : undefined;
}

async function updateBlockedDomain(updated: BlockedDomain): Promise<boolean> {

    const domains = await getBlockedDomains();
    domains.map((domain) => {
        return (domain.id === updated.id) ? updated : domain;
    });
    return overwriteBlockedDomains(...domains);
}

export { addBlockedDomains, getBlockedDomains, overwriteBlockedDomains, removeBlockedDomains, updateBlockedDomain };

