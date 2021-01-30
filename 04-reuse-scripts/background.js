chrome.commands.onCommand.addListener(async (command) => {
    switch (command) {
        case 'duplicate-tab':
            await duplicateTab();
            break;
        case 'bark':
            await barkTitle();
            break;
        default:
            console.log(`Command ${command} not found`);
    }
});

/**
 * Gets the current active tab URL and opens a new tab with the same URL.
 */
const duplicateTab = async () => {
    const acho = new Acho();
    const tab = await acho.getActiveTab();

    chrome.tabs.create({ url: tab.url, active: false });
}

/**
 * Sends message to the content script with the currently active tab title.
 */
const barkTitle = async () => {
    const acho = new Acho();
    const tab = await acho.getActiveTab();

    chrome.tabs.sendMessage(tab.id, {
        tabTitle: tab.title
    });
}