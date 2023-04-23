function getSelectedText(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabs[0].id },
        func: function () {
          return window.getSelection().toString();
        },
      })
      .then(function (result) {
        document.getElementById("highlighted-text").innerText =
          result[0].result;
      })
      .catch(function (err) {
        console.error("[Chaos] Error selecting text: ", err);
      });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  getSelectedText();
});
