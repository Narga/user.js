/*
 * NARGA Tweaks for enhance Firefox productivity
 * http://www.narga.net/ultimate-guide-tweaks-enhance-firefox-productivity/
 * License: GPL v2
 * Creatore: Nguyễn Đình Quân <dinhquan@narga.net>
 * Reference: include the list in readme.md
 */

/*
 * Firefox features
 */

// Remove DRM media playback (Encrypted Media Extensions - EME)
// A binary plugin (closed-source) is shipped with Firefox since v38. It enables playback of encrypted media and lets you use e.g. Netflix without Microsoft Silverlight. To completely remove the plugin you would have to install an '[EME-free](http://download.cdn.mozilla.net/pub/firefox/releases/latest/win32-EME-free/)' build of Firefox. [Description](https://wiki.mozilla.org/Media/EME)
user_pref("media.eme.enabled", false);
user_pref("media.gmp-eme-adobe.enabled", false);

// Firefox Hello has been removed since version 49
// Firefox connects to third-party (Telefonica) servers without asking for permission [Description](https://support.mozilla.org/en-US/kb/firefox-hello-video-and-voice-conversations-online)
//user_pref("loop.enabled", false);

// Disable Pocket integration
// [Description](https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox)
user_pref("browser.pocket.enabled", false);

// Remove Reader mode
// Each page you visit is parsed, leaking your browsing history. [Discussion](https://bugzilla.mozilla.org/show_bug.cgi?id=558882)
user_pref("reader.parse-on-load.enabled", false);

// Disable the built-in PDF viewer (CVE-2015-2743)
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-2743
user_pref("pdfjs.disabled",	true);
// If you're gonna stick with pdfjs, at least disable its WebGL attack surface:
user_pref("pdfjs.enableWebGL", false);

// http://kb.mozillazine.org/Dom.storage.enabled
// http://dev.w3.org/html5/webstorage/#dom-localstorage
// you can also see this with Panopticlick's "DOM localStorage"
user_pref("dom.storage.enabled",	false);

// https://developer.mozilla.org/en-US/docs/IndexedDB
// https://wiki.mozilla.org/Security/Reviews/Firefox4/IndexedDB_Security_Review
// TODO: find out why html5test still reports this as available
// NOTE: this is enabled for now, as disabling this seems to break some plugins.
//       see: http://forums.mozillazine.org/viewtopic.php?p=13842047#p13842047
user_pref("dom.indexedDB.enabled", true);

// TODO: "Access Your Location" "Maintain Offline Storage" "Show Notifications"

// Speech recognition
// https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
// https://wiki.mozilla.org/HTML5_Speech_API
user_pref("media.webspeech.recognition.enable",	false);

// Disable getUserMedia screen sharing
// https://mozilla.github.io/webrtc-landing/gum_test.html
user_pref("media.getusermedia.screensharing.enabled",	false);

// Disable sensor API
// https://wiki.mozilla.org/Sensor_API
user_pref("device.sensors.enabled",	false);

// Disable sending HTML5 pings:
// http://kb.mozillazine.org/Browser.send_pings
user_pref("browser.send_pings",	false);
// this shouldn't have any effect, since we block pings altogether, but we'll set it anyway. http://kb.mozillazine.org/Browser.send_pings.require_same_host
user_pref("browser.send_pings.require_same_host",	true);

// Disable gamepad input
// http://www.w3.org/TR/gamepad/
user_pref("dom.gamepad.enabled",		false);

// Disable virtual reality devices
// https://developer.mozilla.org/en-US/Firefox/Releases/36#Interfaces.2FAPIs.2FDOM
user_pref("dom.vr.enabled",		false);

// Disable web notifications
user_pref("dom.webnotifications.enabled",		false);

// disable webGL
// http://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
user_pref("webgl.disabled",		true);
user_pref("webgl.disable-extensions", true);

// Disable face detection by default
user_pref("camera.control.face_detection.enabled",    false);

// disable Gnome Shell Integration
user_pref("plugin.state.libgnome-shell-browser-plugin",	0);

// disable the bundled OpenH264 video codec
// http://forums.mozillazine.org/viewtopic.php?p=13845077&sid=28af2622e8bd8497b9113851676846b1#p13845077
//user_pref("media.gmp-provider.enabled",		false);

// Disable rendering of SVG OpenType fonts:
    // https://wiki.mozilla.org/SVGOpenTypeFonts
    // https://github.com/iSECPartners/publications/blob/master/presentations/SVG_Security-rdegraaf-bh_us_2014.pdf
user_pref("gfx.font_rendering.opentype_svg.enabled", false);

// Disable "social" crap  http://www.ghacks.net/2013/04/10/mozilla-adds-cliqz-msnnow-and-mixi-as-social-providers-to-firefox/
user_pref("social.directories", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.whitelist", "");

/*
 * Network Performance
 */

// Enable Pipelining to allow Firefox sends multiple request to web server at a moment.
user_pref("network.http.pipelining", true);

// This preference controls the maximum number of times the content will do timer-based reflows.
user_pref("content.notify.backoffcount", "5");

// The number of milliseconds to wait before first displaying the page. (Default: 250)
user_pref("nglayout.initialpaint.delay", "0");

// Disable link prefetching
// http://kb.mozillazine.org/Network.prefetch-next
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#Is_there_a_preference_to_disable_link_prefetching.3F
user_pref("network.prefetch-next",		false);

// http://kb.mozillazine.org/Network.dns.disablePrefetch
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching
user_pref("network.dns.disablePrefetch",		true);
user_pref("network.dns.disablePrefetchFromHTTPS",		true);

// To improve page load time by performing overhead for connections (DNS lookup, TCP handshake, TLS handshake) before the connections are actually needed. https://wiki.mozilla.org/Privacy/Reviews/Necko
user_pref("network.predictor.enabled", false);

// Search suggestions
// Everything you type in the search box is sent to the search engine.
user_pref("browser.search.suggest.enabled", true);

// Disable support openh264 codec for peer-to-peer video when disable Hello
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_media-capabilities
// http://andreasgal.com/2014/10/14/openh264-now-in-firefox/
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.url", "");

// Stop predictive connections to sites when the user hovers their mouse over thumbnails on the New Tab Page https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_speculative-pre-connections
user_pref("network.http.speculative-parallel-limit",		0);
// Disable auto-update checking https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_auto-update-checking
user_pref("browser.search.update", false);

/*
 * Firefox Performance
 */

// Relocate cache only to RAM
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", "-1");

// Show full URLs in the address bar (including "http://"):
user_pref("browser.urlbar.trimURLs", false);

// Get rid of the useless/redundant "Visit (site)" and "(keyword) - search with (engine)" dropdown in the URL bar (since FF43):
user_pref("browser.urlbar.unifiedcomplete", false);

// Revert to old search bar layout - drop-down list instead of icons:
    // This choice was removed in FF43 - use the Classic Theme Restorer addon if you want it back.
// user_pref("browser.search.showOneOffButtons", false);

// Load searches from right-click context menu in background tab
    // https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/browser.search.context.loadInBackground
//user_pref("browser.search.context.loadInBackground", true);

// Remove "(site) is now fullscreen" nag message:
    // If you fear this might "facilitate phishing", you might not want to be on the internet at all.
    // Before FF43:
// user_pref("full-screen-api.approval-required", false);
    // Since FF43:
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

// Disable fullscreen URL bar animation:
user_pref("browser.fullscreen.animate", false);

// Disable tab animation:
    // http://www.askvg.com/how-to-disable-animation-while-opening-new-tab-in-mozilla-firefox-4-0/
user_pref("browser.tabs.animate", false);

// Prevent sites from disabling the default right-click menu:
// Allow this for website's context menu
//user_pref("dom.event.contextmenu.enabled", false);

// Prevent sites/popups from messing with certain UI elements:
    // http://kb.mozillazine.org/Prevent_websites_from_disabling_new_window_features
user_pref("dom.disable_window_open_feature.location", true); // Always show the URL bar
user_pref("dom.disable_window_open_feature.resizable", true); // Allow to resize the window
user_pref("dom.disable_window_open_feature.status", true); // Always show the status bar

// De-crap new tab page, get rid of "directory tiles" ads:
    // http://thenextweb.com/apps/2014/08/28/mozilla-rolls-sponsored-tiles-firefox-nightlys-new-tab-page/
user_pref("browser.newtab.preload", false);
user_pref("browser.newtab.url", "about:blank");
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.introShown", true);
// Disable new tab tile ads & preload
// http://www.thewindowsclub.com/disable-remove-ad-tiles-from-firefox
// http://forums.mozillazine.org/viewtopic.php?p=13876331#p13876331
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtab.preload", false);

// Disable "Snippets" (Mozilla content shown on about:home screen)
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_mozilla-content
user_pref("browser.aboutHomeSnippets.updateUrl", "");

// Disable "Snippets" (Mozilla content shown on about:home screen)
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_mozilla-content
user_pref("browser.aboutHomeSnippets.updateUrl", "");

// Disable (broken) auto-scrolling via middle-click:
user_pref("general.autoScroll", false);

/*
 * Privacy & Security
 */

// Disable Google Safe Browsing
// Warning: see https://github.com/amq/firefox-debloat/issues/3 !
// Leaks your browsing history to Google. [Description](https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work)
user_pref("browser.safebrowsing.enabled", false);

// CIS 2.3.5 Block Reported Attack Sites
// http://kb.mozillazine.org/Browser.safebrowsing.malware.enabled
user_pref("browser.safebrowsing.malware.enabled", false);

// Disable safe browsing remote lookups for downloaded files.
// This leaks information to google.
// https://www.mozilla.org/en-US/firefox/39.0/releasenotes/
// https://wiki.mozilla.org/Security/Application_Reputation
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled",	false);

// Stop Firefox stats collecting
// Stability and performance reports to Mozilla. Telemetry sends usage statistics. [Description](https://www.mozilla.org/en-US/privacy/firefox/#health-report)
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);

// Disable Telemetry https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
user_pref("toolkit.telemetry.unified",		false);
// https://wiki.mozilla.org/Telemetry/Experiments
user_pref("experiments.supported",		false);
user_pref("experiments.enabled",		false);

// https://wiki.mozilla.org/Security/Tracking_protection
// https://support.mozilla.org/en-US/kb/tracking-protection-firefox
user_pref("privacy.trackingprotection.enabled",		true);
// https://support.mozilla.org/en-US/kb/tracking-protection-pbm
user_pref("privacy.trackingprotection.pbmode.enabled",		true);

// WebRTC leaks real IP
// Leaks real IP when using VPN/TOR. [Description and demo](https://github.com/diafygi/webrtc-ips)
user_pref("media.peerconnection.enabled", false);

// Disable Geolocation detect
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");

// Disable geotargeting:
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_geolocation-for-default-search-engine
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.search.geoip.url",	"");

// Don't reveal your internal IP
// Check the settings with: http://net.ipcalf.com/
// https://wiki.mozilla.org/Media/WebRTC/Privacy
user_pref("media-peerconnection.ice.default_address_only",		true);
user_pref("media.peerconnection.enabled",		false);

// getUserMedia
// https://wiki.mozilla.org/Media/getUserMedia
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator
user_pref("media.navigator.enabled",		false);
// https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager
user_pref("dom.battery.enabled",		false);
// https://wiki.mozilla.org/WebAPI/Security/WebTelephony
user_pref("dom.telephony.enabled",		false);
// https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
user_pref("beacon.enabled",		false);
// Prevent sites from sniffing clipboard content:
// https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/dom.event.clipboardevents.enabled
user_pref("dom.event.clipboardevents.enabled",		false);
// https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
user_pref("dom.enable_performance",		false);

// Disable sending of the health report
// https://support.mozilla.org/en-US/kb/firefox-health-report-understand-your-browser-perf
user_pref("datareporting.healthreport.uploadEnabled",		false);
// disable collection of the data (the healthreport.sqlite* files)
user_pref("datareporting.healthreport.service.enabled",		false);
// https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
user_pref("datareporting.policy.dataSubmissionEnabled",		false);

// https://wiki.mozilla.org/Tiles/Technical_Documentation#Ping
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-ping
user_pref("browser.newtabpage.directory.ping", "");
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-source
user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");

// disable heartbeat
// https://wiki.mozilla.org/Advocacy/heartbeat
user_pref("browser.selfsupport.url",		"");

/*
 * Development Tools
 */

// Enable eyedropper in dev tools:
user_pref("devtools.command-button-eyedropper.enabled", true);

// Dark theme for dev tools:
user_pref("devtools.theme", "dark");

/*
 * Extensions / Plugins
 */

// Allow install unsigned addons
user_pref("xpinstall.signatures.required", false);

// Disable metadata check phone-home: https://wiki.mozilla.org/Extension_Manager:Update_Checking
user_pref("extensions.getAddons.cache.enabled", false);

// Opt-out of add-on metadata updates
// https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
user_pref("extensions.getAddons.cache.enabled",   false);

// Updates addons automatically
// https://blog.mozilla.org/addons/how-to-turn-off-add-on-updates/
user_pref("extensions.update.enabled",		true);

// http://kb.mozillazine.org/Extensions.blocklist.enabled
user_pref("extensions.blocklist.enabled",		true);

// Flash plugin state - never activate
user_pref("plugin.state.flash",		0);
// If installed - ask to activate Flash. If not - don't nag about missing Flash plugin:
user_pref("plugins.notifyMissingFlash", false);

// https://wiki.mozilla.org/Firefox/Click_To_Play
// https://blog.mozilla.org/security/2012/10/11/click-to-play-plugins-blocklist-style/
user_pref("plugins.click_to_play",		true);

