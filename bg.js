for (let i = 0; i < 7; ++i)
  chrome.privacy.websites[[
    "adMeasurementEnabled",
    "fledgeEnabled",
    "hyperlinkAuditingEnabled",
    "relatedWebsiteSetsEnabled",
    "topicsEnabled",
    "referrersEnabled",
    "thirdPartyCookiesAllowed"
  ][i]].set({ value: !1 });
chrome.action.onClicked.addListener(async () => {
  let value = !(await chrome.privacy.websites.referrersEnabled.get({})).value;
  chrome.privacy.websites.referrersEnabled.set({ value }),
  chrome.privacy.websites.thirdPartyCookiesAllowed.set({ value }),
  chrome.action.setIcon({ path: value ? "off.png" : "on.png" })
});