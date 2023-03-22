// function getFaviconImage(url) {
 
//     const fav_url = new URL(chrome.runtime.getURL("/_favicon/"));
//     fav_url.searchParams.set("pageUrl", url);
//     fav_url.searchParams.set("size", "32");
 
//     const img = document.createElement('img');
//     img.src = fav_url.toString();    
//     return img;
// }

// chrome.runtime.sendMessage({
//     image: getFaviconImage(window.location.host)
// });
