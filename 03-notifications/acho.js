class Acho {
    /**
     * Concatenates the tab title with Acho's barks.
     * @param {String} tabTitle Current tab barkTitle
     * @returns {String} 
     */
    getBarkedTitle = (tabTitle) => {
        const barkTitle = `${this.getRandomBark()} Ahem.. I mean, we are at: <br><b>${tabTitle}</b>`
        return barkTitle;
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