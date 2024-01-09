if (window.location.hostname === "app.slack.com") {
  setTimeout(modifyClassValues, 5000);
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        modifyClassValues();
      }
    });
  });

  observer.observe(document, { childList: true, subtree: true });
}

function modifyClassValues() {
  const divTags = document.querySelectorAll("div");

  divTags.forEach((div) => {
    const currentClasses = div.className;

    if (
      currentClasses &&
      currentClasses.includes(
        "c-message_kit__background c-message_kit__hidden_message_blur p-message_pane_message__message c-message_kit__message"
      )
    ) {
      const newClasses = currentClasses
        .replace(
          "c-message_kit__background c-message_kit__hidden_message_blur p-message_pane_message__message c-message_kit__message",
          "c-message_kit_background p-message_pane_message_message c-message_kit_message"
        )
        .trim();

      div.className = newClasses;
    }
  });
}