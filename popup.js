chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const currentTab = tabs[0];
  const bingUrl = 'https://www.bing.com/search?q=';

  // Extract the search query from the current tab URL
  const searchQuery = currentTab.url.slice(currentTab.url.indexOf('=') + 1);

  // Open a new tab with the Google search URL
  const googleUrl = `https://www.google.com/search?q=${searchQuery}`;
  chrome.tabs.create({ url: googleUrl });
});