{
  let { action, privacy, runtime } = chrome;
  let { websites } = privacy;
  let isCalled;
  runtime.onInstalled.addListener(() => {
    let i = 8;
    while (
      websites[[
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
  action.onClicked.addListener(() =>
    websites.referrersEnabled.get({}, e => (
      action.setIcon({ path: (e = !e.value) ? "off.png" : "on.png" }),
      websites.referrersEnabled.set(e = { value: e }),
      websites.thirdPartyCookiesAllowed.set(e)
    ))
  );
  runtime.onStartup.addListener(() => (
    isCalled ??= (
      websites.referrersEnabled.get({}, e =>
        action.setIcon({ path: e.value ? "off.png" : "on.png" })
      ),
      0
    )
  ));
  runtime.onStartup.dispatch();
}
