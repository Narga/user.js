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

// Turn off Firefox Hello
// Firefox connects to third-party (Telefonica) servers without asking for permission [Description](https://support.mozilla.org/en-US/kb/firefox-hello-video-and-voice-conversations-online)
user_pref("loop.enabled", false);

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

// https://wiki.mozilla.org/Firefox/Click_To_Play
// https://blog.mozilla.org/security/2012/10/11/click-to-play-plugins-blocklist-style/
user_pref("plugins.click_to_play",		true);

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

// Disable "Snippets" (Mozilla content shown on about:home screen)
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_mozilla-content
user_pref("browser.aboutHomeSnippets.updateUrl", "");

// Disable "Snippets" (Mozilla content shown on about:home screen)
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_mozilla-content
user_pref("browser.aboutHomeSnippets.updateUrl", "");

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

// Disable SSDP
// https://bugzil.la/1111967
user_pref("browser.casting.enabled",		false);

// Disable support openh264 codec for peer-to-peer video when disable Hello
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_media-capabilities
// http://andreasgal.com/2014/10/14/openh264-now-in-firefox/
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.url", "");

// Stop predictive connections to sites when the user hovers their mouse over thumbnails on the New Tab Page https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_speculative-pre-connections
user_pref("network.http.speculative-parallel-limit",		0);d
// Disable auto-update checking https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_auto-update-checking
user_pref("browser.search.update", false);

/*
 * Firefox Performance
 */

// Relocate cache only to RAM
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", "-1");

// Enable HTTP cache to get rid of most UI lags and other browser slowness issues
// https://bugzilla.mozilla.org/show_bug.cgi?id=913807
user_pref("browser.cache.use_new_backend", "-1");

*
 * Firefox Performance
 */

// Relocate cache only to RAM
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", "-1");

// Enable HTTP cache to get rid of most UI lags and other browser slowness issues
// https://bugzilla.mozilla.org/show_bug.cgi?id=913807
user_pref("browser.cache.use_new_backend", "-1");

