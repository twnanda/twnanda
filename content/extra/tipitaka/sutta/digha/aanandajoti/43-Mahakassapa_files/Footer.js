var injectfooter = '';

// injectfooter += '<p class="NavBar2"><a href="../../Miscellaneous/Document-List.htm" title="complete list of documents on this website" target="_top" style="margin-right:1em;">document list</a>';

injectfooter += '<p class="NavBar3"><a href="../../Miscellaneous/About.htm" title="who is making this website and why" target="_top" style="margin-right:1em;">about</a>';

injectfooter += '<a href="../../download/index.htm" title="download the fonts or the whole website" target="_top" style="margin-right:1em;">fonts &amp; downloads</a>';

injectfooter += '<a href="../../Miscellaneous/Links.htm" title="links to other resources on the net" target="_top" style="margin-right:1em;">outside links</a>';

injectfooter += '<a href="../../Miscellaneous/Copyright-Notice.htm" title="information about copyright status of the documents" target="_top">copyright</a></p>';

// second nav bar 

injectfooter += '<p class="NavBar3"><i>my other websites:</i><br /><a href="http://www.photodharma.net/" title="5,000+ photographs in high-definition" target="_new" style="margin-right:1em;">Photo Dharma</a>';

injectfooter += '<a href="http://records.photodharma.net/" title="incidental texts, reflections and announcements" target="_new" style="margin-right:1em;">Dharma Records</a>';

injectfooter += '<a href="http://www.dharma-documentaries.net/" title="documentaries about Buddhism, its cultures and ecology" target="_new" style="margin-right:1em;">Dharma Documentaries</a>';

injectfooter += '<a href="http://www.sri-lankan-pali-texts.net/" title="image files of Pali texts in Sinhala script" target="_new" style="margin-right:1em;">Sri Lankan Pali Texts</a></p><p></p>';

// injectfooter += '<a href="http://www.godwin-home-page.net/" title="the meditation teachings of Godwin Samararatne" target="_new">Godwin Home Page</a></p><p></p>';

injectfooter += '<img src="../../images/ABT.jpg" alt="Ancient Buddhist Texts" style="width:240px; display:none;" />';

if (document.getElementById('audio-player')) {

injectfooter += '<script src="../../includes/lib/mediaelement.js"></script>';

injectfooter += '<script src="../../includes/lib/mediaelementplayer.js"></script>';

injectfooter += '<script>/* <![CDATA[ */	jQuery(document).ready(function($) {$("audio,video").mediaelementplayer({audioWidth: "360px",features: ["playpause","progress","tracks","volume"],videoVolume: "horizontal"})});/* ]]> */</script>';

injectfooter += '<link rel="stylesheet" href="../../includes/skin/mediaelementplayer.css" />';

};

injectfooter += '<div  class="center" style="width:400px;"><p class="Notice highlight" style="padding:0.5em;">this is a mirror or an offline copy of the main site<br />if you have any problems please try<br /><br /><a href="http://www.ancient-buddhist-texts.net">VISITING THE MAIN SITE</a><br /><br />which is constantly being updated</p>';

if (location.hostname == "www.ancient-buddhist-texts.net")
{
injectfooter += '<script type="text/javascript">(function() {var e=document.createElement("script");e.setAttribute("data-cfasync","false");e.src="//dsms0mj1bbhn4.cloudfront.net/assets/pub/shareaholic.js";e.type="text/javascript";e.async="true";e.onload=e.onreadystatechange=function(){var e=this.readyState;if(e&&e!="complete"&&e!="loaded")return;var t="57f68c3ab3ed8c39e43ac416489bc0cc";try{Shareaholic.init(t)}catch(n){}};var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})()</script>';
}

injectfooter +='<script type="text/javascript">jQuery(document).ready(function() { jQuery("p").each(function(index, value) {value.id = "p_" + index;}); $("html, body").animate({scrollTop: $(window.location.hash).offset().top}, 500);});</script>';

injectfooter += '</div>';

document.write(injectfooter);




/* disqus
if (location.hostname=="ancient-buddhist-texts.net"){
document.write('<div id="disqus_thread"></div>');
document.write('<script type="text/javascript">');
document.write("(function() {var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;");
document.write("dsq.src = 'http://ancient-buddhist-texts-2.disqus.com/embed.js';");
document.write("(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);})();");
document.write("</script>");
document.write('<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>');
document.write('<a href="http://disqus.com" class="dsq-brlink">blog comments powered by <span class="logo-disqus">Disqus</span></a>');
document.write('<p></p>'); 
}*/






