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
  chrome.storage.local.set({ value: !0 });
});
chrome.action.onClicked.addListener(() =>
  chrome.storage.local.get("value", v => {
    let isEnable = v.value;
    chrome.action.setIcon({ path: isEnable ? "off.png" : "on.png" }),
    chrome.privacy.websites.referrersEnabled.set(v),
    chrome.privacy.websites.thirdPartyCookiesAllowed.set(v),
    chrome.storage.local.set({ value: !isEnable })
  })
);
{
  let isCalled;
  chrome.runtime.onStartup.addListener(async () =>
    isCalled ??= (chrome.action.setIcon({ path: (await chrome.storage.local.get("0")).value ? "off.png" : "on.png" }), 0)
  );
}
chrome.runtime.onStartup.dispatch();