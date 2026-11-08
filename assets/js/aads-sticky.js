/* ============================================================
   aads-sticky.js — A-ADS (a-ads.com) sticky banner · unit 2461362
   ------------------------------------------------------------
   Fixed top overlay with a close (X) button, per the network's
   official embed. Rendered on every page of the site.

   KILL SWITCH: set enabled=false below to remove the banner
   site-wide (single line, no template edits). Recommended
   before applying to Google AdSense — see README §A-ADS note.
   ============================================================ */

const AADS_CONFIG = {
  enabled: true,
  unitId: "2461362",
  zoneDomain: "acceptable.a-ads.com", // network-provided serving zone
  size: "Adaptive",
};

(function () {
  "use strict";

  if (!AADS_CONFIG.enabled) return;

  //  Markup preserved from the network's embed (BEGIN AADS AD UNIT 2461362).
  //  Attribute quoting normalized for the JS-injection parser; the
  //  checkbox-hack close button and all network-controlled bits are intact.
  var uid = "aadsstickymw7a5aw0";

  var tpl =
    '<div style="position: absolute; z-index: 99999">' +
      '<input autocomplete="off" type="checkbox" id="' + uid + '" hidden />' +
      '<div style="padding-top: auto; padding-bottom: 0;">' +
        '<div style="width:100%;height:auto;position:fixed;text-align:center;font-size:0;top:0;left:0;right:0;margin:auto">' +
          '<label for="' + uid + '" style="top: 50%;transform: translateY(-50%);right:24px;; position: absolute;border-radius: 4px; background: rgba(248, 248, 249, 0.70); padding: 4px;z-index: 99999;cursor:pointer">' +
            '<svg fill="#000000" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">' +
              '<polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "/>' +
            "</svg>" +
          "</label>" +
          '<div id="frame" style="width: 100%;margin: auto;position: relative; z-index: 99998;">' +
            '<iframe data-aa="' + AADS_CONFIG.unitId + '"' +
              ' src="//' + AADS_CONFIG.zoneDomain + "/" + AADS_CONFIG.unitId + "/?size=" + AADS_CONFIG.size + '"' +
              " style=\"border:0; padding:0; width:70%; height:auto; overflow:hidden; margin: auto\"" +
            "></iframe>" +
          "</div>" +
        "</div>" +
        "<style>" +
          "#" + uid + ":checked + div { display: none; }" +
        "</style>" +
      "</div>" +
    "</div>";

  //  Fixed overlay → takes no layout space → zero CLS regardless of
  //  injection timing. Deferred scripts run after the body exists.
  document.body.insertAdjacentHTML("beforeend", tpl);
})();
