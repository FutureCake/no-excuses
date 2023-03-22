const addictions = document.getElementById("addictions");
const add_addiction = document.getElementById("add-addiction");
const new_addiction = document.getElementById("new-addiction");

console.log(new_addiction);
console.log(addictions);

function create_addiction(addiction_context) {
    const el = document.createElement('li');
    el.textContent = addiction_context;
    return el;
}

function set_default_addictions() {
    set_addictions([
        "facebook.com",
        "instagram.com",
        "youtube.com",
        "youtu.be",
        "tiktok.com"
    ]).then((values) => {
        values.forEach(value => {
            addictions.insertBefore(create_addiction(value), new_addiction);
        });
    });
}

set_default_addictions();

chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        set_default_addictions();
    }
});