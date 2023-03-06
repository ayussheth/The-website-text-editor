var msgObj = "Clicked";

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('edit-btn').addEventListener('click', function () {
      chrome.tabs.query({}, tabs => {
          tabs.forEach(tab => {
              chrome.tabs.sendMessage(tab.id, msgObj);
          })
      })
  });
});
