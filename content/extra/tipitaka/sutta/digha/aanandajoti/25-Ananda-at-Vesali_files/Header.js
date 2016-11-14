var injectheader = '';

// top row navbar

injectheader += '<a href="../../index.htm" target="_top" style="margin-right:1em;" title="Ancient Buddhist Texts Home Page">ABT&#160;Home</a>';

injectheader += '<a href="../../Buddhist-Texts/BT-index.htm" target="_top" style="margin-right:1em;" title="Original Texts in Pali, Sanskritised Prakrit, and Sanskrit - Comparative Editions of the Texts - Studies of their Collection and Prosody">Original&#160;Texts</a>';

injectheader += '<a href="../../Texts-and-Translations/TT-index.htm" target="_top" style="margin-right:1em;" title="Buddhist Texts in the Original Languages, together with Annotated Translations">Texts&#160;&amp;&#160;Translations</a>';

injectheader += '<a href="../../English-Texts/ET-index.htm" target="_top" style="margin-right:1em;" title="Reworked Translations presented with less Notes and in English Only">English</a>';

injectheader += '<a href="../../Textual-Studies/TS-index.htm" target="_top" title="Prosody Studies including Original Texts on the Subject, and Articles by Various Authors">Prosody</a><br style="margin-bottom:10px;" />';

// 2nd row navbar

injectheader += '<a href="../../Reference/RF-index.htm" target="_top" style="margin-right:1em;" title="A Selection of Works useful for Reference">Reference</a>';

injectheader += '<a href="../../Maps/MP-index.htm" target="_top" style="margin-right:1em;" title="A Large Collection of Maps relating to the Buddha\'s Life and Buddhist History">Maps</a>';

injectheader += '<a href="../../Audio/AU-index.htm" target="_top" style="margin-right:1em;" title="A Large Collection of Audio Files, both Short and Long">Audio</a>';

// injectheader += '<a href="../../Ebooks/EB-index.htm" target="_top" style="margin-right:1em;" title="A Collection of E-books for your E-Reader">E-books</a>';

// injectheader += '<a href="../../Ebooks/Flipbook-index.htm" target="_top" style="margin-right:1em;" title="A Collection of PDFs, together with Full Colour Covers">Flipbooks</a>';

// search on request

injectheader += '<span id="clicksearch" title="Search Facility"><img src="../../images/search.png" alt="Search Button" style="margin-bottom:-5px;"  /></span><p align="center"><script type="text/javascript" >$( "#clicksearch" ).click(function() {var s = document.createElement("script"); s.type = "text/javascript"; s.src = "../../includes/gcse.js"; $("head").append(s); $( "#GSearch" ).delay(1000).fadeToggle(2000);});</script></p><div id="GSearch"><p class="diacritics-notice"><span style="color: #7f9861; font-weight:normal;">you must use diacritics when searching</span></p><gcse:search></gcse:search></div>';

document.write(injectheader);

// tooltips
// get all tags of a class

getclass = function(cl) {
 var retnode = [];
 var myclass = new RegExp('\\b'+cl+'\\b');
 var elem = document.getElementsByTagName('*');
 for (var i = 0; i < elem.length; i++) {
 var classes = elem[i].className;
 if (myclass.test(classes)) {
 retnode.push(elem[i]);
 }
 }
 return retnode;
};

window.onload = function(e) {

// add javascript to TT class

 var TT = getclass('TT');
 for (i = 0; i < TT.length; i++) {
 TT[i].setAttribute("onMouseover","this.childNodes[0].style.display='block'; adjustChildDiv(this)");
 TT[i].setAttribute("onMouseout","if (!this.set) {this.childNodes[0].style.display='none';}");
 TT[i].setAttribute("onClick","if (this.set) { this.set = null; } else {this.set = 1;}");
 }
};

function adjustChildDiv(elem) {
 var left = -224;
 if(window.innerWidth<elem.offsetLeft + elem.childNodes[0].offsetLeft + elem.childNodes[0].offsetWidth) elem.childNodes[0].style.left = window.innerWidth-elem.offsetLeft-elem.childNodes[0].offsetWidth+'px';
 else if(elem.offsetLeft + elem.childNodes[0].offsetLeft<0) elem.childNodes[0].style.left = left - (elem.offsetLeft + elem.childNodes[0].offsetLeft)+'px';
 else if(window.innerWidth > elem.offsetLeft + left + elem.childNodes[0].offsetWidth && elem.offsetLeft + left > 0) elem.childNodes[0].style.left = left+'px';
};



