chrome.runtime.onMessage.addListener(msgObj => {
    if (msgObj === 'Clicked') {
        document.body.contentEditable = 'true'

 document.body.setAttribute('spellcheck', false)

        console.log("Website text can be edited now")
    }
})