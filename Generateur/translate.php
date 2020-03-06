<?php 
function trad($num,$lang) 
{

	$fichier = fopen("locale/trad".$lang,"r"); //On ouvre le fichier trad correspondant 
	$ligne=fgets($fichier); //On lit la première ligne
		 
	while ((!feof($fichier)) && ($num!=substr($ligne,0,2))) //Si nous ne sommes pas à la dernière ligne et que le numéro de la ligne n'est pas le bon on lit la ligne suivante
	{
		$ligne=fgets($fichier);
	}
	
	if (!feof($fichier)) //Si il ne s'agit pas de la fin du fichier c'est que nous avons trouvé la ligne
	{
		$tmp=substr($ligne,3); //On stock le contenu de la ligne, sert pour les tests, sinon return
		return $tmp; //On returne le contenu de la variable
	}
	
fclose($fichier); //On referme le fichier
}

	

 ?>

