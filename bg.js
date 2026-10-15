{
  let { action, privacy, runtime, storage } = chrome;
  let { websites } = privacy;
  let isCalled;
  storage = storage.local;
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
      ][--i]]?.set({ value: !1 }),
      i
    );
    storage.set({ 0: 0 })
  });
  action.onClicked.addListener(() =>
    storage.get("0", v => (
      action.setIcon({ path: (v = !v[0]) ? "off.png" : "on.png" }),
      websites.referrersEnabled.set({ value: v }),
      websites.thirdPartyCookiesAllowed.set({ value: v }),
      storage.set({ 0: v })
    ))
  );
  runtime.onStartup.addListener(() => (
    isCalled ??= (
      storage.get("0", v => action.setIcon({ path: v[0] ? "off.png" : "on.png" })),
      0
    )
  ));
  runtime.onStartup.dispatch();
}
