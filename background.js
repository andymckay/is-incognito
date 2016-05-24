chrome.webRequest.onCompleted.addListener(function(details) {
  chrome.tabs.get(details.tabId, function(tab) {
    console.log('Request is window is private:', tab.incognito);
  })
}, {urls: ['<all_urls>']});
