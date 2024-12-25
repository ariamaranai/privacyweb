for (let i = 0; i < 7; ++i)
  chrome.privacy.websites[
    [
      "adMeasurementEnabled",
      "fledgeEnabled",
      "hyperlinkAuditingEnabled",
      "relatedWebsiteSetsEnabled",
      "topicsEnabled",
      "referrersEnabled",
      "thirdPartyCookiesAllowed",
    ][i]
  ].set({ value: !1 });
chrome.action.onClicked.addListener(async () =>
  chrome.action.setIcon({
    path: (await chrome.privacy.websites.referrersEnabled.get({})).value
      ? (chrome.privacy.websites.referrersEnabled.set({ value: !1 }),
         chrome.privacy.websites.thirdPartyCookiesAllowed.set({ value: !1 }),
         "on.png")
      : (chrome.privacy.websites.referrersEnabled.set({ value: !0 }),
         chrome.privacy.websites.thirdPartyCookiesAllowed.set({ value: !0 }),
         "off.png")
  })
);
chrome.management.onEnabled.addListener(async info =>
  info.id == chrome.runtime.id &&
  (await chrome.privacy.websites.referrersEnabled.get({})).value &&
  chrome.action.setIcon({ path: "off.png" })
);