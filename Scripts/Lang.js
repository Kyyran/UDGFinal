function Change_lang(num) {
var url = window.location.href;
var lang;

if (num == 1) {
	lang="FR";
	}
else if (num == 2){
	lang="EN";
	}
else {
	alert('Merci de ne pas changer ceci manuellement, utilisez le menu des langues, en haut à gauche');
	}

if (window.location.search == "") 
{
window.location.href = url + "?lang=" + lang;
}

else if (num == 1) {
	url = (url.slice(0, -2));
	window.location.href = url + lang; 	
	}

else if (num == 2) {
	url=(url.slice(0, -2));
	window.location.href = url + lang; 	
	}
}
