document.addEventListener('DOMContentLoaded', () => {
    
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        const acho = new Acho();
        dialogBox.innerHTML = acho.getBarkedTitle(tabs[0].title);
    });
});