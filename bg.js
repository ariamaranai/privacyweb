chrome.runtime.onInstalled.addListener(() => {
  let i = 7;
  while (
    chrome.privacy.websites[[
      "adMeasurementEnabled",
      "fledgeEnabled",
      "hyperlinkAuditingEnabled",
      "relatedWebsiteSetsEnabled",
      "topicsEnabled",
      "referrersEnabled",
      "thirdPartyCookiesAllowed"
    ][--i]].set({ value: !1 }),
    i
  );
});
chrome.privacy.websites.referrersEnabled.get({}, details =>
  chrome.action.setIcon({ path: details.value ? "off.png" : "on.png" })
);
chrome.action.onClicked.addListener(async () => {
  let value = !(await chrome.privacy.websites.referrersEnabled.get({})).value;
  chrome.action.setIcon({ path: value ? "off.png" : "on.png" });
  chrome.privacy.websites.referrersEnabled.set(value = { value });
  chrome.privacy.websites.thirdPartyCookiesAllowed.set(value);
});