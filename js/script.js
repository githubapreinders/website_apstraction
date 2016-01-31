function loaded()
{
	var lang = getParameterValue("lang");
	if (lang != "") String.locale = lang;
	document.title = _(document.title);
	localizeHTMLTag("introduction");
	localizeHTMLTag("portfolio_");
	localizeHTMLTag("vaardigheden");
	localizeHTMLTag("contact");
	localizeHTMLTag("introtekst");
	localizeHTMLTag("introduction_");
	localizeHTMLTag("vaardigheden2");
	localizeHTMLTag("wieisapstraction");
	localizeHTMLTag("aboutme");
	localizeHTMLTag("modal_impatient1");
	localizeHTMLTag("modal_impatient2");
	localizeHTMLTag("modal_impatient3");
	localizeHTMLTag("modal_impatient4");
}


function modal_imp_loaded()
{
	var lang = getParameterValue("lang");
	if (lang != "") String.locale = lang;
	document.title = _(document.title);
	localizeHTMLTag("modal_impatient1");
    	localizeHTMLTag("modal_impatient2");
    	localizeHTMLTag("modal_impatient3");
    	localizeHTMLTag("modal_impatient4");

}


function modal_taf_loaded()
{
var lang = getParameterValue("lang");
	if (lang != "") String.locale = lang;
	localizeHTMLTag("modal_tafeltrainer1");
    	localizeHTMLTag("modal_tafeltrainer2");
    	localizeHTMLTag("modal_tafeltrainer3");
    	localizeHTMLTag("modal_tafeltrainer4");
    	localizeHTMLTag("modal_tafeltrainer5");
    	localizeHTMLTag("modal_tafeltrainer6");

}

function modal_gou_loaded()
{
var lang = getParameterValue("lang");
	if (lang != "") String.locale = lang;
	localizeHTMLTag("modal_gouda1");
    	localizeHTMLTag("modal_gouda2");
    	localizeHTMLTag("modal_gouda3");
}

function modal_gro_loaded()
{
var lang = getParameterValue("lang");
	if (lang != "") String.locale = lang;
	localizeHTMLTag("modal_group1");
    	localizeHTMLTag("modal_group2");
    	localizeHTMLTag("modal_group3");
}


function modal_ide_loaded()
{
var lang = getParameterValue("lang");
	if (lang != "") String.locale = lang;
	localizeHTMLTag("modal_ideas1");
    	localizeHTMLTag("modal_ideas2");
    	localizeHTMLTag("modal_ideas3");
}






/* Some helper functions: */

var _ = function (string) {
	return string.toLocaleString();
};

function localizeHTMLTag(tagId)
{
	tag = document.getElementById(tagId);
	tag.innerHTML = _(tag.innerHTML);
}

function getParameterValue(parameter)
{
	parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + parameter + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if(results == null)
		return "";
	else
		return results[1];
}