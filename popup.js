
document.addEventListener('DOMContentLoaded', () => {
    
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = barkTitle(tabs[0].title);
    });
});

function barkTitle(title) {
    const barkTitle = `${getRandomBark()} Ahem.. I mean, we are at: ${title}`
    return barkTitle;
}

const barks = [
    'Barf barf!',
    'Birf birf!',
    'Woof woof!',
    'Arf arf!',
    'Yip yip!',
    'Biiiirf!'
]

function getRandomBark() {
    const bark = barks[Math.floor(Math.random() * barks.length)];
    return bark;
}