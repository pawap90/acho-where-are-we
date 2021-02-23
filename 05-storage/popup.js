document.addEventListener('DOMContentLoaded', async () => {
    
    const dialogBox = document.getElementById('dialog-box');
    
    const acho = new Acho();
    const tab = await acho.getActiveTab();
    const bark = acho.getBarkedTitle(tab.title);

    dialogBox.innerHTML = bark;
    
    // Store page.
    await PageService.savePage(tab.title, tab.url);

    // Display history.
    await displayPages();

    const clearHistoryBtn = document.getElementById('clear-history');
    clearHistoryBtn.onclick = async () => {
        await PageService.clearPages();
        await displayPages();
    };
});

const displayPages = async () => {
    const visitedPages = await PageService.getPages();
    const pageList = document.getElementById('page-list');
    pageList.innerHTML = '';
    
    visitedPages.forEach(page => {
        const pageItem = document.createElement('li');
        pageList.appendChild(pageItem);
        
        const pageLink = document.createElement('a');
        pageLink.title = page.title;
        pageLink.innerHTML = page.title;
        pageLink.href = page.url;
        pageItem.appendChild(pageLink);
    });
}

