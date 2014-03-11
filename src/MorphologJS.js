"use strict";

window.MorphologJS = {};


(function(){

	var URL = "http://service.systemate.ru/morpholog/dispatcher/MorphologMap";
	
	var ajax = function(action,data,cb){
		$.getJSON(URL+"."+action+"?_callback=?",data,function(data){
			if(data.success)
				cb(data.data);
			else{
				console.log("Morpholog service error: ",data);
				cb(null);
			}
		});
	};

	MorphologJS.declinePhrase = function(text,wordCase,cb){
		ajax("declinePhrase",{text:text,"case":wordCase},cb)
	};

	MorphologJS.getGender = function(text,cb){
		ajax("getGender",{text:text},cb)
	};

	MorphologJS.toNumeral = function(n,wordCase,gender,live,cb){
		ajax("toNumeral",{number:n,"case":wordCase,gender:gender,live:live},cb)
	};

	MorphologJS.formatNumber = function(n,format,cb){
		ajax("formatNumber",{number:n,format:format},cb)
	};

	MorphologJS.formatTimeDiff = function(diff,round,toNumeral,cb){
		ajax("formatTimeDiff",{diff:diff,round:round,toNumeral:toNumeral},cb)
	};

	MorphologJS.detectFWords = function(text,cb){
		ajax("detectFWords",{text:text},cb)
	};

})();