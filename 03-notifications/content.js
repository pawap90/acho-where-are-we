// Notification body.
const notification = document.createElement("div");
notification.className = 'acho-notification';

// Notification icon.
const icon = document.createElement('img');
icon.src = chrome.runtime.getURL("images/icon32.png");
notification.appendChild(icon);

// Notification text.
const notificationText = document.createElement('p');
notificationText.className = 'acho-notification-text';
notification.appendChild(notificationText);

// Add to current page.
document.body.appendChild(notification);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    const notification = document.getElementsByClassName('acho-notification')[0];
    const notificationText = document.getElementsByClassName('acho-notification-text')[0];

    const acho = new Acho();
    notificationText.innerHTML = acho.getBarkedTitle(request.tabTitle);

    notification.style.display = 'flex';

    setTimeout(function () {

        notification.style.display = 'none';
    }, 5000);
    
    return true;
});