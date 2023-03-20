function getFaviconImage(url) {
 
    const url = new URL(chrome.runtime.getURL("/_favicon/"));
    url.searchParams.set("pageUrl", url);
    url.searchParams.set("size", "32");
 
    const img = document.createElement('img');
    img.src = url.toString();    
    return img;
}

chrome.runtime.sendMessage({
    image: getFaviconImage(window.location.host)
});

console.log(window.location.host);
