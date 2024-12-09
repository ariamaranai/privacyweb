(async c=> (
  c.action.setIcon({path: (await c.privacy.websites.referrersEnabled.get({})).value ? "off.png": "on.png"}),
  c.action.onClicked.addListener(async ()=>
    c.action.setIcon({
      path: (await c.privacy.websites.referrersEnabled.get({})).value ?
        (c.privacy.websites.referrersEnabled.set({value: !1}),
         c.privacy.websites.thirdPartyCookiesAllowed.set({value: !1}),
         "on.png") :
        (c.privacy.websites.referrersEnabled.set({value: !0}),
         c.privacy.websites.thirdPartyCookiesAllowed.set({value: !0}),
         "off.png")
    })
  ),
  c.runtime.onInstalled.addListener(()=> (
    c.privacy.websites.adMeasurementEnabled.set({value: !1}),
    c.privacy.websites.fledgeEnabled.set({value: !1}),
    c.privacy.websites.hyperlinkAuditingEnabled.set({value: !1}),
    c.privacy.websites.relatedWebsiteSetsEnabled.set({value: !1}),
    c.privacy.websites.topicsEnabled.set({value: !1}),
    c.privacy.websites.referrersEnabled.set({value: !1}),
    c.privacy.websites.thirdPartyCookiesAllowed.set({value: !1}),
    c.action.setIcon({path: "on.png"})
  ))
))(chrome)