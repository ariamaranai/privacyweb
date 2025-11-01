chrome.runtime.onInstalled.addListener(() => {
  let i = 8;
  while (
    chrome.privacy.websites[[
      "adMeasurementEnabled",
      "doNotTrackEnabled",
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
chrome.action.onClicked.addListener(async () => {
  let value = !(await chrome.privacy.websites.referrersEnabled.get({})).value;
  chrome.action.setIcon({ path: value ? "off.png" : "on.png" });
  chrome.privacy.websites.referrersEnabled.set(value = { value });
  chrome.privacy.websites.thirdPartyCookiesAllowed.set(value);
});
{
  let isCalled;
  chrome.runtime.onStartup.addListener(async () =>
    isCalled ??= chrome.action.setIcon({ path: (await chrome.privacy.websites.referrersEnabled.get({})).value ? "off.png" : "on.png" })
  );
}
chrome.runtime.onStartup.dispatch();