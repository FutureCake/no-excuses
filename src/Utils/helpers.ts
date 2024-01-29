import * as uri from 'uri-js';

function getDomainFromUrl(url: string): string | undefined {
    const parsed = uri.parse(url);
    return parsed.host;
}

export { getDomainFromUrl };
