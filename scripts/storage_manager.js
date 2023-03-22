async function get_addictions() {
    const value = await chrome.storage.sync.get('addictions');
    
    return value.addictions;
}

async function set_addictions(addictions) {
    await chrome.storage.sync.set({
        addictions: addictions
    });

    return addictions;
}

async function update_addictions(new_addictions) {
    const current_addictions = await get_addictions();
    
    return await set_addictions(current_addictions.concat(new_addictions));
}

async function remove_addiction(addiction_name) {
    const addictions = await get_addictions();
    
    if (addictions.includes(addiction_name)) {
        addictions.splice(addictions.indexOf(addiction_name), 1);
    }

    return await set_addictions(addictions);
}