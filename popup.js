// document.getElementById('showLinks').addEventListener('click', () => {
chrome.tabs.query({}, function (tabs) {
    let links = tabs.map(tab => `<a href="${tab.url}" target="_blank">${tab.title}</a>`).join('<br>');
    document.getElementById('linksContainer').innerHTML = links;
    document.getElementById('saveLinks').addEventListener('click', () => {
        let links1 = tabs.map(tab => `Page: ${tab.title} \n${tab.url}`).join('\n')
        navigator.clipboard.writeText(links1);
    });
    
});