<?php
error_reporting(E_ALL | E_NOTICE | E_STRICT ) ;

/**
* generer.php
*
* Ce programme permet la génération de données selon un fichier de configuration écrit en XML.
* Il utlise le fichier udg.xml pour tester la validité du fichier de génération proposé.
*
* @version 1.3
* @author Gilles HUNAULT <gilles.hunault@univ-angers.fr>
*
* @version 1.2
* DANDONNEAU Baptiste   baptiste.dandonneau@etud.univ-angers.fr
* GENDRON Bastien       pierre.gendron@etud.univ-angers.fr
* GUIFFANT Romain       romain.guiffant@etud.univ-angers.fr
* TAVENON Anthony       anthony.tavenon@etud.univ-angers.fr
*
* @version 1.1
* Maxence D�Z�QUE
* Thomas  HEURTEBIZE
* Hugo    MOUB�CHE
*
* @version 1.0
* @author Brice Harismendy <brice.harismendy@etud.univ-angers.fr>
* @author Corentin Couvry <corentin.couvry@etud.univ-angers.fr>
* @author Antoine Legoubé <antoine.legoube@etud.univ-angers.fr>
* @author Alban Baumard <alban.baumard@etud.univ-angers.fr>
*
* @project Generateur_de_donnees
*/

/**
* Déclaration de variables globales
*/
//appel des fonctions depuis le dossier script de l'interface

require('generer_aide.php');
require('Librairie/lib.php');

$TablesSorties = array();

/*
TablesSorties = Tableau contenant les tables déjà sorties
Elles servent dans le cas où on veut une donnée reference (tables liées), on va piocher dedans.
*/

// Fichier XML sur le premier parmètre
// Test de l'existence du premier paramètre en ligne de commande

if (!isset($argv[1])) {
    echo "\n" ;
    echo " generer  : génération de données selon un fichier de configuration XML.\n\n" ;
    echo " syntaxe  : generer fichierXML [ Dossier_de_sortie/ ].\n" ;
    echo " exemples : generer trains.xml \n" ;
    echo "            generer banques.xml Data/\n\n" ;
    echo " utiliser generer --help pour plus d'explications.\n\n" ;
    #echo " Aucun fichier n'a été donné en paramètre\n";
    #echo " Il faut ajouter le nom du fichier XML après le generer.php\n";
    aide() ;
    exit(1);
} ; # fin si

$arg1 = $argv[1] ;  // il faut savoir si c'est --aide ou le nom d'un fichier XML

if ($arg1=="--help") { $arg1 = "--aide" ; } ;

if ($arg1=="--aide") {
   $arg2 = "" ;
   if (isset($argv[2])) { $arg2 = $argv[2] ; } ;
   aide($arg2) ;
   exit(1) ;
} else {
    $fichierXML = $argv[1];        //récupération du nom du fichier XML
} ; # fin si

// Test pour verifier l'accès au fichier

if (!file_exists($fichierXML)) {
    echo "Fichier $fichierXML non vu.\n";
    exit(1);
} ; # fin si

// Sortie sur le second paramètre

$sortie = "Sorties/" ; //dossier de sortie par défaut

// Test de l'existence du second paramètre en ligne de commande

$arg2  = "" ;
if (isset($argv[2])) {

    if (!file_exists($argv[2])) {
        echo "Dossier intouvable pour le second paramètre\n";
        echo "Il faut ajouter un nom de dossier valable pour la sortie ou ne rien mettre \n" ;
        echo "qu'elle soit automatiquement dans� Generateur/Sorties\n";
        exit(1);
    } else {
        $sortie = $argv[2]."/"; //récupération du dossier
        $arg2  = $argv[2]."/"; //récupération du dossier
   } # fin si

} # fin si

$PositionRapport = $sortie."Rapport_De_Generation.txt";
// timestamp en millisecondes du début du script (en PHP 5)
$timestamp_debut = microtime(true);

$dom = new DOMDocument();


if (!$dom->load($fichierXML) ||( !$dom->schemaValidate("udg.xsd"))) {
    echo "le fichier XML $fichierXML est invalide";
    exit(1);
} # fin si

// création ou suppression du contenu du fichier contenant le rapport

$fp = fopen($PositionRapport, "w+") ;
fclose($fp);

$donnees = array();   //matrice qui contiendra les données
$DonneesRapport = array();
$numtable = 0;       //sert pour connaitre la table sur lequel on travail pour le rapport de génération
$lignemat = 0;      //nombre de colonne de la matrice
$moduloseed=5;

$listeTable = $dom->getElementsByTagName("Table");//récupération des tables

// traitement des différentes tables

$nblParTable = array() ;

$n = 10 ; # pow(9910,5) ; //nombre de lignes max stockées par passage (constante)
$n = 99 ; # pow(9910,5) ; //nombre de lignes max stockées par passage (constante)
$n = 5 ; # pow(10,5) ; //nombre de lignes max stockées par passage (constante)    VALEUR POUR TEST
$n = pow(10,5) ; //nombre de lignes max stockées par passage (constante) VALEUR DE PRODUCTION

foreach ($listeTable as $table) {

  $numtable++;
  $NomTable     = "???" ;
  $EltsParam    = $table->getElementsByTagName("Parametres") ;

  $EltsNomTable = $EltsParam[0]->getElementsByTagName("NomTable") ;
  $NomTable     = $EltsNomTable[0]->getAttribute("nom") ;
  echo "\n table $numtable : $NomTable \n" ;

    $seed = null;//mise à zéro de la seed de génération
    $moduloseed = $moduloseed * $moduloseed;//sert a générer une seed unique
    $fp = fopen($PositionRapport, "a+");
    fputs($fp,"\n==================================================\n\n") ;
    fputs($fp, "Table " . $numtable . " : " . $NomTable . "\n");//entre l'entête du rapport de génération (Table n°1 ....)

    // mise a zéro de la matrice des données

    $donnees = null ;

    // remise a 0 des données du rapport

    $DonneesRapport = null;

    $lignemat = 0;

    // variable incrementée permettant l'identification pour IDS (genererIDS.php) pour chaque table
    $compteurPassage = 0 ;

    // récupération du nombre de ligne pour la table en cours

    $listeRows = $table->getElementsByTagName("NbLigne") ;
    $nbligne   = valeurAttribut($listeRows[0],"valeur",0) ;
    $nblParTable[$numtable] = $nbligne ;

    if ($nbligne == 0) {
       echo "\n Vous demandez à générer 0 lignes !?! STOP.\n" ;
       exit(1) ;
    } # fin si

    $listeFiles = $table->getElementsByTagName("NomTable") ; //récupération du nom de la table
    $nomfic     = valeurAttribut($listeFiles[0],"nom","????") ;

    $listeSeeds = $table->getElementsByTagName("Graine") ; //récupération de la seed
    $seed       = valeurAttribut($listeSeeds[0],"valeur","12345") ;

    // création d'une seed si elle n'est pas dans le XML

    if ($seed == null) { $seed = make_seed($moduloseed) ;  }

    // au final, implémentation de la seed

    srand($seed) ;

    // ajout de la seed dans le rapport

    $fp = fopen($PositionRapport, "a+");

    fputs($fp, "\n==================================================\n\n");
    fputs($fp, "Données Générales : \n\n");
    fputs($fp, "   - nombre de lignes produites  : " . $nbligne . " \n") ;
    fputs($fp, "   - la graine de génération est : " . $seed . " \n") ; //on écrit la seed
    fputs($fp, "\n") ;
    #fputs($fp, "==================================================\n");
    fclose($fp);

    //-------------------------------------------------------------
    // Vérification et suppression des fichiers de sorties existants
    //-------------------------------------------------------------

    $listesortie = $table->getElementsByTagName("Sortie");

    foreach ($listesortie as $valsortie) {//foreach appellant les fonctions d'écriture en sortie
        if (file_exists($sortie.$nomfic.".csv") && ($valsortie->hasAttribute("CSV")) && ($valsortie->getAttribute("CSV") == "oui"))
            unlink($sortie.$nomfic.".csv");
        if (file_exists($sortie.$nomfic.".xml") && ($valsortie->hasAttribute("XML")) && ($valsortie->getAttribute("XML") == "oui"))
            unlink($sortie.$nomfic.".xml");
        if (file_exists($sortie.$nomfic.".sql") && ($valsortie->hasAttribute("SQL")) && ($valsortie->getAttribute("SQL") == "oui"))
            unlink($sortie.$nomfic.".sql");
        if (file_exists($sortie.$nomfic.".json") && ($valsortie->hasAttribute("JSON")) && ($valsortie->getAttribute("JSON") == "oui"))
            unlink($sortie.$nomfic.".json");
    } # fin pour chaque listesortie

    $listeData = $table->getElementsByTagName("Donnee") ; // récupération des différent champ a générer
    $nbligneagenerer     = $n ; // initialisation du nombre de ligne max a générer par passage qui va être modifié
##    $nbedepassageInitial = $nbligne / $n; //initialisation du nombre de passage (constante)
    $nbedepassageInitial = $nblParTable[$numtable] / $n; //initialisation du nombre de passage (constante)
    echo("Nombre de lignes en tout= ".$nbligne."\n");
    echo("Nombre de lignes à générer en une fois = ".$n."\n");
    #echo("Nombre de passages Initial = ".$nbedepassageInitial."\n");
    $nbedepassage = $nbedepassageInitial; //on récupère le nombre de passage qui va évoluer avec la génération de donnée
    $PremierPassage = 0;
    $numPassage = 0 ;

    while ($nbedepassage > 0) {

        $numPassage++ ;
        $donnees = NULL;
        $lignemat = 0;
        if ($nbedepassage < 1) { //si il reste moins d'un passage (- de 100 000 lignes) on met le nombre de ligne a générer restante
            $nbligneagenerer = $nbligne % $n;
            echo("Dernier passage, il y aura ".$nbligne % $n." lignes à générer.\n");
        } # fin si
        # echo("Je passe une fois ici, et je prends ".$nbligneagenerer." valeurs !\n");

        //--------------------------------------------------------------------------------------------
        // GENERATION DES DONNEES (genererDonnees() est dans Librairie/genererDonnees.php )
        //--------------------------------------------------------------------------------------------

        genererDonnees($listeData, $donnees, $DonneesRapport, $PremierPassage, $nbligneagenerer, $nbligne, $lignemat, $nbedepassage, $nbedepassageInitial, $compteurPassage,$TablesSorties);

        //--------------------------------------------------------------------------------------------
        // ECRITURE DES DIFFERENTS FICHIERS EN SORTIE
        //--------------------------------------------------------------------------------------------

        $nomClee = nomClePerso($listeData); //on teste l'existence d'une clee personnalisé ex : IDS

        ecrireFichiers($table, $TablesSorties, $donnees, $nbligneagenerer, $sortie, $PremierPassage, $nomfic, $nomClee, $listesortie,$numPassage,$fichierXML);

        //--------------------------------------------------------------------------------------------
        // GENERATION DU RAPPORT A PARTIR DES DONNEES
        //--------------------------------------------------------------------------------------------
#echo " AVANT genererRapport le tableau DonneesRapport est " ;
#print_r($DonneesRapport) ;
        genererRapport($listeData, $donnees, $DonneesRapport, $PremierPassage, $nbligneagenerer);

        $PremierPassage = 1;//on indique qu'il y a eu au moins un passage

        $nbedepassage--;

    } # fin tant que nb de passage

    FoncEcrireRapport($DonneesRapport, $nbligne,$PositionRapport);

} ; # fin pour chaque table

## messages de fin et cloture du rapport

// timestamp en millisecondes de la fin du script
$timestamp_fin = microtime(true);
$difference_ms = $timestamp_fin - $timestamp_debut;
date_default_timezone_set('Europe/Paris');
setlocale(LC_TIME, 'fr_FR.utf8','fra');
$debutRapport   = "" ;
$debutRapport  .= "RAPPORT de la commande generer $fichierXML $arg2\n" ;
$debutRapport  .= "La génération du ".strftime("%A %d %B %Y")." à ".strftime("%H:%M:%S") ;
$debutRapport  .= " a duré : ".number_format($difference_ms,2)." secondes\n" ;
if ($numtable==1) {
   $debutRapport  .= "Une table a été générée.\n" ;
} else {
   $debutRapport  .= $numtable." tables ont été générées.\n" ;
} ; # fin si
#$debutRapport  .= "==================================================\n";
$AncienContenu = file($PositionRapport);
array_unshift($AncienContenu,$debutRapport);
$new_content = join('',$AncienContenu);
$fp = fopen($PositionRapport,'w');
$write = fwrite($fp, $new_content);
fclose($fp);
echo "Génération effectuée en " .number_format($difference_ms,2)." secondes\n" ;             ;
?>