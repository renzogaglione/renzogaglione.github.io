/*
jQuery Fieldtag Plugin
    * Version 1.1
    * 2009-05-07 10:10:35
    * URL: http://ajaxcssblog.com/jquery/fieldtag-watermark-inputfields/
    * Description: jQuery Plugin to dynamically tag an inputfield, with a class and/or text
    * Author: Matthias Jäggli
    * Copyright: Copyright (c) 2009 Matthias Jäggli under dual MIT/GPL license.
*/

(function($){$.fn.fieldtag=function(options){var opt=$.extend({markedClass:"tagged",standardText:false},options);$(this).focus(function(){if(!this.changed){this.clear();}}).blur(function(){if(!this.changed){this.addTag();}}).keyup(function(){this.changed=($(this).val()?true:false);}).each(function(){this.title=$(this).attr("title");if($(this).val()==$(this).attr("title")){this.changed=false;}
this.clear=function(){if(!this.changed){$(this).val("").removeClass(opt.markedClass);}}
this.addTag=function(){$(this).val(opt.standardText===false?this.title:opt.standardText).addClass(opt.markedClass);}
if(this.form){this.form.tagFieldsToClear=this.form.tagFieldsToClear||[];this.form.tagFieldsToClear.push(this);if(this.form.tagFieldsAreCleared){return true;}
this.form.tagFieldsAreCleared=true;$(this.form).submit(function(){$(this.tagFieldsToClear).each(function(){this.clear();});});}}).keyup().blur();return $(this);}})(jQuery);


/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

$(document).ready(function(){
	
	//global vars
	var form = $("#contactForm");
	var name = $("#name");
	var nameInfo = $("#nameInfo");
	var email = $("#email");
	var emailInfo = $("#emailInfo");
	var message = $("#message");
	var messageInfo = $("#messageInfo");
	
	
	name.fieldtag();
	email.fieldtag();
	message.fieldtag();
		
	//On blur
	//name.blur(validateName);
	//email.blur(validateEmail);
	//message.blur(validateMessage);
	//On key press
	//name.keyup(validateName);
	//email.keyup(validateEmail);
	//message.keyup(validateMessage);
	//On Submitting
	form.submit(function(){
		if(validateName() & validateEmail() & validateMessage())
			return true
		else
			return false;
	});
	
	//validation functions
	function validateEmail(){
		//testing regular expression
		var a = $("#email").val();
		var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
		//if it's valid email
		if(filter.test(a)){
			email.removeClass("form-msg-error");
			emailInfo.text("");
			emailInfo.removeClass("form-msg-error");
			return true;
		}
		//if it's NOT valid
		else{
			email.addClass("form-msg-error");
			emailInfo.text("L'email deve essere valida poichè serve per ricontattarti.");
			emailInfo.addClass("form-msg-error");
			return false;
		}
	}
	function validateName(){
		//if it's NOT valid
		if(name.val().length < 4){
			name.addClass("form-msg-error");
			nameInfo.text("Il nome è troppo corto.");
			nameInfo.addClass("form-msg-error");
			return false;
		}
		//if it's valid
		else{
			name.removeClass("form-msg-error");
			nameInfo.text("");
			nameInfo.removeClass("form-msg-error");
			return true;
		}
	}
	function validateMessage(){
		//if it's NOT valid
		if(message.val().length < 4){
			message.addClass("form-msg-error");
			messageInfo.text("Il messaggio è troppo corto.");
			messageInfo.addClass("form-msg-error");
			return false;
		}
		//if it's valid
		else{
			message.removeClass("form-msg-error");
			messageInfo.text("");
			messageInfo.removeClass("form-msg-error");
			return true;
		}
	}
});