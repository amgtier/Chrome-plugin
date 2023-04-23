document.addEventListener("mouseup", function () {
  const highlightedText = window.getSelection().toString();
  chrome.runtime.sendMessage(
    {
      action: "highlight",
      text: highlightedText,
    },
    function (response) {
      console.log(response);
    }
  );
});
