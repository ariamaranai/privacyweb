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

chrome.action.onClicked.addListener(() =>
  chrome.privacy.websites.referrersEnabled.get({}, async details  => {
    let value = !details.value;
    let arg = { value };
    chrome.privacy.websites.referrersEnabled.set(arg);
    chrome.privacy.websites.thirdPartyCookiesAllowed.set(arg);
    chrome.action.setIcon({ path: value ? "off.png" : "on.png" });
  })
);
chrome.management.onEnabled.addListener(info =>
  info.id == chrome.runtime.id && chrome.privacy.websites.referrersEnabled.get({}, async details =>
    details.value && await chrome.action.setIcon({ path: "off.png" })
  )
);