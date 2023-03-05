var msgObj = "Clicked"
document.getElementById('edit-btn').addEventListener('click', function () {
    chrome.tabs.query({}, tabs => {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, msgObj);
        })
    })
})
