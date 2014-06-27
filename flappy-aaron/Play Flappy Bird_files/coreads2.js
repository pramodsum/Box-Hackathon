// DFP using asynchronous, single request mode

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
    var gads = document.createElement("script");
    gads.async = true;
    gads.type = "text/javascript";
    var useSSL = "https:" == document.location.protocol;
    gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
    var node =document.getElementsByTagName("script")[0];
    node.parentNode.insertBefore(gads, node);
})();

googletag.cmd.push(function(){

// Set up Ad Units
googletag.defineSlot('/52449775/Flappy_Pre_Roll_New', [1, 1], 'div-gpt-ad-1399428070894-0').addService(googletag.pubads());
googletag.defineSlot('/52449775/NewFlappy_Welcome_336', [336, 280], 'div-gpt-ad-1400175129524-0').addService(googletag.pubads());
googletag.defineSlot('/52449775/NewFlappy_Game_Half_Page_L', [300, 600], 'div-gpt-ad-1400182553516-0').addService(googletag.pubads());
googletag.defineSlot('/52449775/NewFlappy_Game_Half_Page_R', [300, 600], 'div-gpt-ad-1400182553516-1').addService(googletag.pubads());
googletag.defineSlot('/52449775/NewFlappy_Mobile_320', [320, 50], 'div-gpt-ad-1400191699541-0').addService(googletag.pubads());


googletag.pubads().enableSingleRequest();
googletag.enableServices();


// Display Regular Ad Units
googletag.display('div-gpt-ad-1400175129524-0'); // Welcome 336
googletag.display('div-gpt-ad-1400182553516-0'); // Half Page L
googletag.display('div-gpt-ad-1400182553516-1'); // Half Page R
googletag.display('div-gpt-ad-1400191699541-0'); // Mobile Footer

});

// Display Pre-roll unit
document.write('<div id="div-gpt-ad-1399428070894-0" style="width: 1px; height: 1px;"></div>');
document.write('<style>#NewFlappy_Welcome_336 { position: relative; z-index: 1; }</style>');
window.addEventListener('load', function() {
    googletag.display('div-gpt-ad-1399428070894-0');
});



