// document.getElementById('showLinks').addEventListener('click', () => {
chrome.tabs.query({}, function (tabs) {
    let links = tabs.map(tab => `<a href="${tab.url}" target="_blank">${tab.title}</a>`).join('<br>');
    document.getElementById('linksContainer').innerHTML = links;
    document.getElementById('saveLinks').addEventListener('click', () => {
        let links1 = tabs.map(tab => `Page: ${tab.title} \n${tab.url}`).join('\n')
        navigator.clipboard.writeText(links1);
    });
});

document.getElementById('importLinks').addEventListener('click', () => {
    const linkInput = document.getElementById('linkInput').value;
    const links = linkInput.split('\n').map(link => link.trim()).filter(link => link);
    
    links.forEach(link => {
        if (isValidURL(link)) {
            chrome.tabs.create({ url: link });
        } else {
            console.warn(`Invalid URL: ${link}`); // Log invalid URLs to the console
        }
    });
});

// Function to validate URLs
function isValidURL(string) {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(string);
}