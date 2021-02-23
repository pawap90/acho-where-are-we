/** @private */
const PAGES_KEY = 'pages';

/** Shared logic */
class PageService {

    /**
     * @returns {Promise<Array>}
     */
    static getPages = () => {
        const promise = new Promise((resolve, reject) => {
            try {
                chrome.storage.local.get([PAGES_KEY], (result) => {
                    if (chrome.runtime.lastError)
                        reject(chrome.runtime.lastError);

                    const researches = result.pages ?? [];
                    resolve(researches);
                });
            }
            catch (err) {
                reject(err);
            }
        });

        return promise;
    }

    static savePage = async (title, url) => {
        const pages = await this.getPages();
        const updatedPages = [...pages, { title, url }];

        const promise = new Promise((resolve, reject) => {
            try {
                chrome.storage.local.set({ [PAGES_KEY]: updatedPages }, () => {
                    if (chrome.runtime.lastError)
                        reject(chrome.runtime.lastError);
                    resolve(updatedPages);
                });
            }
            catch (err) {
                reject(err);
            }
        });

        return promise;
    }

    static clearPages = async () => {
        const promise = new Promise((resolve, reject) => {
            try {
                chrome.storage.local.clear(() => {
                    if (chrome.runtime.lastError)
                        reject(chrome.runtime.lastError);

                    resolve();
                });
            }
            catch (err) {
                reject(err);
            }
        });

        return promise;
    }
}