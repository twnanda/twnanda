function showClock(obj){

//Aded by Takeshi Sugimoto on 2008/05/01 for SSL
var str = '';

if(obj.ssl == '1'){
	str = '<embed src="https://secure.clocklink.com/clocks/';
}
else{
	str = '<embed src="http://www.clocklink.com/clocks/';
}
//--

	str += obj.clockfile;
	str += "?";
		
	for( prop in obj ) {
		if( 'clockfile' == prop 
			|| 'width' == prop
			|| 'height' == prop
			|| 'wmode' == prop
			|| 'type' == prop
		) continue;
	
		//Added by takeshi on 2007/01/29 (to display mutibyte chars by using URL encoding)
		if(prop == "Title" || prop == "Message"){
			str += ( prop + "=" + obj[prop] + "&" );
		}
		else{
			str += ( prop + "=" + _escape(obj[prop]) + "&" );
		}
		//--
	}
	str += '" ';
	str += ' width="' + obj.width + '"';
	str += ' height="' + obj.height + '"';
	str += ' wmode="' + obj.wmode + '"';
	str += ' type="application/x-shockwave-flash">';
	
	document.write( str );
}

function _escape(str){
	str = str.replace(/ /g, '+');
	str = str.replace(/%/g, '%25');
	str = str.replace(/\?/, '%3F');
	str = str.replace(/&/, '%26');
	return str;
}

function showBanner(BannerLink){
	document.write(BannerLink);
}
