function handleClick() {
  chrome.windows.getCurrent(function(obj) {
    if (obj.incognito) {
      chrome.browserAction.setBadgeText({text: 'PRIVATE'});
    } else {
      chrome.browserAction.setBadgeText({text: 'NORMAL'});
    }
  });
}

chrome.browserAction.onClicked.addListener(handleClick);
