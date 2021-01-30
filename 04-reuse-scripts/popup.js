document.addEventListener('DOMContentLoaded', async () => {
    
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };
    
    const acho = new Acho();
    const tab = await acho.getActiveTab();
    const bark = acho.getBarkedTitle(tab.title);

    dialogBox.innerHTML = bark;
});