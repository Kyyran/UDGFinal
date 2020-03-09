<?php
#   # (gH)   -_-  index.php  ;  TimeStamp (unix) : 20 Avril 2017 vers 19:49
include("translate.php");

$lang=htmlspecialchars($_GET["lang"]);
if (!isset($_GET["lang"])) {
  $lang="FR";
}

setcookie(lang_Cookie, $lang);
if ($_GET["lang"]=="FR") { 
    $aide="aide.html"; 
  }else{ 
    $aide="help.html"; 
  }

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html ; charset= utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title><?php echo trad("01",$lang) ?></title>
    <link href="Style/css/bootstrap.css" rel="stylesheet" type = "text/css"/>
    <link href="Style/css/style.css" rel="stylesheet" type = "text/css"/>
    <script src="Scripts/aide.js" type="text/javascript"></script>
    <script src="Scripts/GestionForm.js" type="text/javascript"></script>
    <script src="Scripts/exemple.js" type="text/javascript"></script>
    <script src="Scripts/validation.js" type="text/javascript"></script>
    <script src="Scripts/recuperation.js" type="text/javascript"></script>
    <script src="Scripts/jQuery.js" type="text/javascript"></script>
    <script src="Scripts/Lang.js" type="text/javascript"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" type="text/javascript"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body onload = "GestionImportFichier();">
    <div class="col-xs-12 col-sn-12 col-md-12 col-lg-12">
      <!-- a href="Aide.xhtml"  onclick="window.open(this.href);return false;" id="BoutonAide" class="btn btn-lg btn-info">Aide</a -->
      <div id="menu">
        <ul>
          <li>
            <a>
              <img src="./Style/image/Flags/fr.png" title="Français" onclick="Change_lang(1)" />
            </a>
            <a>
              <img src="./Style/image/Flags/en.png" title="Anglais" onclick="Change_lang(2)" />
            </a>
          </li>
        </ul>
      </div>
      <span onclick="aide(1,'<?php echo $lang ; ?>')" id="BoutonAide" class="btn btn-lg btn-info" style="z-index: 9999"><?php echo trad("41",$lang); ?> </span>
    </div>

    <div class="jumbotron">
      <div class ="container">
        <div class="row">
          <div class ="col-xs-2 col-sn-2 col-md-2 col-lg-2">
            <img alt="icone du g&eacute;n&eacute;rateur" src="logo-site.png" height="100" width="100"/>
          </div>
          <div class ="col-xs-10 col-sn-10 col-md-10 col-lg-10"><!--le titre prend 10 colonnes -->
            <h1><span class="titreUDG"> <?php echo trad("02",$lang); ?> <span class="ghRouge"><b> <?php echo trad("03",$lang); ?> </b> </span> <?php echo trad("04",$lang); ?></span></h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container"><!-- pour l'aide -->
      <div class="row pasvu" id="aide">
        <?php
        include("$aide") ;
        ?>
      </div>
    </div>

    <div class="container"><!--d&eacute;but formulaire-->
      <div class="row">
        <div class="col-xs-13 col-sn-13 col-md-13 col-lg-13">
          <div class="titleprghp">
            <span class="prg"> <?php echo trad("05",$lang); ?> </span>
            <button onclick="RAZ();" id="RAZ" class="btn btn-default"> <?php echo trad("06",$lang); ?> </button>
          </div>
        </div>
      </div>
      <form id="formulaire" method="post" onsubmit="return validationEnvoi();" action = "Generateur/TraitementsForm.php">
        <!-- Nom de la feuille de donnees -->
        <div class="row">
          <div class="col-xs-12 col-sn-12 col-md-12 col-lg-12">
            <div class="form-horizontal">
              <div class="form-group">
                <label class ="col-xs-2 col-sn-2 col-md-2 col-lg-2" for = "NomFeuilleDeDonnees"> <?php echo trad("07",$lang); ?> </label>
                <div class = "col-xs-5 col-sn-5 col-md-5 col-lg-5">
                  <input type="text" class="form-control required" name="NomProjet" onchange="ValidationInputProjet('NomFeuilleDeDonnees');" id = "NomFeuilleDeDonnees" value =""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--d&eacute;but du formulaire dynamique-->
        <div id="tables">
          <div id="table0" class = "well row table bordFin">
            <div class="row">
              <div class="col-xs-12 col-sn-12 col-md-12 col-lg-12">
                <div class="form-horizontal">
                  <div class="form-group DGT">
                    <label class ="col-xs-2 col-sn-2 col-md-2 col-lg-2" for = "NomTable0"><?php echo trad("08",$lang); ?> </label>
                    <div class = "col-xs-2 col-sn-2 col-md-2 col-lg-2">
                      <input type="text" class="form-control required input-change" id = "NomTable0" onchange="ValidationInputParametreTable(0,'NomTable');validationNomTable(0);" name ="NomTable0" value =""/>
                    </div>
                    <label  class ="col-xs-2 col-sn-2 col-md-2 col-lg-2" for = "NombreDeLigne0"> <?php echo trad("09",$lang); ?></label>
                    <div class = "col-xs-2 col-sn-2 col-md-2 col-lg-2">
                        <input type="text" class="form-control required input-change" id ="NombreDeLigne0" onchange="ValidationInputParametreTable(0,'NombreDeLigne');" name="NombreDeLigne0" value =""/>
                    </div>
                    <label class ="col-xs-2 col-sn-2 col-md-2 col-lg-2"  for = "GRAINE0"> <?php echo trad("10",$lang); ?></label>
                    <div class = "col-xs-2 col-sn-2 col-md-2 col-lg-2">
                      <input type="text" class="form-control input-change" id ="GRAINE0" onchange="ValidationInputParametreTable(0,'GRAINE');" name="GRAINE0" value =""/>
                    </div>
                    <label class ="col-xs-2 col-sn-2 col-md-2 col-lg-2 FormatDeSortie"> <?php echo trad("11",$lang); ?> </label>
                    <label class="formatSortie checkbox-inline label-checkbox" for="CSV0">CSV&nbsp;</label><input class="formatSortie0 pos-checkbox" type="checkbox" name="CSV0" id="CSV0" value="CSV0" onclick="deRequire('formatSortie0')" required/>
                    <label class="checkbox-inline formatSortie label-checkbox" for="SQL0">SQL&nbsp;</label><input class="formatSortie0" type="checkbox" name="SQL0" id="SQL0" value="SQL0" onclick="deRequire('formatSortie0')" required/>
                    <label class="checkbox-inline formatSortie label-checkbox" for="XML0">XML&nbsp;</label><input class="formatSortie0" type="checkbox" name="XML0" id="XML0" value="XML0" onclick="deRequire('formatSortie0')" required/>
                    <label class="checkbox-inline formatSortie label-checkbox" for="JSON0">JSON&nbsp;</label><input class="formatSortie0" type="checkbox" name="JSON0" id="JSON0" value="JSON0" onclick="deRequire('formatSortie0')" required/>
                  </div>
                </div>
              </div>
            </div>
            <div id ="tab0Lignes" class="row col-xs-12 col-sn-12 col-md-12 col-lg-12 form-inline form-group">
              <div class="row col-xs-12 col-sn-12 col-md-12 col-lg-12 form-inline form-group">
                <label class ="col-xs-2 col-sn-2 col-md-2 col-lg-2"><?php echo trad("12",$lang); ?></label>
                <label  class ="col-xs-3 col-sn-3 col-md-3 col-lg-3"><?php echo trad("13",$lang); ?></label>
                <label class ="col-xs-3 col-sn-3 col-md-3 col-lg-3"><?php echo trad("14",$lang); ?></label>
              </div>
              <div id="tab0Ligne0" class="row col-xs-12 col-sn-12 col-md-12 col-lg-12 form-inline form-group">
                <input type="text" class="form-control col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement" name="tab0Label0" id="tab0Label0" onchange="nomLigne(0,0,'Label')"  value=""/>
                <select class="form-control col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement" id="tab0TypeDeDonnees0" name="tab0TypeDeDonnees0" onchange="GestionOptionTDD(0,0)" required>
                  <option class="Defaultab" selected="selected" value=""><?php echo trad("16",$lang); ?></option>
                  <option value = "id" >ID</option>
                  <option value = "IDS" >IDS</option>
                  <option value = "Numerique"><?php echo trad("18",$lang); ?></option>
                  <option value = "Dictionnaire" ><?php echo trad("17",$lang); ?></option>
                  <option value = "DateHeure" ><?php echo trad("44",$lang); ?></option>
                  <option value = "CodeArticle" ><?php echo trad("45",$lang); ?></option>
                  <option value = "Reference"><?php echo trad("20",$lang); ?></option>
                  <option value = "Formule"><?php echo trad("19",$lang); ?></option>           
                </select>
                <select class="form-control col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement" id="tab0ModeDeGeneration0" disabled ="disabled"  name="tab0ModeDeGeneration0" onchange="GestionOptionMDG(0,0)">
                  <option class = "Defaultab" selected="selected" ><?php echo trad("21",$lang); ?></option>
                  <option value = "Aleatoire"><?php echo trad("22",$lang); ?></option>
                  <option value = "Codage"><?php echo trad("23",$lang); ?></option>
                  <option value = "LoiNormale"><?php echo trad("24",$lang); ?></option>
                  <option value = "Sequentielle"><?php echo trad("25",$lang); ?></option>
                </select>
                <div id="tab0MinParent0" class="form-group col-auto"></div><div id="tab0MaxParent0" class="form-group col-auto"></div><div id="tab0PasSeqParent0" class="form-group col-auto"></div><div id="tab0DicoParent0" class="form-group col-auto"></div><div id="tab0FormuleParent0" class="form-group col-auto"></div><div id="tab0CodageParent0" class="form-group col-auto"></div><div id="tab0ReferenceParent0" class="form-group col-auto"></div><div id="tab0PrefixeParent0" class="form-group col-auto"></div><div id="tab0SuffixeParent0" class="form-group col-auto"></div><div id="tab0UniteParent0" class="form-group col-auto"></div><div id="tab0DateHeureMinParent0" class="form-group col-auto"></div><div id="tab0DateHeureMaxParent0" class="form-group col-auto"></div><div id="tab0MasqueParent0" class="form-group col-auto"></div><div id="tab0NbChiffresParent0" class="form-group col-auto"></div><div id="tab0LesNullParent0" class="form-group col-auto"></div><button type="button" id="tab0BoutonSuppression0" class="form-group form-control col-auto croix" onclick="DelRow(0,0)"><img class = "image_croix" title= "<?php echo trad("37",$lang); ?>" src="./Style/image/croix.png"/></button>
              </div>
            </div>
            <div class = "row col-xs-1 col-sn-1 col-md-1 col-lg-1"><button type="button" class="plus1" onclick="addRow(0);"> <img class = "images" title= "<?php echo trad("38",$lang); ?>" src="./Style/image/plus.png"/></button></div>
          </div>
        </div>
        <div id="boutons_table" class = "row col-xs-2 col-sn-2 col-md-2 col-lg-2">
          <button type="button" id="plus2" onclick="addTable();"> <img class = "images" title= "<?php echo trad("39",$lang); ?>" src="./Style/image/plus.png"/></button>
          <button type="button" id="moins" onclick="delTable();"> <img class = "images" title= "<?php echo trad("40",$lang); ?>" src="./Style/image/moins.png"/></button>
        </div>
        <div id = "FormatSortie" class = "row col-xs-12 col-sn-12 col-md-12 col-lg-12">
          <div class="panel panel-primary " >
            <div class = "panel-heading">
              <h3 class="panel-title"><?php echo trad("26",$lang); ?></h3>
            </div>
            <div class = "panel-body" id="chargementDeFichier">
              <button type="button" class = "btn btn-lg btn-default white blue" id="btnOpen"><b><?php echo trad("27",$lang); ?></b></button>
              <input type="file" id="AcceptInput" accept=".sql,.xml,.txt"/>
              <a href="Fichiers/Parametre.xml" class = "btn btn-lg btn-default white blue" id="btnOpen2"><b><?php echo trad("28",$lang); ?></b></a>

              <button type="submit" id="BoutonPrevisualisation" class="btn btn-lg btn-default white bleu_pastel" onclick="Previsualisation()"><?php echo trad("42",$lang); ?></button>
              <button type="submit" id="BoutonEnvois" class="btn btn-lg btn-default white bleu_pastel"><?php echo trad("30",$lang); ?></button>
            </div>
            <div id="Popup">
              <div id="MenuPopup">
                <button type="button" id="BoutonFermerPopupDebut" class="col-xs-3 col-sn-3 col-md-3 col-lg-3 btn btn-lg btn-success" onclick="FermerPopup()">Fermer</button>
                <button type="button" id="TableauPrecedent" class="btn btn-default" onclick="PrevisualisationPrecedente()">Pr&eacute;c&eacute;dent</button>
                <label id="TitreTable"></label>
                <button type="button" id="TableauSuivant" class="btn btn-default" onclick="PrevisualisationSuivante()">Suivant</button>
              </div>
              <div id="CorpsPopup"> 
                <table id="TableauPrevisualisation">
                </table>
                <button type="button" id="BoutonFermerPopupFin" class="col-xs-3 col-sn-3 col-md-3 col-lg-3 btn btn-lg btn-success" onclick="FermerPopup()">Fermer</button>
              </div>
            </div>
          </div>
        </div>
        <input id="previsualisation" type="hidden" name="previsualisation" value="0"/>
      </form>
    </div>

    <div class="container">
      <div id = "Exemples" class = "col-xs-12 col-sn-12 col-md-12 col-lg-12">
        <div class="panel panel-primary " >
          <div class = "panel-heading">
            <h3 class="panel-title"><?php echo trad("31",$lang); ?></h3>
          </div>
          <div class = "panel-body">
            <button type="submit" id="ChampsSimpleBtn"   class="btn btn-lg btn-default white blue"        onclick="ChampSimple();"><?php echo trad("32",$lang); ?></button>
            <button type="submit" id="ChampsFormuleBtn"  class="btn btn-lg btn-default btn-ex white blue" onclick="ChampFormule();"><?php echo trad("34",$lang); ?></button>
            <button type="submit" id="ChampsMultiTabBtn" class="btn btn-lg btn-default btn-ex white blue" onclick="ChampMultiTables();"><?php echo trad("33",$lang); ?></button>
            <button type="submit" id="CodageBtn"         class="btn btn-lg btn-default btn-ex white blue" onclick="Codage();"><?php echo trad("35",$lang); ?></button>
            <button type="submit" id="ChampsCoherentBtn" class="btn btn-lg btn-default btn-ex white blue" onclick="DonneeCoherente();"><?php echo trad("36",$lang); ?></button>
            <button type="submit" id="ChampsDateHeureBtn" class="btn btn-lg btn-default btn-ex white blue" onclick="DateHeure();"><?php echo trad("43",$lang); ?></button>
          </div>
        </div>
      </div>
    </div>
  
    <p id="credit">
      <em>Created by: Brice HARISMENDY, Corentin COUVRY, Antoine LEGOUBE, Alban BAUMARD, Geoffroy BERRY </em>
      <br/>
      <em>Updated by: Anthony TAVENON, Baptiste DANDONNEAU, Bastien GENDRON, Romain GUIFFANT</em>
      <br/>
      <em>Conceived and maintained by : <a href="../">Gilles HUNAULT</a> University of Angers, 2017.</em>
      <br/>
      &nbsp;
      <br/>
      <em><a target="_blank" href="https://icones8.fr">icons by Icons8</a></em>
    </p>

    <blockquote>
      <p>
        <a href="http://validator.w3.org/check/referer" class="text_decoration_none">Valid XHTML 1.1</a>
      </p>
    </blockquote>
  </body>
</html>