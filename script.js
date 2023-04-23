chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message);
  if (message.action === "updatePopup") {
    console.log(message.text);
    document.getElementById("highlighted-text").innerText =
      message.text;
  }
});
