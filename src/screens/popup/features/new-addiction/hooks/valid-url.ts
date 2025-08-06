import { useEffect, useState } from "react";

export default function useValidUrl() {

    const [url, setUrl] = useState<string>("");
    const [domain, setDomain] = useState<string>();
    const extractDomain = /^(?:https?:\/\/)?(?:www\.)?((?:[a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})/;

    useEffect(() => {
        setDomain(url.match(extractDomain)?.[1]);
    }, [url]);

    return {
        valid: domain !== undefined,
        domain,
        setUrl,
        url
    }

}

