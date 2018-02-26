function getPayWallSelectors() {
  return [
    ".paywall-pop-big",
    ".paywall-pop-small",
    ".footer-ruler",
    ".paywall-ruler-is-visible"
  ];

}

function killPaywall() {
  getPayWallSelectors().forEach(selector => {
    console.log(`checking for '${selector}'`);
    const element = document.querySelector(selector);
    if (element) {
      console.log(`found match for '${selector}'`);
      element.style.display = 'none';
    } else {
      console.log(`No match for '${selector}'`);
    }

  });
}

killPaywall();