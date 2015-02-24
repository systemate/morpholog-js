"use strict";

window.MorphologJS = {};


(function(){

	var URL = "http://morpholog.systemate.ru/";
	
	var ajax = function(action,data,cb){
		$.getJSON(URL+action+"?_callback=?",data,function(data){
			if(!data.exception)
				cb(data.data);
			else{
				console.log("Morpholog service error: ",data);
				cb(null);
			}
		});
	};

	MorphologJS.declinePhrase = function(phrase,wordCase,cb){
		ajax("declinePhrase",{phrase:phrase,wordCase:wordCase},cb)
	};

	MorphologJS.getGender = function(phrase,cb){
		ajax("getGender",{phrase:phrase},cb)
	};

	MorphologJS.toNumeral = function(n,wordCase,gender,live,cb){
		ajax("toNumeral",{number:n,wordCase:wordCase,gender:gender,live:live},cb)
	};

	MorphologJS.formatNumber = function(n,format,space,floatDelim,cb){
		ajax("formatNumber",{number:n,format:format,space:space,floatDelim:floatDelim},cb)
	};

	MorphologJS.formatTimeDiff = function(diff,round,toNumeral,cb){
		ajax("formatTimeDiff",{diff:diff,round:round,toNumeral:toNumeral},cb)
	};

	MorphologJS.detectFWords = function(text,cb){
		ajax("detectFWords",{text:text},cb)
	};

})();