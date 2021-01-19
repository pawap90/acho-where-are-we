
document.addEventListener('DOMContentLoaded', () => {

    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = getBarkedTitle(tabs[0].title);
    });
});

/**
 * Concatenates the tab title with Acho's barks.
 * @param {String} tabTitle Current tab title
 */
const getBarkedTitle = (tabTitle) => {
    const barkTitle = `${getRandomBark()} Ahem.. I mean, we are at: ${tabTitle}`
    return barkTitle;
}

/**
 * List of possible barks.
 */
const barks = [
    'Barf barf!',
    'Birf birf!',
    'Woof woof!',
    'Arf arf!',
    'Yip yip!',
    'Biiiirf!'
]

/**
 * Returns a random bark from the list of possible barks.
 */
const getRandomBark = () => {
    const bark = barks[Math.floor(Math.random() * barks.length)];
    return bark;
}