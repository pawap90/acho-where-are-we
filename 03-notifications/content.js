chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    alert("Tab title: " + request.tabTitle);
    return true;
});