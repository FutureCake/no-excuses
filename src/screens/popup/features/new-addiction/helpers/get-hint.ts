export function getHint(action: "domain" | "subdomain" | "segment" | "exact", url: string): string {

    switch (action) {
        case "exact":
            return `This would match the entire url, eg: ${url}`;
        case "domain":
            return `This would match the domain of the url, eg: ${url}`;
        case "subdomain":
            return "Click to do "
        default:
            return "Match entire url"
    }
}