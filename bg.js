for (let i = 0; i < 7; ++i)
  chrome.privacy.websites[[
    "adMeasurementEnabled",
    "fledgeEnabled",
    "hyperlinkAuditingEnabled",
    "relatedWebsiteSetsEnabled",
    "topicsEnabled",
    "referrersEnabled",
    "thirdPartyCookiesAllowed",
  ][i]].set({ value: !1 });
{
  let isEnable = 1;
  chrome.action.onClicked.addListener(() => (
    chrome.privacy.websites.referrersEnabled.set({
      value: (isEnable = !isEnable)
    }),
    chrome.privacy.websites.thirdPartyCookiesAllowed.set({
      value: isEnable
    }),
    chrome.action.setIcon({
      path: isEnable ? "off.png" : "on.png"
    })
  ))
}