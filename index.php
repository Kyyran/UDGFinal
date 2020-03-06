<?php
#   # (gH)   -_-  index.php  ;  TimeStamp (unix) : 20 Avril 2017 vers 19:49
require "./Localisation.php";
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html ; charset= utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>G&eacute;n&eacute;rateur de donn&eacute;es</title>
    <link href="Style/css/bootstrap.css" rel="stylesheet" type = "text/css"/>
    <link href="Style/css/style.css" rel="stylesheet" type = "text/css"/>
    <script src="Scripts/aide.js" type="text/javascript"></script>
    <script src="Scripts/GestionForm.js" type="text/javascript"></script>
    <script src="Scripts/exemple.js" type="text/javascript"></script>
    <script src="Scripts/validation.js" type="text/javascript"></script>
    <script src="Scripts/recuperation.js" type="text/javascript"></script>
    <script src="Scripts/jQuery.js" type="text/javascript"></script>
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
              <img src="./Style/image/Flags/fr.png" title="Français"/>
            </a>
            <ul class="sub_lang">
              <li>
                <a>
                  <img src="./Style/image/Flags/en.png" title="Anglais"/>
                </a>
              </li>
              <li>
                <a>
                  <img src="./Style/image/Flags/es.png" title="Espagnol"/>
                </a>
              </li>
              <li>
                <a>
                  <img src="./Style/image/Flags/de.png" title="Allemand"/>
                </a>
              </li>	
            </ul>
          </li>
        </ul>
      </div>
      <span onclick="aide(1)" id="BoutonAide" class="btn btn-lg btn-info" style="z-index: 9999">Afficher l'Aide</span>
    </div>

    <div class="jumbotron">
      <div class ="container">
        <div class="row">
          <div class ="col-xs-2 col-sn-2 col-md-2 col-lg-2">
            <img alt="icone du g&eacute;n&eacute;rateur" src="logo-site.png" height="100" width="100"/>
          </div>
          <div class ="col-xs-10 col-sn-10 col-md-10 col-lg-10"><!--le titre prend 10 colonnes -->
            <h1><span class="titreUDG"> <?php echo _("G&eacute;n&eacute;rateur "); ?> <span class="ghRouge"><b> <?php echo _("Universel"); ?> </b> </span> <?php echo _("de Donn&eacute;es"); ?></span></h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container"><!-- pour l'aide -->
      <div class="row pasvu" id="aide">
        <?php
        include("aide.html") ;
        ?>
      </div>
    </div>

    <div class="container"><!--d&eacute;but formulaire-->
      <div class="row">
        <div class="col-xs-13 col-sn-13 col-md-13 col-lg-13">
          <div class="titleprghp">
            <span class="prg"> <?php echo _("Formulaire de g&eacute;n&eacute;ration&nbsp;:&nbsp;"); ?> </span>
            <button onclick="RAZ();" id="RAZ" class="btn btn-default"> <?php echo ("Remettre &agrave; z&eacute;ro"); ?> </button>
          </div>
        </div>
      </div>

      <form id="formulaire" method="post" onsubmit="return validationEnvoi();" action = "Generateur/TraitementsForm.php">
        <!-- Nom de la feuille de donnees -->
        <div class="row">
          <div class="col-xs-12 col-sn-12 col-md-12 col-lg-12">
            <div class="form-horizontal">
              <div class="form-group">
                <label class ="col-xs-2 col-sn-2 col-md-2 col-lg-2" for = "NomFeuilleDeDonnees"> <?php echo _("Nom du projet :"); ?> </label>
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
                    <label class ="col-xs-2 col-sn-2 col-md-2 col-lg-2" for = "NomTable0"><?php echo _("Nom de la Table&nbsp;:&nbsp;"); ?> </label>
                    <div class = "col-xs-2 col-sn-2 col-md-2 col-lg-2">
                      <input type="text" class="form-control required input-change" id = "NomTable0" onchange="ValidationInputParametreTable(0,'NomTable');" name ="NomTable0" value =""/>
                    </div>
                    <label  class ="col-xs-2 col-sn-2 col-md-2 col-lg-2" for = "NombreDeLigne0"> <?php echo _("Nombre de lignes&nbsp;:"); ?></label>
                    <div class = "col-xs-2 col-sn-2 col-md-2 col-lg-2">
                        <input type="text" class="form-control required input-change" id ="NombreDeLigne0" onchange="ValidationInputParametreTable(0,'NombreDeLigne');" name="NombreDeLigne0" value =""/>
                    </div>
                    <label class ="col-xs-2 col-sn-2 col-md-2 col-lg-2"  for = "GRAINE0"> <?php echo _(" Graine de g&eacute;n&eacute;ration&nbsp;:&nbsp;"); ?></label>
                    <div class = "col-xs-2 col-sn-2 col-md-2 col-lg-2">
                      <input type="text" class="form-control input-change" id ="GRAINE0" onchange="ValidationInputParametreTable(0,'GRAINE');" name="GRAINE0" value =""/>
                    </div>
                    <label class ="col-xs-2 col-sn-2 col-md-2 col-lg-2 FormatDeSortie"> <?php echo _("Formats de sortie&nbsp;:&nbsp;"); ?> </label>
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
                <label class ="col-xs-2 col-sn-2 col-md-2 col-lg-2">Nom&nbsp;</label>
                <label  class ="col-xs-3 col-sn-3 col-md-3 col-lg-3">&nbsp; &nbsp; Type de Donn&eacute;es</label>
                <label class ="col-xs-3 col-sn-3 col-md-3 col-lg-3">Mode de G&eacute;n&eacute;ration</label>
              </div>
              <div id="tab0Ligne0" class="row col-xs-12 col-sn-12 col-md-12 col-lg-12 form-inline form-group">
                <input type="text" class="form-control required col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement" name="tab0label0" id="tab0label0" onchange="nomLigne(0,0,'label')"  value=""/>
                <select class="form-control col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement" id="tab0TypeDeDonnees0" name="tab0TypeDeDonnees0" onchange="GestionOptionTDD(0,0)" required>
                  <option class="Defaultab" selected="selected" value="">Choisissez un type de donn&eacute;es</option>
                  <option value = "id" >ID</option>
                  <option value = "IDS" >IDS</option>
                  <option value = "Numerique">Numerique</option>
                  <option value = "Dictionnaire" >Dictionnaire</option>
                  <option value = "DateHeure" >DateHeure</option>
                  <option value = "CodeArticle" >CodeArticle</option>
                  <option value = "Reference">Reference</option>
                  <option value = "Formule">Formule</option>           
                </select>
                <select class="form-control col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement" id="tab0ModeDeGeneration0" disabled ="disabled"  name="tab0ModeDeGeneration0" onchange="GestionOptionMDG(0,0)">
                  <option class = "Defaultab" selected="selected" >Choisissez un mode</option>
                  <option value = "Aleatoire">Al&eacute;atoire (uniforme)</option>
                  <option value = "Codage">Loi Normale</option>
                  <option value = "LoiNormale">Loi Normale</option>
                  <option value = "Sequentielle">S&eacute;quentielle</option>
                </select>
                <div id="tab0MinParent0" class="form-group col-auto"></div><div id="tab0MaxParent0" class="form-group col-auto"></div><div id="tab0PasSeqParent0" class="form-group col-auto"></div><div id="tab0DicoParent0" class="form-group col-auto"></div><div id="tab0FormuleParent0" class="form-group col-auto"></div><div id="tab0CodageParent0" class="form-group col-auto"></div><div id="tab0ReferenceParent0" class="form-group col-auto"></div><div id="tab0PrefixeParent0" class="form-group col-auto"></div><div id="tab0SuffixeParent0" class="form-group col-auto"></div><div id="tab0UniteParent0" class="form-group col-auto"></div><div id="tab0DateHeureMinParent0" class="form-group col-auto"></div><div id="tab0DateHeureMaxParent0" class="form-group col-auto"></div><div id="tab0MasqueParent0" class="form-group col-auto"></div><div id="tab0NbChiffresParent0" class="form-group col-auto"></div><div id="tab0LesNullParent0" class="form-group col-auto"></div><button type="button" id="tab0BoutonSuppression0" class="form-group form-control col-auto croix" onclick="DelRow(0,0)"><img class = "image_croix" title= "Supprime la ligne" src="./Style/image/croix.png"/></button>
              </div>
            </div>
            <div class = "row col-xs-1 col-sn-1 col-md-1 col-lg-1"><button type="button" class="plus1" onclick="addRow(0);"> <img class = "images" title= "Ajoute une colonne" src="./Style/image/plus.png"/></button></div>
          </div>
        </div>
        <div id="boutons_table" class = "row col-xs-2 col-sn-2 col-md-2 col-lg-2">
          <button type="button" id="plus2" onclick="addTable();"> <img class = "images" title= "Ajoute une table" src="./Style/image/plus.png"/></button>
          <button type="button" id="moins" onclick="delTable();"> <img class = "images" title= "Supprime une table" src="./Style/image/moins.png"/></button>
        </div>
        <div id = "FormatSortie" class = "row col-xs-12 col-sn-12 col-md-12 col-lg-12">
          <div class="panel panel-primary " >
            <div class = "panel-heading">
              <h3 class="panel-title">Entr&eacute;es/Sorties :</h3>
            </div>
            <div class = "panel-body" id="chargementDeFichier">
              <button type="button" class = "btn btn-lg btn-default white blue" id="btnOpen"><b>Importer un fichier XML ou SQL</b></button>
              <input type="file" id="AcceptInput" accept=".sql,.xml,.txt"/>
              <a href="Fichiers/Parametre.xml" class = "btn btn-lg btn-default white blue" id="btnOpen2"><b>exemple de fichier XML</b></a>
              <a href="Fichiers/titanic_mysql_cr.txt" class = "btn btn-lg btn-default white blue" id="btnOpen3"><b>exemple de fichier SQL</b></a>
              <button type="submit" id="BoutonPrevi" class="btn btn-lg btn-default white bleu_pastel">Pr&eacute;visualiser</button>
              <button type="submit" id="BoutonEnvois" class="btn btn-lg btn-default white bleu_pastel">G&eacute;n&eacute;rer</button>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="container">
      <div id = "Exemples" class = "col-xs-12 col-sn-12 col-md-12 col-lg-12">
        <div class="panel panel-primary " >
          <div class = "panel-heading">
            <h3 class="panel-title">Exemples :</h3>
          </div>
          <div class = "panel-body">
            <button type="submit" id="ChampsSimpleBtn"   class="btn btn-lg btn-default white blue"        onclick="ChampSimple();">Champ simple</button>
            <button type="submit" id="ChampsFormuleBtn"  class="btn btn-lg btn-default btn-ex white blue" onclick="ChampFormule();">Formule</button>
            <button type="submit" id="ChampsMultiTabBtn" class="btn btn-lg btn-default btn-ex white blue" onclick="ChampMultiTables();">Champs Muti Tables</button>
            <button type="submit" id="CodageBtn"         class="btn btn-lg btn-default btn-ex white blue" onclick="Codage();">Codage</button>
            <button type="submit" id="ChampsCoherentBtn" class="btn btn-lg btn-default btn-ex white blue" onclick="DonneeCoherente();">Champs Coh&eacute;rents</button>
            <button type="submit" id="ChampsDateHeureBtn" class="btn btn-lg btn-default btn-ex white blue" onclick="DateHeure();">Date Heure</button>
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