// ==UserScript==
// @name         No More South Park Ads
// @version      1.0.0
// @description  Skip all ads from South Park websites
// @author       CassioMaciell
// @match        https://www.southparkstudios.com.br/episodios/*
// @match        https://www.southparkstudios.com/episodes/*
// @match        https://www.southpark.de/folgen/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=southparkstudios.com
// @updateURL    https://github.com/cassiomaciell/userscripts/raw/main/NoMoreSouthParkAds.user
// @downloadURL  https://github.com/cassiomaciell/userscripts/raw/main/NoMoreSouthParkAds.user
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function disableAds() {
        if (typeof EdgePlayer !== "undefined") {
            EdgePlayer.getPlayer().ads.skipAllAdRequests();
            return
        }

        setTimeout(disableAds, 1000);
    }

    if (["complete", "loaded", "interactive"].includes(document.readyState)) {
        disableAds();
    } else {
        document.addEventListener("DOMContentLoaded", disableAds);
    }
})();