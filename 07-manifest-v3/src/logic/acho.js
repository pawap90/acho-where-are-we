/** Shared logic */
class Acho {

    /**
     * Gets the active Tab
     * @returns {Promise<*>} Active tab
     */
    getActiveTab = async () => {
        const query = { active: true, currentWindow: true };
        const tabs = await chrome.tabs.query(query);
        
        return tabs[0];
    }

    /**
     * Concatenates the tab title with Acho's barks.
     * @param {String} tabTitle Current tab title
     * @returns {String} 
     */
    getBarkedTitle = (tabTitle) => {
        const barkTitle = `${this.getRandomBark()} Ahem.. I mean, we are at: <br><b>${tabTitle}</b>`
        return barkTitle;
    }

    /**
     * Display a badge with the text 'grr' over the browser action icon
     * @returns {Promise<void>}
     */
    growl = async () => {
        await chrome.action.setBadgeBackgroundColor({ color: '#F00' });
        await chrome.action.setBadgeText({ text: 'grr' });
    }

    /**
     * Hide the browser action badge.
     * @returns {Promise<void>}
     */
    quiet = async () => {
        await chrome.action.setBadgeText({ text: '' });
    }

    /**
     * Array of available bark sounds
     * @private
     * @returns {String[]}
     */
    getBarks = () => {
        return [
            'Barf barf!',
            'Birf birf!',
            'Woof woof!',
            'Arf arf!',
            'Yip yip!',
            'Biiiirf!'
        ];
    }
    /**
     * Returns a random bark from the list of possible barks.
     * @private
     * @returns {String}
     */
    getRandomBark = () => {
        const barks = this.getBarks();
        const bark = barks[Math.floor(Math.random() * barks.length)];
        return bark;
    }
}