chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "highlight") {
    // const popupViews = chrome.extnesion.getViews({ type: "popup" });
    chrome.runtime.sendMessage({ action: "updatePopup", text: message.text });
    sendResponse({ result: "success" });
  }
});
