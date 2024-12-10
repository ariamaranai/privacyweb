chrome.privacy.websites.adMeasurementEnabled.set({value: !1}),
chrome.privacy.websites.fledgeEnabled.set({value: !1}),
chrome.privacy.websites.hyperlinkAuditingEnabled.set({value: !1}),
chrome.privacy.websites.relatedWebsiteSetsEnabled.set({value: !1}),
chrome.privacy.websites.topicsEnabled.set({value: !1}),
chrome.privacy.websites.referrersEnabled.set({value: !1}),
chrome.privacy.websites.thirdPartyCookiesAllowed.set({value: !1}),
chrome.action.onClicked.addListener(async ()=> chrome.action.setIcon({
  path: (await chrome.privacy.websites.referrersEnabled.get({})).value ?
    (chrome.privacy.websites.referrersEnabled.set({value: !1}),
     chrome.privacy.websites.thirdPartyCookiesAllowed.set({value: !1}),
     "on.png") :
    (chrome.privacy.websites.referrersEnabled.set({value: !0}),
     chrome.privacy.websites.thirdPartyCookiesAllowed.set({value: !0}),
     "off.png")
}))