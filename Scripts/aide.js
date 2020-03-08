function aide(onOff,lang) {
  if (onOff==1) {
	if(lang=="FR") {
		window.document.getElementById('aide').setAttribute('class','row')
		window.document.getElementById('BoutonAide').innerHTML="Masquer l'aide"
		window.document.getElementById('BoutonAide').setAttribute('onclick','aide(0,"FR")  ; return false')
	}
	else if (lang=="EN") {  
		window.document.getElementById('aide').setAttribute('class','row')
		window.document.getElementById('BoutonAide').innerHTML="Hide help"
		window.document.getElementById('BoutonAide').setAttribute('onclick','aide(0,"EN")  ; return false')
		}
	} 
  
  else {
	 if(lang=="FR") {
		window.document.getElementById('aide').setAttribute('class','row pasvu')
		window.document.getElementById('BoutonAide').innerHTML="Afficher l'aide"
		window.document.getElementById('BoutonAide').setAttribute('onclick','aide(1,"FR") ; return false')
     }
     else if (lang=="EN") {
		window.document.getElementById('aide').setAttribute('class','row pasvu')
		window.document.getElementById('BoutonAide').innerHTML="Show help"
		window.document.getElementById('BoutonAide').setAttribute('onclick','aide(1,"EN") ; return false')
	}
  } // fin si
  return(false)
}
