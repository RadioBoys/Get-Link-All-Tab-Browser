chrome.tabs.onCreated.addListener(() => {
  updateTabCount();
});

chrome.tabs.onRemoved.addListener(() => {
  updateTabCount();
});

function updateTabCount() {
  chrome.tabs.query({}, function (tabs) {
    console.log(`Number of open tabs: ${tabs.length}`);
  });
}
