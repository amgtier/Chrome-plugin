console.log("Loaded");
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "highlight") {
    // console.log("get highlight");
    // highlightedText = message.text;
    // chrome.extension.getBackgroundPage().console.log(message.text);
    chrome.runtime.sendMessage({ action: "updatePopup", text: message.text });
    sendResponse({ result: "success" });
  }
});
