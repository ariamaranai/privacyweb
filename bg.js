chrome.privacy.websites.adMeasurementEnabled.set({value: !1}),
chrome.privacy.websites.fledgeEnabled.set({value: !1}),
chrome.privacy.websites.hyperlinkAuditingEnabled.set({value: !1}),
chrome.privacy.websites.relatedWebsiteSetsEnabled.set({value: !1}),
chrome.privacy.websites.topicsEnabled.set({value: !1}),
chrome.privacy.websites.referrersEnabled.set({value: !1}),
chrome.privacy.websites.thirdPartyCookiesAllowed.set({value: !1}),
chrome.action.onClicked.addListener(async ()=> chrome.action.setIcon({
  path: (await c.privacy.websites.referrersEnabled.get({})).value ?
    (c.privacy.websites.referrersEnabled.set({value: !1}),
     c.privacy.websites.thirdPartyCookiesAllowed.set({value: !1}),
     "off.png") :
    (c.privacy.websites.referrersEnabled.set({value: !0}),
     c.privacy.websites.thirdPartyCookiesAllowed.set({value: !0}),
     "on.png")
}))