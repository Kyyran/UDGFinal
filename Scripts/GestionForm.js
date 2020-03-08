
var VarNumTab = 0;//permet de connaitre la table dans laquelle on travail
//var TabIndex[VarNumTab] = 0;//permet de connaitre la ligne sur laquelle on travaille par table
TabIndex = [];
TabIndex[0]=0; //Initialisation de la première ligne à 0

function getCookieVal(offset) {
  var endstr=document.cookie.indexOf (";", offset);
  if (endstr==-1) endstr=document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie (name) {
  var arg=name+"=";
  var alen=arg.length;
  var clen=document.cookie.length;
  var i=0;
  while (i<clen) {
    var j=i+alen;
    if (document.cookie.substring(i, j)==arg) return getCookieVal (j);
    i=document.cookie.indexOf(" ",i)+1;
    if (i==0) break;
  }
  return null;
}
  lang=GetCookie("lang_Cookie");

function GestionOptionTDD(NumTab,Numligne){//gère le formulaire en fonction du type de donnée choisi
  var select = document.getElementById('tab'+NumTab+'TypeDeDonnees'+Numligne);
  var choice = select.selectedIndex ;
  var TypeDeDonnees_choisie = select.options[choice].value;
  switch (TypeDeDonnees_choisie)
  {
    case "Numerique" :
      UnLockGenerer();
      document.getElementById("tab"+NumTab+"ModeDeGeneration"+Numligne).removeAttribute("disabled");

      SupChampsReference(NumTab, Numligne);
      MDGSupOptions(NumTab,Numligne);
      SupChampsDictionnaire(NumTab,Numligne);
      SupChampMultiple(NumTab,Numligne);
      SupChampsFormule(NumTab, Numligne);
      SupChampsIDS(NumTab,Numligne);
      SupChampsDateHeure(NumTab,Numligne);
      SupChampMajuscule(NumTab,Numligne);
      SupChampsCodeArticle(NumTab,Numligne);

      AjoutChampsNull(NumTab,Numligne);
      AjoutChampsNumerique(NumTab,Numligne);
      MDGAleatoire(NumTab,Numligne);
      MDGCodage(NumTab,Numligne);
      //MDGLoiNormale(NumTab,Numligne);
      //MDGSequentielle(NumTab,Numligne);
      break;
    case "Dictionnaire":
      UnLockGenerer();
      document.getElementById("tab"+NumTab+"ModeDeGeneration"+Numligne).removeAttribute("disabled");
      document.getElementById("tab"+NumTab+"ModeDeGeneration"+Numligne).value = "Aleatoire";

      SupChampsReference(NumTab, Numligne);
      MDGSupOptions(NumTab,Numligne);
      SupChampsNumerique(NumTab,Numligne);
      //supPasSequentielle(NumTab,Numligne);
      SupChampsFormule(NumTab, Numligne);
      SupChampsIDS(NumTab,Numligne);
      SupChampsDateHeure(NumTab,Numligne);
      SupChampsCodeArticle(NumTab,Numligne);
      SupChampsCodage(NumTab,Numligne);

      AjoutChampsNull(NumTab,Numligne);
      MDGAleatoire(NumTab,Numligne);
      MDGDictionnaire(NumTab,Numligne);
      break;
    case "Formule" :
      UnLockGenerer();
      document.getElementById("tab"+NumTab+"ModeDeGeneration"+Numligne).setAttribute("disabled","disabled");

      SupChampsReference(NumTab, Numligne);
      //MDGSupOptions(NumTab,Numligne);
      SupChampsNumerique(NumTab,Numligne);
      SupChampMultiple(NumTab,Numligne);
      SupChampsDictionnaire(NumTab,Numligne);
      SupChampsIDS(NumTab,Numligne);
      SupChampMajuscule(NumTab,Numligne);
      SupChampsDateHeure(NumTab,Numligne);
      SupChampsCodeArticle(NumTab,Numligne);
      SupChampsNull(NumTab,Numligne);
      SupChampsCodage(NumTab,Numligne);

      AjoutFormule(NumTab,Numligne);
      //supPasSequentielle(NumTab,Numligne);
      break;
    case "Reference" :
      UnLockGenerer();
      document.getElementById("tab"+NumTab+"ModeDeGeneration"+Numligne).setAttribute("disabled","disabled");

      SupChampsFormule(NumTab, Numligne);
      SupChampsNumerique(NumTab,Numligne);
      supPasSequentielle(NumTab,Numligne);
      SupChampMultiple(NumTab,Numligne);
      SupChampsDictionnaire(NumTab,Numligne);
      SupChampsIDS(NumTab,Numligne);
      SupChampMajuscule(NumTab,Numligne);
      SupChampsDateHeure(NumTab,Numligne);
      SupChampsCodeArticle(NumTab,Numligne);
      SupChampsNull(NumTab,Numligne);
      SupChampsCodage(NumTab,Numligne);

      AjoutChampsReference(NumTab, Numligne);
      break;
    case "IDS":
      UnLockGenerer();
      document.getElementById("tab"+NumTab+"ModeDeGeneration"+Numligne).setAttribute("disabled","disabled");

      SupChampsReference(NumTab, Numligne);
      //MDGSupOptions(NumTab,Numligne);
      SupChampsDictionnaire(NumTab,Numligne);
      SupChampMultiple(NumTab,Numligne);
      SupChampsFormule(NumTab, Numligne);
      SupChampsNumerique(NumTab,Numligne);
      SupChampMajuscule(NumTab,Numligne);
      SupChampsDateHeure(NumTab,Numligne);
      SupChampsCodeArticle(NumTab,Numligne);
      SupChampsNull(NumTab,Numligne);
      SupChampsCodage(NumTab,Numligne);

      AjoutChampsIDS(NumTab,Numligne);
      break;
    case "id" :
      UnLockGenerer();
      document.getElementById("tab"+NumTab+"ModeDeGeneration"+Numligne).setAttribute("disabled","disabled");

      SupChampsReference(NumTab, Numligne);
      //MDGSupOptions(NumTab,Numligne);
      SupChampsDictionnaire(NumTab,Numligne);
      SupChampMultiple(NumTab,Numligne);
      SupChampsFormule(NumTab, Numligne);
      SupChampsNumerique(NumTab,Numligne);
      SupChampsIDS(NumTab,Numligne);
      SupChampMajuscule(NumTab,Numligne);
      SupChampsDateHeure(NumTab,Numligne);
      SupChampsCodeArticle(NumTab,Numligne);
      SupChampsNull(NumTab,Numligne);
      SupChampsCodage(NumTab,Numligne);
      break;
    case "DateHeure":
      UnLockGenerer();
      document.getElementById("tab"+NumTab+"ModeDeGeneration"+Numligne).removeAttribute("disabled");
      document.getElementById("tab"+NumTab+"ModeDeGeneration"+Numligne).value = "Aleatoire";

      SupChampsReference(NumTab, Numligne);
      MDGSupOptions(NumTab,Numligne);
      SupChampsDictionnaire(NumTab,Numligne);
      SupChampMultiple(NumTab,Numligne);
      SupChampsFormule(NumTab, Numligne);
      SupChampsNumerique(NumTab,Numligne);
      SupChampsCodeArticle(NumTab,Numligne);
      SupChampsIDS(NumTab,Numligne);
      SupChampMajuscule(NumTab,Numligne);
      SupChampsCodage(NumTab,Numligne);

      MDGAleatoire(NumTab,Numligne);
      AjoutChampsNull(NumTab,Numligne);
      AjoutChampsDateHeure(NumTab,Numligne);
      break;
    case "CodeArticle":
      UnLockGenerer();
      document.getElementById("tab"+NumTab+"ModeDeGeneration"+Numligne).removeAttribute("disabled");
      document.getElementById("tab"+NumTab+"ModeDeGeneration"+Numligne).value = "Aleatoire";

      SupChampsReference(NumTab, Numligne);
      MDGSupOptions(NumTab,Numligne);
      SupChampsDictionnaire(NumTab,Numligne);
      SupChampMultiple(NumTab,Numligne);
      SupChampsFormule(NumTab, Numligne);
      SupChampsNumerique(NumTab,Numligne);
      SupChampsIDS(NumTab,Numligne);
      SupChampMajuscule(NumTab,Numligne);
      SupChampsDateHeure(NumTab,Numligne);
      SupChampsCodage(NumTab,Numligne);

      MDGAleatoire(NumTab,Numligne);
      AjoutChampsNull(NumTab,Numligne);
      AjoutChampsCodeArticle(NumTab,Numligne);
      break;
    default :
      UnLockGenerer();
      document.getElementById("tab"+NumTab+"ModeDeGeneration"+Numligne).setAttribute("disabled","disabled");

      SupChampsReference(NumTab, Numligne);
      SupChampsFormule(NumTab, Numligne);
      SupChampsNumerique(NumTab,Numligne);
      supPasSequentielle(NumTab,Numligne);
      SupChampMultiple(NumTab,Numligne);
      SupChampsDictionnaire(NumTab,Numligne);
      SupChampsIDS(NumTab,Numligne);
      SupChampMajuscule(NumTab,Numligne);
      SupChampsDateHeure(NumTab,Numligne);
      SupChampsCodeArticle(NumTab,Numligne);
      SupChampsNull(NumTab,Numligne);
      SupChampsCodage(NumTab,Numligne);
      break;
  }
}
function supPasSequentielle(NumTab,Numligne){//Suprime les ajout de la fonction Numérique
    if((document.getElementById('tab'+NumTab+"PasSeq"+Numligne)) && (document.getElementById('tab'+NumTab+'LabelPasSeq'+Numligne))){
        var parentElement = document.getElementById('tab'+NumTab+"PasSeqParent"+Numligne);
        var Element = document.getElementById("tab"+NumTab+"LabelPasSeq"+Numligne);
        parentElement.removeChild(Element);
        Element = document.getElementById("tab"+NumTab+"PasSeq"+Numligne);
        parentElement.removeChild(Element);
    }
}
function SupChampsNumerique(NumTab,Numligne){//Supprime les champs de la donnée Numérique
  if((document.getElementById('tab'+NumTab+'Min'+Numligne)) && (document.getElementById('tab'+NumTab+'Max'+Numligne)))
    {
        var parentElement = document.getElementById('tab'+NumTab+"MinParent"+Numligne);
        var Element = document.getElementById("tab"+NumTab+"Min"+Numligne);
        parentElement.removeChild(Element);
        Element = document.getElementById("tab"+NumTab+"LabelMin"+Numligne);
        parentElement.removeChild(Element);
        
        parentElement = document.getElementById("tab"+NumTab+"MaxParent"+Numligne);
        Element = document.getElementById("tab"+NumTab+"LabelMax"+Numligne);
        parentElement.removeChild(Element);
        Element = document.getElementById("tab"+NumTab+"Max"+Numligne);
        parentElement.removeChild(Element);

        parentElement = document.getElementById("tab"+NumTab+"UniteParent"+Numligne);
        Element = document.getElementById("tab"+NumTab+"LabelUnite"+Numligne);
        parentElement.removeChild(Element);
        Element = document.getElementById("tab"+NumTab+"Unite"+Numligne);
        parentElement.removeChild(Element);
    }
}
function AjoutChampsNumerique(NumTab,Numligne){//Ajoute les champs min, max et unité pour les données numérique
  if(!(document.getElementById('tab'+NumTab+'Min'+Numligne)))
  {
    var div = document.getElementById("tab"+NumTab+"MinParent"+Numligne);

    var minlabel=document.createElement('label');
    minlabel.setAttribute('id',"tab"+NumTab+"LabelMin"+Numligne);
    minlabel.setAttribute('for',"tab"+NumTab+"Min"+Numligne);
    minlabel.innerHTML = " Minimum :";

    var min=document.createElement('input');
    min.setAttribute('type','text');
    min.setAttribute('class','form-control');
    min.setAttribute('id',"tab"+NumTab+"Min"+Numligne);
    min.setAttribute('onchange',"numLigne("+NumTab+","+Numligne+",\"Min\" );");
    min.setAttribute('name',"tab"+NumTab+"Min"+Numligne);
    min.innerHTML = " ";

    div.appendChild(minlabel);
    div.appendChild(min);
  }

  if(!(document.getElementById('tab'+NumTab+'Max'+Numligne)))
  {
    var div2 = document.getElementById("tab"+NumTab+"MaxParent"+Numligne);

    var  maxlabel=document.createElement('label');
    maxlabel.setAttribute('for',"tab"+NumTab+"Max"+Numligne);
    maxlabel.setAttribute('id',"tab"+NumTab+"LabelMax"+Numligne);
    maxlabel.innerHTML = " Maximum :";

    var  max=document.createElement('input');
    max.setAttribute('type','text');
    max.setAttribute('class','form-control');
    max.setAttribute('id',"tab"+NumTab+"Max"+Numligne);
    max.setAttribute('name',"tab"+NumTab+"Max"+Numligne);
    max.setAttribute('onchange',"numLigne("+NumTab+","+Numligne+",\"Max\");");
    max.innerHTML = " ";

    div2.appendChild(maxlabel);
    div2.appendChild(max);
  }

  if(!(document.getElementById('tab'+NumTab+'Unite'+Numligne)))
  {
    var div3 = document.getElementById("tab"+NumTab+"UniteParent"+Numligne);

    var  unitelabel=document.createElement('label');
    unitelabel.setAttribute('for',"tab"+NumTab+"Unite"+Numligne);
    unitelabel.setAttribute('id',"tab"+NumTab+"LabelUnite"+Numligne);
    if (lang == "FR") {
      unitelabel.innerHTML = " Unité :";}
    else {
      unitelabel.innerHTML = " Unit :";}
    

    var  unite=document.createElement('input');
    unite.setAttribute('type','text');
    unite.setAttribute('class','form-control');
    unite.setAttribute('id',"tab"+NumTab+"Unite"+Numligne);
    unite.setAttribute('name',"tab"+NumTab+"Unite"+Numligne);
    unite.setAttribute('onchange',"nomLigne("+NumTab+","+Numligne+",\"Unite\");");
    unite.innerHTML = " ";

    div3.appendChild(unitelabel);
    div3.appendChild(unite);
  }
}
function MDGAleatoire(NumTab,Numligne) {//ajoute le mode de génération aléatoire
  var selectMDG = document.getElementById('tab'+NumTab+"ModeDeGeneration"+Numligne);
  var OptionADD=document.createElement('option');
  OptionADD.setAttribute('value','Aleatoire');
  if (lang == "FR") {
    OptionADD.innerHTML = "Aléatoire (uniforme)&nbsp;&nbsp;&nbsp;";}
  else {
    OptionADD.innerHTML = "Random (uniform)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";}
  
  selectMDG.appendChild(OptionADD);
}
function MDGSequentielle (NumTab,Numligne) {//ajoute la génération séquentielle
  var selectMDG = document.getElementById('tab'+NumTab+"ModeDeGeneration"+Numligne);

  var OptionADD=document.createElement('option');
  OptionADD.setAttribute('value','sequentielle');
  if (lang == "FR") {
    OptionADD.innerHTML = " Séquentielle";}
  else {
    OptionADD.innerHTML = " Sequential";}
  
  selectMDG.appendChild(OptionADD);
}
function MDGCodage(NumTab,Numligne) {
    var selectMDG = document.getElementById('tab'+NumTab+"ModeDeGeneration"+Numligne);

    var OptionADD=document.createElement('option');
    OptionADD.setAttribute('value','Codage');
    if (lang == "FR") {
      OptionADD.innerHTML = "Codage";}
    else {
      OptionADD.innerHTML = "Coding";}
    
    selectMDG.appendChild(OptionADD);
}
function MDGLoiNormale (NumTab,Numligne) {//ajoute la génération par la loi normale
  var selectMDG = document.getElementById('tab'+NumTab+"ModeDeGeneration"+Numligne);

  var OptionADD=document.createElement('option');
  OptionADD.setAttribute('value','LoiNormale');
  if (lang == "FR") {
    OptionADD.innerHTML = " Loi Normale";}
  else {
    OptionADD.innerHTML = " Normal Law";}
  
  selectMDG.appendChild(OptionADD);
}
function AjoutFormule (NumTab,Numligne) {//ajoute la génération par formule//-----
  var type=document.getElementById('tab'+NumTab+'TypeDeDonnees'+Numligne);//On recupère le type de la donnée

  if(!(document.getElementById('tab'+NumTab+'Formule'+Numligne)))
  {
    var div = document.getElementById("tab"+NumTab+"FormuleParent"+Numligne);

    var formulelabel=document.createElement('label');
    formulelabel.setAttribute('id',"tab"+NumTab+"LabelFormule"+Numligne);
    formulelabel.setAttribute('for',"tab"+NumTab+"Formule"+Numligne);
    if (lang == "FR") {
      formulelabel.innerHTML = " Formule :";}
    else {
      formulelabel.innerHTML = " Formula :";}
    

    var formule=document.createElement('input');
    formule.setAttribute('type','text');
    formule.setAttribute('class','form-control required');
    formule.setAttribute('id',"tab"+NumTab+"Formule"+Numligne);
    formule.setAttribute('onchange',"validationFormule("+NumTab+","+Numligne+",\"Formule\" );");
    formule.setAttribute('name',"tab"+NumTab+"Formule"+Numligne);
    formule.innerHTML = " ";

    div.appendChild(formulelabel);
    div.appendChild(formule);
  }
}
function SupChampsFormule(NumTab, Numligne) { //Supprime les ajouts de la fonction Formule
  if(document.getElementById("tab" + NumTab + "Formule" + Numligne)) {
    var parentElement = document.getElementById('tab'+NumTab+"FormuleParent"+Numligne);
    var Element = document.getElementById("tab"+NumTab+"Formule"+Numligne);
    parentElement.removeChild(Element);
    Element = document.getElementById("tab"+NumTab+"LabelFormule"+Numligne);
    parentElement.removeChild(Element);
  }
}
function MDGDictionnaire (NumTab,Numligne) {//ajoute la génération par dictionnaire
    if(!(document.getElementById('tab'+NumTab+'Dico'+Numligne)))
    {
        var div = document.getElementById("tab"+NumTab+"DicoParent"+Numligne);
        var  DicoLabel=document.createElement('label');
        DicoLabel.setAttribute('id',"tab"+NumTab+"LabelDico"+Numligne);
        DicoLabel.setAttribute('for',"tab"+NumTab+"Dico"+Numligne);
        if (lang == "FR") {
          DicoLabel.innerHTML = "Dictionnaire :";}
        else {
          DicoLabel.innerHTML = "Dictionary :";}

        var SelectDico=document.createElement('select');
        SelectDico.setAttribute('class',"form-control");
        SelectDico.setAttribute('id',"tab"+NumTab+"Dictionnaire"+Numligne);
        SelectDico.setAttribute('name',"tab"+NumTab+"Dictionnaire"+Numligne);
        SelectDico.setAttribute('onChange', "champMultiple("+NumTab+","+Numligne+");champMajuscule("+NumTab+","+Numligne+");");


        var OptDico0 = document.createElement('option');
        OptDico0.setAttribute('class',"Defaultab");
        if (lang == "FR") {
          OptDico0.innerHTML="Choisissez un Dictionnaire";}
        else {
          OptDico0.innerHTML="Choose a Dictionary";}
        
        var OptDico1 = document.createElement('option');
        OptDico1.setAttribute('value',"Prenoms");
        if (lang == "FR") {
          OptDico1.innerHTML=" Prénoms";}
        else {
          OptDico1.innerHTML=" First names";}

        var OptDico2 = document.createElement('option');
        OptDico2.setAttribute('value',"noms");
        if (lang == "FR") {
          OptDico2.innerHTML=" Noms";}
        else {
          OptDico2.innerHTML=" Last Names";}

        var OptDico3 = document.createElement('option');
        OptDico3.setAttribute('value',"villes");
        if (lang == "FR") {
          OptDico3.innerHTML="Villes";}
        else {
          OptDico3.innerHTML="Towns";}

        var OptDico4 = document.createElement('option');
        OptDico4.setAttribute('value',"titre_film");
        if (lang == "FR") {
          OptDico4.innerHTML="Titres de film";}
        else {
          OptDico4.innerHTML="Movie titles";}

        var OptDico5 = document.createElement('option');
        OptDico5.setAttribute('value',"acteurs");
        if (lang == "FR") {
          OptDico5.innerHTML="Acteurs";}
        else {
          OptDico5.innerHTML="Actors";}

        var OptDico6 = document.createElement('option');
        OptDico6.setAttribute('value',"langage_informatique");
        if (lang == "FR") {
          OptDico6.innerHTML="Langages Informatique";}
        else {
          OptDico6.innerHTML="Computer languages";}

        var OptDico7 = document.createElement('option');
        OptDico7.setAttribute('value',"departement");
        if (lang == "FR") {
          OptDico7.innerHTML="Département";}
        else {
          OptDico7.innerHTML="Department";}

        var OptDico8 = document.createElement('option');
        OptDico8.setAttribute('value',"entreprise_pharma");
        if (lang == "FR") {
          OptDico8.innerHTML="Entreprises pharmaceutique";}
        else {
          OptDico8.innerHTML="Pharmaceutical companies";}

        var OptDico9 = document.createElement('option');
        OptDico9.setAttribute('value',"evenements_historiques");
        if (lang == "FR") {
          OptDico9.innerHTML="Evenements Historiques";}
        else {
          OptDico9.innerHTML="Historical Events";}

        var OptDico10 = document.createElement('option');
        OptDico10.setAttribute('value',"medic");
        if (lang == "FR") {
          OptDico10.innerHTML="Medicaments";}
        else {
          OptDico10.innerHTML="Medecines";}

        var OptDico11 = document.createElement('option');
        OptDico11.setAttribute('value',"metiers");
        if (lang == "FR") {
          OptDico11.innerHTML="Métiers";}
        else {
          OptDico11.innerHTML="Professions";}

        var OptDico12 = document.createElement('option');
        OptDico12.setAttribute('value',"molecules");
        if (lang == "FR") {
          OptDico12.innerHTML="Molécules";}
        else {
          OptDico12.innerHTML="Molecules";}

        var OptDico13 = document.createElement('option');
        OptDico13.setAttribute('value',"nationalite");
        if (lang == "FR") {
          OptDico13.innerHTML="Nationalitées";}
        else {
          OptDico13.innerHTML="Nationalities";}

        var OptDico14 = document.createElement('option');
        OptDico14.setAttribute('value',"pays");
        if (lang == "FR") {
          OptDico14.innerHTML="Pays";}
        else {
          OptDico14.innerHTML="Countries";}

        var OptDico15 = document.createElement('option');
        OptDico15.setAttribute('value',"personnages_historiques");
        if (lang == "FR") {
          OptDico15.innerHTML="Personnages Historiques";}
        else {
          OptDico15.innerHTML="Historical Figures";}

        var OptDico16 = document.createElement('option');
        OptDico16.setAttribute('value',"producteurs");
        if (lang == "FR") {
          OptDico16.innerHTML="Producteurs de films";}
        else {
          OptDico16.innerHTML="Films Producers";}

        var OptDico17 = document.createElement('option');
        OptDico17.setAttribute('value',"realisateur");
        if (lang == "FR") {
          OptDico17.innerHTML="Realisateur";}
        else {
          OptDico17.innerHTML="Director";}

        var OptDico18 = document.createElement('option');
        OptDico18.setAttribute('value',"regions");
        if (lang == "FR") {
          OptDico18.innerHTML="Régions";}
        else {
          OptDico18.innerHTML="Regions";}

        var OptDico19 = document.createElement('option');
        OptDico19.setAttribute('value',"scenariste");
        if (lang == "FR") {
          OptDico19.innerHTML="Scénariste";}
        else {
          OptDico19.innerHTML="Scenarist";}

        var OptDico20 = document.createElement('option');
        OptDico20.setAttribute('value',"societe_production");
        if (lang == "FR") {
          OptDico20.innerHTML="Sociétés de production";}
        else {
          OptDico20.innerHTML="Production Companies";}

        var OptDico21 = document.createElement('option');
        OptDico21.setAttribute('value',"types_trains");
        if (lang == "FR") {
          OptDico21.innerHTML="Types Trains";}
        else {
          OptDico21.innerHTML="Trains Types";}

        var OptDico22 = document.createElement('option');
        OptDico22.setAttribute('value',"capitales_europeennes");
        if (lang == "FR") {
          OptDico22.innerHTML="Capitales Européennes";}
        else {
          OptDico22.innerHTML="European capitals";}

        div.appendChild(DicoLabel);
        div.appendChild(SelectDico);
        SelectDico.appendChild(OptDico0);
        SelectDico.appendChild(OptDico1);
        SelectDico.appendChild(OptDico2);
        SelectDico.appendChild(OptDico3);
        SelectDico.appendChild(OptDico4);
        SelectDico.appendChild(OptDico5);
        SelectDico.appendChild(OptDico6);
        SelectDico.appendChild(OptDico7);
        SelectDico.appendChild(OptDico8);
        SelectDico.appendChild(OptDico9);
        SelectDico.appendChild(OptDico10);
        SelectDico.appendChild(OptDico11);
        SelectDico.appendChild(OptDico12);
        SelectDico.appendChild(OptDico13);
        SelectDico.appendChild(OptDico14);
        SelectDico.appendChild(OptDico15);
        SelectDico.appendChild(OptDico16);
        SelectDico.appendChild(OptDico17);
        SelectDico.appendChild(OptDico18);
        SelectDico.appendChild(OptDico19);
        SelectDico.appendChild(OptDico20);
        SelectDico.appendChild(OptDico21);
        SelectDico.appendChild(OptDico22);
    }
}
function SupChampsDictionnaire(NumTab,Numligne){ //Supprime les éléments d'un dictionnaire
    if(document.getElementById('tab'+NumTab+'Dictionnaire'+Numligne)){
        var parentElement = document.getElementById('tab'+NumTab+"Dictionnaire"+Numligne);
        opts = parentElement.getElementsByTagName('option');
        while(opts[0]) {
            parentElement.removeChild(opts[0]);
        }
        var parentElement = document.getElementById('tab'+NumTab+"DicoParent"+Numligne);
        var Element = document.getElementById("tab"+NumTab+"Dictionnaire"+Numligne);
        parentElement.removeChild(Element);
        Element = document.getElementById("tab"+NumTab+"LabelDico"+Numligne);
        parentElement.removeChild(Element);
    }
}
function addRow(NumTab){//ajoute une ligne
  var row = document.getElementById("tab"+NumTab+"Lignes");
  TabIndex[VarNumTab] = TabIndex[VarNumTab]+1;

  var Div_1=document.createElement('div');
  Div_1.setAttribute('id',"tab"+NumTab+"Ligne"+TabIndex[VarNumTab]);
  Div_1.setAttribute('class',"row col-xs-12 col-sn-12 col-md-12 col-lg-12 form-inline form-group");

  var InputNom=document.createElement('input');
  InputNom.setAttribute('type',"text");
  InputNom.setAttribute('class',"form-control col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement");
  InputNom.setAttribute('name',"tab"+NumTab+"Label"+TabIndex[VarNumTab]);
  InputNom.setAttribute('onchange',"nomLigne("+VarNumTab+","+TabIndex[VarNumTab]+",\"Label\" );");
  InputNom.setAttribute('id',"tab"+NumTab+"Label"+TabIndex[VarNumTab]);
  InputNom.innerHTML = " ";

  var SelectTDD=document.createElement('select');
  SelectTDD.setAttribute('class',"form-control col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement");
  SelectTDD.setAttribute('id',"tab"+NumTab+"TypeDeDonnees"+TabIndex[VarNumTab]);
  SelectTDD.setAttribute('name',"tab"+NumTab+"TypeDeDonnees"+TabIndex[VarNumTab]);
  SelectTDD.setAttribute('onchange',"GestionOptionTDD("+NumTab+","+TabIndex[VarNumTab]+");");
  SelectTDD.setAttribute('required','');

  var OptTDD0 = document.createElement('option');
  OptTDD0.setAttribute('class',"Defaultab");
  OptTDD0.setAttribute('value',"");
  if (lang == "FR") {
    OptTDD0.innerHTML="Choisissez un type de données";}
  else {
    OptTDD0.innerHTML="Select a data type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";}

  var OptTDD1 = document.createElement('option');
  OptTDD1.setAttribute('value',"id");
  OptTDD1.innerHTML="ID";

  var OptTDD2 = document.createElement('option');
  OptTDD2.setAttribute('value',"IDS");
  OptTDD2.innerHTML="IDS";

  var OptTDD3 = document.createElement('option');
  OptTDD3.setAttribute('value',"Numerique");
  if (lang=="FR") {
    OptTDD3.innerHTML="Numerique";}
  else {
    OptTDD3.innerHTML="Numeric";}

  var OptTDD4 = document.createElement('option');
  OptTDD4.setAttribute('value',"Dictionnaire");
  if (lang=="FR") {
    OptTDD4.innerHTML="Dictionnaire"; }
  else {
    OptTDD4.innerHTML="Dictionary"; }

  var OptTDD5 = document.createElement('option');
  OptTDD5.setAttribute('value',"DateHeure");
  if (lang=="FR") {
    OptTDD5.innerHTML="DateHeure";}
  else {
    OptTDD5.innerHTML="DateHour";}

  var OptTDD6 = document.createElement('option');
  OptTDD6.setAttribute('value',"CodeArticle");
  if (lang=="FR") {
    OptTDD6.innerHTML="CodeArticle";}
  else {
    OptTDD6.innerHTML="ArticleCode";}

  var OptTDD7 = document.createElement('option');
  OptTDD7.setAttribute('value',"Reference");
  OptTDD7.innerHTML="Reference";

  var OptTDD8 = document.createElement('option');
  OptTDD8.setAttribute('value',"Formule");
  if (lang=="FR") {
    OptTDD8.innerHTML="Formule"; }
  else {
    OptTDD8.innerHTML="Formula"; }

  var SelectMDG=document.createElement('select');
  SelectMDG.setAttribute('class',"form-control col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement");
  SelectMDG.setAttribute('disabled',"disabled");
  SelectMDG.setAttribute('id',"tab"+NumTab+"ModeDeGeneration"+TabIndex[VarNumTab]);
  SelectMDG.setAttribute('name',"tab"+NumTab+"ModeDeGeneration"+TabIndex[VarNumTab]);
  SelectMDG.setAttribute('onchange',"GestionOptionMDG("+NumTab+","+TabIndex[VarNumTab]+");");

  var OptMDG0 = document.createElement('option');
  OptMDG0.setAttribute('class',"Defaultab");
  if (lang=="FR") {
    OptMDG0.innerHTML="Choisissez un mode";}
  else { 
    OptMDG0.innerHTML="Select a mode&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";}

  var OptMDG1 = document.createElement('option');
  OptMDG1.setAttribute('value',"Aleatoire");
  if (lang=="FR") {
    OptMDG1.innerHTML=" Aléatoire";}
  else { 
    OptMDG1.innerHTML=" Random";}

  var OptMDG2 = document.createElement('option');
  OptMDG2.setAttribute('value',"LoiNormale");
  if (lang=="FR") {
    OptMDG2.innerHTML=" Loi Normale";}
  else {
    OptMDG2.innerHTML=" Normal Law";}

  var OptMDG3 = document.createElement('option');
  OptMDG3.setAttribute('value',"Sequentielle");
  if (lang=="FR") {
    OptMDG3.innerHTML="Séquentielle";}
  else {
    OptMDG3.innerHTML="Sequential";}

  var OptMDG4 = document.createElement('option');
  OptMDG4.setAttribute('value',"formule");
  if (lang=="FR") {
    OptMDG4.innerHTML="Formule";}
  else {
    OptMDG4.innerHTML="Formula";}
    
  var OptMDG5 = document.createElement('option');
  OptMDG5.setAttribute('value',"Codage");
  if (lang=="FR") {
    OptMDG5.innerHTML="Codage";}
  else {
    OptMDG5.innerHTML="Coding";}

  var Div_Min = document.createElement('div');
  Div_Min.setAttribute('id',"tab"+NumTab+"MinParent"+TabIndex[VarNumTab]);
  Div_Min.setAttribute('class',"form-group col-auto");

  var Div_Max = document.createElement('div');
  Div_Max.setAttribute('id',"tab"+NumTab+"MaxParent"+TabIndex[VarNumTab]);
  Div_Max.setAttribute('class',"form-group col-auto");

  var Div_Seq = document.createElement('div');
  Div_Seq.setAttribute('id',"tab"+NumTab+"PasSeqParent"+TabIndex[VarNumTab]);
  Div_Seq.setAttribute('class',"form-group col-auto");

  var Div_Dico = document.createElement('div');
  Div_Dico.setAttribute('id',"tab"+NumTab+"DicoParent"+TabIndex[VarNumTab]);
  Div_Dico.setAttribute('class',"form-group col-auto");

  var Div_Formule = document.createElement('div');
  Div_Formule.setAttribute('id',"tab"+NumTab+"FormuleParent"+TabIndex[VarNumTab]);
  Div_Formule.setAttribute('class',"form-group col-auto");

  var Div_Codage = document.createElement('div');
  Div_Codage.setAttribute('id',"tab"+NumTab+"CodageParent"+TabIndex[VarNumTab]);
  Div_Codage.setAttribute('class',"form-group col-auto");

  var Div_Reference = document.createElement('div');
  Div_Reference.setAttribute('id',"tab"+NumTab+"ReferenceParent"+TabIndex[VarNumTab]);
  Div_Reference.setAttribute('class',"form-group col-auto");

  var Div_Prefixe = document.createElement('div');
  Div_Prefixe.setAttribute('id',"tab"+NumTab+"PrefixeParent"+TabIndex[VarNumTab]);
  Div_Prefixe.setAttribute('class',"form-group col-auto");

  var Div_Suffixe = document.createElement('div');
  Div_Suffixe.setAttribute('id',"tab"+NumTab+"SuffixeParent"+TabIndex[VarNumTab]);
  Div_Suffixe.setAttribute('class',"form-group col-auto");

  var Div_NbChiffres = document.createElement('div');
  Div_NbChiffres.setAttribute('id',"tab"+NumTab+"NbChiffresParent"+TabIndex[VarNumTab]);
  Div_NbChiffres.setAttribute('class',"form-group col-auto");

  var Div_Unite = document.createElement('div');
  Div_Unite.setAttribute('id',"tab"+NumTab+"UniteParent"+TabIndex[VarNumTab]);
  Div_Unite.setAttribute('class',"form-group col-auto");

  var Div_HeureMin = document.createElement('div');
  Div_HeureMin.setAttribute('id',"tab"+NumTab+"DateHeureMinParent"+TabIndex[VarNumTab]);
  Div_HeureMin.setAttribute('class',"form-group col-auto");

  var Div_HeureMax = document.createElement('div');
  Div_HeureMax.setAttribute('id',"tab"+NumTab+"DateHeureMaxParent"+TabIndex[VarNumTab]);
  Div_HeureMax.setAttribute('class',"form-group col-auto");

  var Div_Masque = document.createElement('div');
  Div_Masque.setAttribute('id',"tab"+NumTab+"MasqueParent"+TabIndex[VarNumTab]);
  Div_Masque.setAttribute('class',"form-group  col-auto");

  var Div_LesNull = document.createElement('div');
  Div_LesNull.setAttribute('id',"tab"+NumTab+"LesNullParent"+TabIndex[VarNumTab]);
  Div_LesNull.setAttribute('class',"form-group col-auto");
  
  
  var btn = document.createElement('button');
  btn.setAttribute('id',"tab"+NumTab+"BoutonSuppression"+TabIndex[VarNumTab]);
  btn.setAttribute('type',"button");
  btn.setAttribute('class',"form-group form-control col-auto croix");
  btn.setAttribute('onclick',"DelRow(" + NumTab + "," + TabIndex[VarNumTab] + ");");
  
  var image = document.createElement('img');
  image.setAttribute('class',"image_croix");
  image.setAttribute('title',"Supprime la ligne");
  image.setAttribute('src',"./Style/image/croix.png");
  

  row.appendChild(Div_1);
  Div_1.appendChild(InputNom);
  Div_1.appendChild(SelectTDD);
  SelectTDD.appendChild(OptTDD0);
  SelectTDD.appendChild(OptTDD1);
  SelectTDD.appendChild(OptTDD2);
  SelectTDD.appendChild(OptTDD3);
  SelectTDD.appendChild(OptTDD4);
  SelectTDD.appendChild(OptTDD5);
  SelectTDD.appendChild(OptTDD6);
  SelectTDD.appendChild(OptTDD7);
  SelectTDD.appendChild(OptTDD8);
  Div_1.appendChild(SelectMDG);
  SelectMDG.appendChild(OptMDG0)
  SelectMDG.appendChild(OptMDG1);
  SelectMDG.appendChild(OptMDG2);
  SelectMDG.appendChild(OptMDG3);
  SelectMDG.appendChild(OptMDG4);
  SelectMDG.appendChild(OptMDG5);
  Div_1.appendChild(Div_Min);
  Div_1.appendChild(Div_Max);
  Div_1.appendChild(Div_Seq);
  Div_1.appendChild(Div_Dico);
  Div_1.appendChild(Div_Formule);
  Div_1.appendChild(Div_Codage);
  Div_1.appendChild(Div_Reference);
  Div_1.appendChild(Div_Prefixe);
  Div_1.appendChild(Div_Suffixe);
  Div_1.appendChild(Div_NbChiffres);
  Div_1.appendChild(Div_Unite);
  Div_1.appendChild(Div_HeureMin);
  Div_1.appendChild(Div_HeureMax);
  Div_1.appendChild(Div_Masque);
  Div_1.appendChild(Div_LesNull);
  Div_1.appendChild(btn);
  btn.appendChild(image);
}
function DelRow(NumTab,NumLigne){ //Supprime une ligne
  var parentElement = document.getElementById("tab"+NumTab+"Lignes");
  var Element = document.getElementById("tab"+NumTab+'Ligne'+NumLigne);
  parentElement.removeChild(Element);
  TabIndex[VarNumTab]-=1;
  OrdonnerLesLignes(NumTab);
}

function MDGSupOptions(NumTab,Numligne){ //supprime tous les modes de génération
  var parentElement = document.getElementById('tab'+NumTab+"ModeDeGeneration"+Numligne);
  opts = parentElement.getElementsByTagName('option');
  while(opts[0]) {
    parentElement.removeChild(opts[0]);
  }
}
function GestionOptionMDG(NumTab,Numligne){//gère le formulaire en fonction du mode de génération choisi
  var selectMDGOption = document.getElementById('tab'+NumTab+'ModeDeGeneration'+Numligne);
  var choiceMDG = selectMDGOption.selectedIndex ;
  var MDG_choisie = selectMDGOption.options[choiceMDG].value;
  switch (MDG_choisie)
  {
    case "sequentielle":
      AjoutChampsNumerique(NumTab,Numligne);
      AjoutPasSequentielle(NumTab,Numligne);
    break;
    case "Aleatoire":
      AjoutChampsNumerique(NumTab,Numligne);
      supPasSequentielle(NumTab,Numligne);
      SupChampsCodage(NumTab,Numligne);
    break;
    case "Codage":
      AjoutChampsNumerique(NumTab,Numligne);          
      supPasSequentielle(NumTab,Numligne);
      AjoutCodage(NumTab,Numligne);
    break;
  }
}
function AjoutCodage(NumTab,Numligne) {
    if(!(document.getElementById('tab'+NumTab+'Codage'+Numligne)))
    {
        var div = document.getElementById('tab'+NumTab+"CodageParent"+Numligne);

        var Paslabel=document.createElement('label');
        Paslabel.setAttribute('id','tab'+NumTab+'LabelCodage'+Numligne);
        Paslabel.setAttribute('for','tab'+NumTab+'Codage'+Numligne);
        Paslabel.innerHTML = "&nbsp;Codage&nbsp;:&nbsp;";

        var PasS=document.createElement('input');
        PasS.setAttribute('type','text');
        PasS.setAttribute('class','form-control');
        PasS.setAttribute('id','tab'+NumTab+'Codage'+Numligne);
        PasS.setAttribute('name','tab'+NumTab+'Codage'+Numligne);
        PasS.innerHTML = " ";

        div.appendChild(Paslabel);
        div.appendChild(PasS);
    }
}
function SupChampsCodage(NumTab,Numligne){//Supprime les ajouts de la fonction Numérique option codage
  if(document.getElementById('tab'+NumTab+'Codage'+Numligne))
  {
      var parentElement = document.getElementById('tab'+NumTab+"CodageParent"+Numligne);
      var Element = document.getElementById("tab"+NumTab+"Codage"+Numligne);
      parentElement.removeChild(Element);
      Element = document.getElementById("tab"+NumTab+"LabelCodage"+Numligne);
      parentElement.removeChild(Element);
  }
}
function AjoutPasSequentielle(NumTab,Numligne){
  if(!(document.getElementById('tab'+NumTab+'PasSeq'+Numligne)))
  {
    var div = document.getElementById('tab'+NumTab+"PasSeqParent"+Numligne);

    var Paslabel=document.createElement('label');
    Paslabel.setAttribute('id','tab'+NumTab+'LabelPasSeq'+Numligne);
    Paslabel.setAttribute('for','tab'+NumTab+'PasSeq'+Numligne);
    Paslabel.innerHTML = " Pas :";

    var PasS=document.createElement('input');
    PasS.setAttribute('type','text');
    PasS.setAttribute('class','form-control');
    PasS.setAttribute('id','tab'+NumTab+'PasSeq'+Numligne);
    PasS.setAttribute('onchange',"numLigne("+NumTab+","+Numligne+",\"PasSeq\");");
    PasS.setAttribute('name','tab'+NumTab+'PasSeq'+Numligne);
    PasS.innerHTML = " ";

    div.appendChild(Paslabel);
    div.appendChild(PasS);
  }
}
function addTable(){ //ajout d'une table
    VarNumTab+= 1;
    TabIndex[VarNumTab]=0;
    var tabl= document.getElementById("tables");

//entête

    var Div_Table = document.createElement('div');
    Div_Table.setAttribute('id',"table"+VarNumTab);
    Div_Table.setAttribute('class',"well row table bordFin");
    
    var  Div_RW = document.createElement('div');
    Div_RW.setAttribute('class', "row");
    
    var Div_CL = document.createElement('div');
    Div_CL.setAttribute('class',"col-xs-12 col-sn-12 col-md-12 col-lg-12");
    
    var  Div_FH = document.createElement('div');
    Div_FH.setAttribute('class', "form-horizontal ");
    
    var  Div_DG = document.createElement('div');
    Div_DG.setAttribute('class', "form-group DGT");
    

    var LabelNT = document.createElement('label');
    LabelNT.setAttribute('class',"col-xs-2 col-sn-2 col-md-2 col-lg-2 label-change");
    LabelNT.setAttribute('for',"NomTable"+VarNumTab);
    if (lang=="FR") {
      LabelNT.innerHTML = "&nbsp;Nom de la Table&nbsp;:&nbsp;";}
      else { 
      LabelNT.innerHTML = "&nbsp;Table's name&nbsp;:&nbsp;";}

    var Div_NomTable = document.createElement('div');
    Div_NomTable.setAttribute('class',"col-xs-2 col-sn-2 col-md-2 col-lg-2");

    var InputNomTable = document.createElement('input');
    InputNomTable.setAttribute('type',"text");
    InputNomTable.setAttribute('class',"form-control required input-change");
    InputNomTable.setAttribute('name',"NomTable"+VarNumTab);
    InputNomTable.setAttribute('onchange',"ValidationInputParametreTable("+VarNumTab+",'NomTable');validationNomTable("+VarNumTab+");");
    InputNomTable.setAttribute('id',"NomTable"+VarNumTab);
    InputNomTable.innerHTML = " ";

    var LabelNL = document.createElement('label');
    LabelNL.setAttribute('class',"col-xs-2 col-sn-2 col-md-2 col-lg-2 label-change");
    LabelNL.setAttribute('for',"NombreDeLigne"+VarNumTab);
    if (lang=="FR") {
      LabelNL.innerHTML = "&nbsp;Nombre de lignes &nbsp;:&nbsp;";}
      else { 
      LabelNL.innerHTML = "&nbsp;Number of lines &nbsp;:&nbsp;";}

    var Div_NombreLigne = document.createElement('div');
    Div_NombreLigne.setAttribute('class',"col-xs-2 col-sn-2 col-md-2 col-lg-2");

    var InputNombreLigne = document.createElement('input');
    InputNombreLigne.setAttribute('type',"text");
    InputNombreLigne.setAttribute('class',"form-control required input-change");
    InputNombreLigne.setAttribute('onchange',"ValidationInputParametreTable("+VarNumTab+",'NombreDeLigne');");
    InputNombreLigne.setAttribute('name',"NombreDeLigne"+VarNumTab);
    InputNombreLigne.setAttribute('id',"NombreDeLigne"+VarNumTab);
    InputNombreLigne.innerHTML = " ";

    var LabelGRAINE = document.createElement('label');
    LabelGRAINE.setAttribute('class',"col-xs-2 col-sn-2 col-md-2 col-lg-2 label-change ");
    LabelGRAINE.setAttribute('for',"GRAINE"+VarNumTab);
    if (lang=="FR") {
      LabelGRAINE.innerHTML = "&nbsp;Graine de génération&nbsp;:&nbsp;"; }
    else { 
      LabelGRAINE.innerHTML = "&nbsp;Generation seed&nbsp;:&nbsp;"; }

    var Div_GRAINE = document.createElement('div');
    Div_GRAINE.setAttribute('class',"col-xs-2 col-sn-2 col-md-2 col-lg-2");

    var InputGRAINE = document.createElement('input');
    InputGRAINE.setAttribute('type',"text");
    InputGRAINE.setAttribute('class',"form-control input-change required");
    InputGRAINE.setAttribute('name',"GRAINE"+VarNumTab);
    InputGRAINE.setAttribute('onchange',"ValidationInputParametreTable("+VarNumTab+",'GRAINE');");
    InputGRAINE.setAttribute('id',"GRAINE"+VarNumTab);
    InputGRAINE.innerHTML = " ";
    
    var LabelFormat = document.createElement('label');
    LabelFormat.setAttribute('class',"col-xs-2 col-sn-2 col-md-2 col-lg-2 FormatDeSortie"); 
    if (lang=="FR") {
      LabelFormat.innerHTML = " Formats de sortie : ";}
    else {
      LabelFormat.innerHTML = " Output format : ";}

    var LabelCSV = document.createElement('label');
    LabelCSV.setAttribute('class',"formatSortie checkbox-inline label-checkbox");
    LabelCSV.setAttribute('for',"CSV"+VarNumTab);
    LabelCSV.innerHTML = " CSV&nbsp;";

    var InputCSV = document.createElement('input');
    InputCSV.setAttribute('type',"text");
    InputCSV.setAttribute('value',"CSV"+VarNumTab);
    InputCSV.setAttribute('name',"CSV"+VarNumTab);
    InputCSV.setAttribute('id',"CSV"+VarNumTab);
    InputCSV.setAttribute('type',"checkbox");
    InputCSV.setAttribute('class',"pos-checkbox input_option formatSortie"+VarNumTab);
    InputCSV.setAttribute('class',"input_option formatSortie"+VarNumTab);
    InputCSV.setAttribute('onclick',"deRequire('formatSortie"+VarNumTab+"')");
    InputCSV.setAttribute('required','');
    InputCSV.innerHTML = " ";

    var LabelSQL = document.createElement('label');
    LabelSQL.setAttribute('class',"formatSortie checkbox-inline label-checkbox");
    LabelSQL.setAttribute('for',"SQL"+VarNumTab);
    LabelSQL.innerHTML = " SQL&nbsp;";

    var InputSQL = document.createElement('input');
    InputSQL.setAttribute('type',"text");
    InputSQL.setAttribute('value',"SQL"+VarNumTab);
    InputSQL.setAttribute('name',"SQL"+VarNumTab);
    InputSQL.setAttribute('id',"SQL"+VarNumTab);
    InputSQL.setAttribute('type',"checkbox");
    InputSQL.setAttribute('class',"formatSortie"+VarNumTab);
    InputSQL.setAttribute('onclick',"deRequire('formatSortie"+VarNumTab+"')");
    InputSQL.setAttribute('required','');
    InputSQL.innerHTML = " ";

    var LabelXML = document.createElement('label');
    LabelXML.setAttribute('class',"formatSortie checkbox-inline label-checkbox");
    LabelXML.setAttribute('for',"XML"+VarNumTab);
    LabelXML.innerHTML = " XML&nbsp;";

    var InputXML = document.createElement('input');
    InputXML.setAttribute('type',"text");
    InputXML.setAttribute('value',"XML"+VarNumTab);
    InputXML.setAttribute('name',"XML"+VarNumTab);
    InputXML.setAttribute('id',"XML"+VarNumTab);
    InputXML.setAttribute('type',"checkbox");
    InputXML.setAttribute('class',"formatSortie"+VarNumTab);
    InputXML.setAttribute('onclick',"deRequire('formatSortie"+VarNumTab+"')");
    InputXML.setAttribute('required','');
    InputXML.innerHTML = " ";

    var LabelJSON = document.createElement('label');
    LabelJSON.setAttribute('class',"formatSortie checkbox-inline label-checkbox");
    LabelJSON.setAttribute('for',"JSON"+VarNumTab);
    LabelJSON.innerHTML = " JSON&nbsp;";

    var InputJSON = document.createElement('input');
    InputJSON.setAttribute('type',"text");
    InputJSON.setAttribute('value',"JSON"+VarNumTab);
    InputJSON.setAttribute('name',"JSON"+VarNumTab);
    InputJSON.setAttribute('id',"JSON"+VarNumTab);
    InputJSON.setAttribute('type',"checkbox");
    InputJSON.setAttribute('class',"formatSortie"+VarNumTab);
    InputJSON.setAttribute('onclick',"deRequire('formatSortie"+VarNumTab+"')");
    InputJSON.setAttribute('required','');
    InputJSON.innerHTML = " ";
    
//Déclaration des noms

    var LabelND = document.createElement('label');
    LabelND.setAttribute('class',"col-xs-2 col-sn-2 col-md-2 col-lg-2");
    if (lang=="FR") {
      LabelND.innerHTML = "Nom"; }
      else {
      LabelND.innerHTML = "Name"; } 
    
    var LabelTDD = document.createElement('label');
    LabelTDD.setAttribute('class',"col-xs-3 col-sn-3 col-md-3 col-lg-3");
    if (lang=="FR") {
      LabelTDD.innerHTML = "&nbsp; &nbsp; Type de Données"; }
    else {   
      LabelTDD.innerHTML = "&nbsp; &nbsp;  Data types "; } 
    
    var LabelMDG=document.createElement('label');
    LabelMDG.setAttribute('class',"col-xs-3 col-sn-3 col-md-3 col-lg-3");
    if (lang=="FR") {
      LabelMDG.innerHTML = "Mode de Génération"; }
    else {
      LabelMDG.innerHTML = "Generation mode"; }

//Déclaration des input et select

    var Div_0 = document.createElement('div');
    Div_0.setAttribute('id',"tab"+VarNumTab+"Lignes");
    Div_0.setAttribute('class',"row col-xs-12 col-sn-12 col-md-12 col-lg-12 form-inline form-group");

    var Div_1 = document.createElement('div');
    Div_1.setAttribute('class',"row col-xs-12 col-sn-12 col-md-12 col-lg-12 form-inline form-group");

    var Div_2 = document.createElement('div');
    Div_2.setAttribute('id',"tab"+VarNumTab+"Ligne"+TabIndex[VarNumTab]);
    Div_2.setAttribute('class',"row col-xs-12 col-sn-12 col-md-12 col-lg-12 form-inline form-group");

    var InputNom = document.createElement('input');
    InputNom.setAttribute('type',"text");
    InputNom.setAttribute('class',"form-control col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement");
    InputNom.setAttribute('name',"tab"+VarNumTab+"Label"+TabIndex[VarNumTab]);
    InputNom.setAttribute('onchange',"nomLigne("+VarNumTab+","+TabIndex[VarNumTab]+",\"Label\" );");
    InputNom.setAttribute('id',"tab"+VarNumTab+"Label"+TabIndex[VarNumTab]);
    InputNom.innerHTML = " ";



    var SelectTDD = document.createElement('select');
    SelectTDD.setAttribute('class',"form-control col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement");
    SelectTDD.setAttribute('id',"tab"+VarNumTab+"TypeDeDonnees"+TabIndex[VarNumTab]);
    SelectTDD.setAttribute('name',"tab"+VarNumTab+"TypeDeDonnees"+TabIndex[VarNumTab]);
    SelectTDD.setAttribute('onchange',"GestionOptionTDD("+VarNumTab+","+TabIndex[VarNumTab]+");");
    SelectTDD.setAttribute('required','');

    var OptTDD0 = document.createElement('option');
    OptTDD0.setAttribute('class',"Defaultab");
    OptTDD0.setAttribute('value',"");
    if (lang=="FR") {
      OptTDD0.innerHTML="Choisissez un type de données";}
      else {
      OptTDD0.innerHTML="Select a data type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";}

    var OptTDD1 = document.createElement('option');
    OptTDD1.setAttribute('value',"id");
    OptTDD1.innerHTML="ID";

    var OptTDD2 = document.createElement('option');
    OptTDD2.setAttribute('value',"IDS");
    OptTDD2.innerHTML="IDS";

    var OptTDD3 = document.createElement('option');
    OptTDD3.setAttribute('value',"Numerique");
    if (lang=="FR") {
      OptTDD3.innerHTML="Numerique";}
    else {
      OptTDD3.innerHTML="Numeric";}
    var OptTDD4 = document.createElement('option');
    OptTDD4.setAttribute('value',"Dictionnaire");
    if (lang=="FR") {
      OptTDD4.innerHTML="Dictionnaire"; }
    else {
      OptTDD4.innerHTML="Dictionary"; }
    var OptTDD5 = document.createElement('option');
    OptTDD5.setAttribute('value',"DateHeure");
    if (lang=="FR") {
      OptTDD5.innerHTML="DateHeure";}
    else {
      OptTDD5.innerHTML="DateHour";}
    var OptTDD6 = document.createElement('option');
    OptTDD6.setAttribute('value',"CodeArticle");
    if (lang=="FR") {
      OptTDD6.innerHTML="CodeArticle";}
    else {
      OptTDD6.innerHTML="ArticleCode";}

    var OptTDD7 = document.createElement('option');
    OptTDD7.setAttribute('value',"Reference");
    OptTDD7.innerHTML="Reference";

    var OptTDD8 = document.createElement('option');
    OptTDD8.setAttribute('value',"Formule");
    if (lang=="FR") {
      OptTDD8.innerHTML="Formule"; }
    else {
      OptTDD8.innerHTML="Formula"; }


    var SelectMDG = document.createElement('select');
    SelectMDG.setAttribute('class',"form-control col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement");
    SelectMDG.setAttribute("disabled","disabled");
    SelectMDG.setAttribute('id',"tab"+VarNumTab+"ModeDeGeneration"+TabIndex[VarNumTab]);
    SelectMDG.setAttribute('name',"tab"+VarNumTab+"ModeDeGeneration"+TabIndex[VarNumTab]);
    SelectMDG.setAttribute('onchange',"GestionOptionMDG("+VarNumTab+","+TabIndex[VarNumTab]+");");
    var OptMDG0 = document.createElement('option');

    OptMDG0.setAttribute('class',"Defaultab");
    if (lang=="FR") {
      OptMDG0.innerHTML="Choisissez un mode   "; }
    else {
      OptMDG0.innerHTML="Select a mode&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"; }

    var OptMDG1 = document.createElement('option');
    OptMDG1.setAttribute('value',"Aleatoire");
    if (lang=="FR") {
      OptMDG1.innerHTML=" Aléatoire";}
      else { 
      OptMDG1.innerHTML=" Random";}

    var OptMDG2 = document.createElement('option');
    OptMDG2.setAttribute('value',"LoiNormale");
    if (lang=="FR") {
      OptMDG2.innerHTML=" Loi Normale";}
    else {
      OptMDG2.innerHTML=" Normal Law";}

    var OptMDG3 = document.createElement('option');
    OptMDG3.setAttribute('value',"Sequentielle");
    if (lang=="FR") {
      OptMDG3.innerHTML="Séquentielle";}
      else {
      OptMDG3.innerHTML="Sequential";}

    var OptMDG4 = document.createElement('option');
    OptMDG4.setAttribute('value',"formule");
    if (lang=="FR") {
      OptMDG4.innerHTML="Formule";}
      else {
      OptMDG4.innerHTML="Formula";}

    var OptMDG5 = document.createElement('option');
    OptMDG5.setAttribute('value',"Codage");
    if (lang=="FR") {
      OptMDG5.innerHTML="Codage";}
      else {
      OptMDG5.innerHTML="Coding";}

    var Div_Min = document.createElement('div');
    Div_Min.setAttribute('id',"tab"+VarNumTab+"MinParent"+TabIndex[VarNumTab]);
    Div_Min.setAttribute('class',"form-group col-auto");

    var Div_Max = document.createElement('div');
    Div_Max.setAttribute('id',"tab"+VarNumTab+"MaxParent"+TabIndex[VarNumTab]);
    Div_Max.setAttribute('class',"form-group col-auto");

    var Div_Seq = document.createElement('div');
    Div_Seq.setAttribute('id',"tab"+VarNumTab+"PasSeqParent"+TabIndex[VarNumTab]);
    Div_Seq.setAttribute('class',"form-group col-auto");

    var Div_Dico=document.createElement('div');
    Div_Dico.setAttribute('id',"tab"+VarNumTab+"DicoParent"+TabIndex[VarNumTab]);
    Div_Dico.setAttribute('class',"form-group col-auto");

    var Div_Formule =document.createElement('div');
    Div_Formule.setAttribute('id',"tab"+VarNumTab+"FormuleParent"+TabIndex[VarNumTab]);
    Div_Formule.setAttribute('class',"form-group col-auto");

    var Div_Codage =document.createElement('div');
    Div_Codage.setAttribute('id',"tab"+VarNumTab+"CodageParent"+TabIndex[VarNumTab]);
    Div_Codage.setAttribute('class',"form-group col-auto");

    var Div_Reference =document.createElement('div');
    Div_Reference.setAttribute('id',"tab"+VarNumTab+"ReferenceParent"+TabIndex[VarNumTab]);
    Div_Reference.setAttribute('class',"form-group col-auto");

    var Div_Prefixe = document.createElement('div');
    Div_Prefixe.setAttribute('id',"tab"+VarNumTab+"PrefixeParent"+TabIndex[VarNumTab]);
    Div_Prefixe.setAttribute('class',"form-group col-auto");

    var Div_Suffixe = document.createElement('div');
    Div_Suffixe.setAttribute('id',"tab"+VarNumTab+"SuffixeParent"+TabIndex[VarNumTab]);
    Div_Suffixe.setAttribute('class',"form-group col-auto");

    var Div_NbChiffres = document.createElement('div');
    Div_NbChiffres.setAttribute('id',"tab"+VarNumTab+"NbChiffresParent"+TabIndex[VarNumTab]);
    Div_NbChiffres.setAttribute('class',"form-group col-auto");

    var Div_Unite = document.createElement('div');
    Div_Unite.setAttribute('id',"tab"+VarNumTab+"UniteParent"+TabIndex[VarNumTab]);
    Div_Unite.setAttribute('class',"form-group col-auto");

    var Div_HeureMin = document.createElement('div');
    Div_HeureMin.setAttribute('id',"tab"+VarNumTab+"DateHeureMinParent"+TabIndex[VarNumTab]);
    Div_HeureMin.setAttribute('class',"form-group col-auto");

    var Div_HeureMax = document.createElement('div');
    Div_HeureMax.setAttribute('id',"tab"+VarNumTab+"DateHeureMaxParent"+TabIndex[VarNumTab]);
    Div_HeureMax.setAttribute('class',"form-group col-auto");

    var Div_Masque = document.createElement('div');
    Div_Masque.setAttribute('id',"tab"+VarNumTab+"MasqueParent"+TabIndex[VarNumTab]);
    Div_Masque.setAttribute('class',"form-group col-auto");

    var Div_LesNull = document.createElement('div');
    Div_LesNull.setAttribute('id',"tab"+VarNumTab+"LesNullParent"+TabIndex[VarNumTab]);
    Div_LesNull.setAttribute('class',"form-group col-auto");

    var Div_Btn = document.createElement('div');
    Div_Btn.setAttribute('class',"row col-xs-12 col-sn-12 col-md-12 col-lg-12");


    var Btn_Add_Row = document.createElement('button');
    Btn_Add_Row.setAttribute('type',"button");
    Btn_Add_Row.setAttribute('class',"plus1");
    Btn_Add_Row.setAttribute('onclick',"addRow("+VarNumTab+");");
    if (lang == "FR") {
      Btn_Add_Row.innerHTML="<img class = \"images\" title= \"Ajoute une colonne\" src=\"./Style/image/plus.png\"  />"; }
    else {
      Btn_Add_Row.innerHTML="<img class = \"images\" title= \"Add a line\" src=\"./Style/image/plus.png\"  />"; }
    

    var btn = document.createElement('button');
    btn.setAttribute('id',"tab"+VarNumTab+"BoutonSuppression"+TabIndex[VarNumTab]);
    btn.setAttribute('type',"button");
    btn.setAttribute('class',"form-group form-control col-auto croix");
    btn.setAttribute('onclick',"DelRow(" + VarNumTab + ","  + TabIndex[VarNumTab] + ");");
    
    var image = document.createElement('img');
    image.setAttribute('class',"image_croix");
    if (lang == "FR") {
      image.setAttribute('title',"Supprime la ligne");}
      else {
      image.setAttribute('title',"Delete line");}
    image.setAttribute('src',"./Style/image/croix.png");

// modifier cette partie pour pouvoir avoir le rendu visuel
// Partie qui sert à rattacher les élement aux noeuds parents

    tabl.appendChild(Div_Table);
    Div_Table.appendChild(Div_RW);
    Div_RW.appendChild(Div_CL);
    Div_CL.appendChild(Div_FH);
    Div_FH.appendChild(Div_DG);
    

    Div_DG.appendChild(LabelNT);
    Div_DG.appendChild(Div_NomTable);
    Div_NomTable.appendChild(InputNomTable);

    Div_DG.appendChild(LabelNL);
    Div_DG.appendChild(Div_NombreLigne);
    Div_NombreLigne.appendChild(InputNombreLigne);

    Div_DG.appendChild(LabelGRAINE);
    Div_DG.appendChild(Div_GRAINE);
    Div_GRAINE.appendChild(InputGRAINE);

    Div_DG.appendChild(LabelFormat);

    Div_DG.appendChild(LabelCSV);
    Div_DG.appendChild(InputCSV);

    Div_DG.appendChild(LabelSQL);
    Div_DG.appendChild(InputSQL);

    Div_DG.appendChild(LabelXML);
    Div_DG.appendChild(InputXML);

    Div_DG.appendChild(LabelJSON);
    Div_DG.appendChild(InputJSON);

    Div_Table.appendChild(Div_0);
    Div_0.appendChild(Div_1);
    Div_0.appendChild(Div_2);
    Div_1.appendChild(LabelND);
    Div_1.appendChild(LabelTDD);
    Div_1.appendChild(LabelMDG);
    
    Div_2.appendChild(InputNom);
    Div_2.appendChild(SelectTDD);
    SelectTDD.appendChild(OptTDD0);
    SelectTDD.appendChild(OptTDD1);
    SelectTDD.appendChild(OptTDD2);
    SelectTDD.appendChild(OptTDD3);
    SelectTDD.appendChild(OptTDD4);
    SelectTDD.appendChild(OptTDD5);
    SelectTDD.appendChild(OptTDD6);
    SelectTDD.appendChild(OptTDD7);
    SelectTDD.appendChild(OptTDD8);
   
    Div_2.appendChild(SelectMDG);
    SelectMDG.appendChild(OptMDG0);
    SelectMDG.appendChild(OptMDG1);
    SelectMDG.appendChild(OptMDG2);
    SelectMDG.appendChild(OptMDG3);
    SelectMDG.appendChild(OptMDG4);
    SelectMDG.appendChild(OptMDG5);
    Div_2.appendChild(Div_Min);
    Div_2.appendChild(Div_Max);
    Div_2.appendChild(Div_Seq);
    Div_2.appendChild(Div_Dico);
    Div_2.appendChild(Div_Formule);
    Div_2.appendChild(Div_Codage);
    Div_2.appendChild(Div_Reference);
    Div_2.appendChild(Div_Prefixe);
    Div_2.appendChild(Div_Suffixe);
    Div_2.appendChild(Div_NbChiffres);
    Div_2.appendChild(Div_Unite);
    Div_2.appendChild(Div_HeureMin);
    Div_2.appendChild(Div_HeureMax);
    Div_2.appendChild(Div_Masque);
    Div_2.appendChild(Div_LesNull);
    Div_2.appendChild(btn);
    btn.appendChild(image);
    Div_Table.appendChild(Div_Btn);
    Div_Btn.appendChild(Btn_Add_Row);
}
function delTable(){
    if(VarNumTab>0)
    {
        var parentElement = document.getElementById("tables");
        var Element = document.getElementById('table'+VarNumTab);
        parentElement.removeChild(Element);
        VarNumTab -=1;
        TabIndex.pop();
    }
}
function RAZ() {
    location.reload(true);
}
function champMultiple(NumTab,Numligne){
    if(document.getElementById('tab'+NumTab+'Dictionnaire'+Numligne)){
        var sel=document.getElementById('tab'+NumTab+'Dictionnaire'+Numligne);

        if(sel.value == "villes" || sel.value == "Prenoms") {
            var div = document.getElementById("tab" + NumTab + "DicoParent" + Numligne);

            var DependanceLabel = document.createElement('label');
            DependanceLabel.setAttribute('for', "tab" + NumTab + "SelectDependance" + Numligne);
            DependanceLabel.setAttribute('id', "tab" + NumTab + "LabelDependance" + Numligne);
            if (lang=="FR") {
              DependanceLabel.innerHTML = "&nbsp; Champs multiples ? :";}
            else {
              DependanceLabel.innerHTML = "&nbsp; Multiples fields ? :";}

            var SelectDependance = document.createElement('select');
            SelectDependance.setAttribute('class', "form-control");
            SelectDependance.setAttribute('id', "tab" + NumTab + "SelectDependance" + Numligne);
            SelectDependance.setAttribute('name', "tab" + NumTab + "SelectDependance" + Numligne);
            if (lang=="FR") {
              SelectDependance.setAttribute('title', "Permet de générer des données supplémentaire déduite\n" +
                "du dictionnaire si celui ci gère cette option \n" +
                "par exemple, pour le dictionnaire des prénoms\n" +
                "l'on générera une donnée Sexe cohérente\n" +
                "Dans le cas du dictionnaire Ville l'on\n" +
                "génere le code postal");
            } else {
              SelectDependance.setAttribute('title', "Allow to generate further data from\n" +
              "the dictionary if it manage this option \n" +
              "for example, the first name dictionary\n" +
              "it will generate a data consistent with the gender\n" +
              "for the town dictionary\n" +
              "it will generate a proper postal code");
            }
            
            

            var OptDep1 = document.createElement('option');
            OptDep1.setAttribute('value', "False");
            if (lang=="FR") {
              OptDep1.innerHTML = "Non";}
            else {
              OptDep1.innerHTML = "No";}

            var OptDep2 = document.createElement('option');
            OptDep2.setAttribute('value', "True");
            if (lang=="FR") {
              OptDep2.innerHTML = "Oui";}
            else {
              OptDep2.innerHTML = "Yes";}

            if(!document.getElementById("tab" +NumTab + "LabelDependance" + Numligne)) {

                div.appendChild(DependanceLabel);
                div.appendChild(SelectDependance);

                SelectDependance.appendChild(OptDep1);
                SelectDependance.appendChild(OptDep2);
            }
        } else{
            if(document.getElementById("tab" +NumTab + "LabelDependance" + Numligne)){
                var el = document.getElementById("tab" +NumTab + "LabelDependance" + Numligne);
                var el2 = document.getElementById("tab" +NumTab + "SelectDependance" + Numligne);
                el.parentNode.removeChild(el);
                el2.parentNode.removeChild(el2);
            }
        }
    }
}
function SupChampMultiple(NumTab,Numligne) { //Supprime un champ multiple
    if(document.getElementById("tab" +NumTab + "LabelDependance" + Numligne)){
        var el = document.getElementById("tab" +NumTab + "LabelDependance" + Numligne);
        var el2 = document.getElementById("tab" +NumTab + "SelectDependance" + Numligne);
        el.parentNode.removeChild(el);
        el2.parentNode.removeChild(el2);
    }
}
function AjoutChampsReference(NumTab, Numligne){

    var div = document.getElementById("tab" + NumTab + "ReferenceParent" + Numligne);

    var TableReferenceLabel = document.createElement('label');
    TableReferenceLabel.setAttribute('id', "tab" + NumTab + "LabelTableReference" + Numligne);
    if (lang=="FR") {
      TableReferenceLabel.innerHTML = "&nbsp;Table de Reference&nbsp;:&nbsp;";}
    else {
      TableReferenceLabel.innerHTML = "&nbsp;Reference Table&nbsp;:&nbsp;";}

    var InputTableReference = document.createElement('input');
    InputTableReference.setAttribute('class', "form-control");
    InputTableReference.setAttribute('type', 'text');
    InputTableReference.setAttribute('id', "tab" + NumTab + "TableReference" + Numligne);
    InputTableReference.setAttribute('name', "tab" + NumTab + "TableReference" + Numligne);
    InputTableReference.setAttribute('onchange',"ValidationTableReference("+NumTab+","+Numligne+");");

    var ColonneReferenceLabel = document.createElement('label');
    ColonneReferenceLabel.setAttribute('id', "tab" + NumTab + "LabelColonneReference" + Numligne);
    if (lang=="FR") {
      ColonneReferenceLabel.innerHTML = "&nbsp;Colonne de Reference&nbsp;:&nbsp;";}
    else {
      ColonneReferenceLabel.innerHTML = "&nbsp;Reference Column&nbsp;:&nbsp;";}

    var InputColonneReference = document.createElement('input');
    InputColonneReference.setAttribute('class', "form-control");
    InputColonneReference.setAttribute('type', 'text');
    InputColonneReference.setAttribute('id', "tab" + NumTab + "ColonneReference" + Numligne);
    InputColonneReference.setAttribute('name', "tab" + NumTab + "ColonneReference" + Numligne);
    InputColonneReference.setAttribute('onchange',"ValidationColonneReference("+NumTab+","+Numligne+");");

    div.appendChild(TableReferenceLabel);
    div.appendChild(InputTableReference);
    div.appendChild(ColonneReferenceLabel);
    div.appendChild(InputColonneReference);

}
function SupChampsReference(NumTab,Numligne){//Supprime les champs du type référence    
  if(document.getElementById('tab'+NumTab+'ReferenceParent'+Numligne)){
        var containerReference = document.getElementById('tab'+NumTab+"ReferenceParent"+Numligne);
        while (containerReference.hasChildNodes()) {
          containerReference.removeChild(containerReference.lastChild);
        }
    }
}
function AjoutChampsIDS(NumTab,Numligne){ //Ajoute les champs préfixe, suffixe et NbChiffres pour la donnée IDS
  
  var type=document.getElementById('tab'+NumTab+'TypeDeDonnees'+Numligne);//On recupère le type de la donnée

  if(!(document.getElementById('tab'+NumTab+'Prefixe'+Numligne)))
  {
    var div = document.getElementById("tab"+NumTab+"PrefixeParent"+Numligne);

    var prefixelabel=document.createElement('label');
    prefixelabel.setAttribute('id',"tab"+NumTab+"LabelPrefixe"+Numligne);
    prefixelabel.setAttribute('for',"tab"+NumTab+"Prefixe"+Numligne);
    if (lang=="FR") {
      prefixelabel.innerHTML = " Préfixe :";}
    else {
      prefixelabel.innerHTML = " Prefix :";}

    var prefixe=document.createElement('input');
    prefixe.setAttribute('type','text');
    prefixe.setAttribute('class','form-control required');
    prefixe.setAttribute('id',"tab"+NumTab+"Prefixe"+Numligne);
    prefixe.setAttribute('onchange',"nomLigne("+NumTab+","+Numligne+",\"Prefixe\" );");
    prefixe.setAttribute('name',"tab"+NumTab+"Prefixe"+Numligne);
    prefixe.innerHTML = " ";

    div.appendChild(prefixelabel);
    div.appendChild(prefixe);
  }

  if(!(document.getElementById('tab'+NumTab+'NbChiffres'+Numligne)))
  {
    var div = document.getElementById("tab"+NumTab+"NbChiffresParent"+Numligne);

    var nbChiffreslabel=document.createElement('label');
    nbChiffreslabel.setAttribute('id',"tab"+NumTab+"LabelNbChiffres"+Numligne);
    nbChiffreslabel.setAttribute('for',"tab"+NumTab+"NbChiffres"+Numligne);
    if (lang=="FR") {
      nbChiffreslabel.innerHTML = " NbChiff :";}
    else {
      nbChiffreslabel.innerHTML = " FigureNb :";}

    var nbChiffres=document.createElement('input');
    nbChiffres.setAttribute('type','text');
    nbChiffres.setAttribute('class','form-control');
    nbChiffres.setAttribute('id',"tab"+NumTab+"NbChiffres"+Numligne);
    nbChiffres.setAttribute('onchange',"numLigne("+NumTab+","+Numligne+",\"NbChiffres\" );");
    nbChiffres.setAttribute('name',"tab"+NumTab+"NbChiffres"+Numligne);
    nbChiffres.innerHTML = " ";

    div.appendChild(nbChiffreslabel);
    div.appendChild(nbChiffres);
  }

  if(!(document.getElementById('tab'+NumTab+'Suffixe'+Numligne)))
  {
    var div = document.getElementById("tab"+NumTab+"SuffixeParent"+Numligne);

    var  suffixelabel=document.createElement('label');
    suffixelabel.setAttribute('for',"tab"+NumTab+"Suffixe"+Numligne);
    suffixelabel.setAttribute('id',"tab"+NumTab+"LabelSuffixe"+Numligne);
    if (lang=="FR") {
      suffixelabel.innerHTML = " Suffixe :";}
    else {
      suffixelabel.innerHTML = " Suffix :";}

    var  suffixe=document.createElement('input');
    suffixe.setAttribute('type','text');
    suffixe.setAttribute('class','form-control');
    suffixe.setAttribute('id',"tab"+NumTab+"Suffixe"+Numligne);
    suffixe.setAttribute('name',"tab"+NumTab+"Suffixe"+Numligne);
    suffixe.setAttribute('onchange',"numLigne("+NumTab+","+Numligne+",\"Suffixe\");");
    suffixe.innerHTML = " ";

    div.appendChild(suffixelabel);
    div.appendChild(suffixe);
  }
}
function SupChampsIDS(NumTab,Numligne){//Suprime les ajout de la fonction IDS
  if((document.getElementById('tab'+NumTab+'Prefixe'+Numligne)) && (document.getElementById('tab'+NumTab+'Suffixe'+Numligne)))
  {
      var parentElement = document.getElementById('tab'+NumTab+"PrefixeParent"+Numligne);
      var Element = document.getElementById("tab"+NumTab+"Prefixe"+Numligne);
      parentElement.removeChild(Element);
      Element = document.getElementById("tab"+NumTab+"LabelPrefixe"+Numligne);
      parentElement.removeChild(Element);
      parentElement = document.getElementById("tab"+NumTab+"SuffixeParent"+Numligne);
      Element = document.getElementById("tab"+NumTab+"LabelSuffixe"+Numligne);
      parentElement.removeChild(Element);
      Element = document.getElementById("tab"+NumTab+"Suffixe"+Numligne);
      parentElement.removeChild(Element);
      parentElement = document.getElementById("tab"+NumTab+"NbChiffresParent"+Numligne);
      Element = document.getElementById("tab"+NumTab+"LabelNbChiffres"+Numligne);
      parentElement.removeChild(Element);
      Element = document.getElementById("tab"+NumTab+"NbChiffres"+Numligne);
      parentElement.removeChild(Element);
  }
}
function champMajuscule(NumTab,Numligne){//Ajout du champ majuscule
  if(document.getElementById('tab'+NumTab+'LabelDico'+Numligne)){

    var div = document.getElementById("tab" + NumTab + "DicoParent" + Numligne);

    var MajusculeLabel = document.createElement('label');
    MajusculeLabel.setAttribute('for', "tab" + NumTab + "SelectMajuscule" + Numligne);
    MajusculeLabel.setAttribute('id', "tab" + NumTab + "LabelMajuscule" + Numligne);
    if (lang=="FR") {
      MajusculeLabel.innerHTML = "&nbsp; En majuscules ? :";}
    else {
      MajusculeLabel.innerHTML = "&nbsp; In capital letters ? :";}

    var SelectMajuscule = document.createElement('select');
    SelectMajuscule.setAttribute('class', "form-control");
    SelectMajuscule.setAttribute('id', "tab" + NumTab + "SelectMajuscule" + Numligne);
    SelectMajuscule.setAttribute('name', "tab" + NumTab + "SelectMajuscule" + Numligne);
    if (lang=="FR") {
      SelectMajuscule.setAttribute('title', "Permet de générer des données entièrement en majuscules");}
    else {
      SelectMajuscule.setAttribute('title', "Allow to generate data in capital letters");}

    var OptDep1 = document.createElement('option');
    OptDep1.setAttribute('value', "non");
    if (lang=="FR") {
      OptDep1.innerHTML = "Non";}
    else {
      OptDep1.innerHTML = "No";}

    var OptDep2 = document.createElement('option');
    OptDep2.setAttribute('value', "oui");
    if (lang=="FR") {
      OptDep2.innerHTML = "Oui";}
    else {
      OptDep2.innerHTML = "Yes";}

    if(!document.getElementById("tab" +NumTab + "LabelMajuscule" + Numligne)) {

        div.appendChild(MajusculeLabel);
        div.appendChild(SelectMajuscule);

        SelectMajuscule.appendChild(OptDep1);
        SelectMajuscule.appendChild(OptDep2);
    }
  }
}

function SupChampMajuscule(NumTab,Numligne) { //Supprime un champ majuscule
  if(document.getElementById("tab" +NumTab + "LabelMajuscule" + Numligne)){
      var el = document.getElementById("tab" +NumTab + "LabelMajuscule" + Numligne);
      var el2 = document.getElementById("tab" +NumTab + "SelectMajuscule" + Numligne);
      el.parentNode.removeChild(el);
      el2.parentNode.removeChild(el2);
  }
}
function AjoutChampsDateHeure(NumTab,Numligne){//Ajoute les champs date heure min et date heure max pour les données DateHeure
  if(!(document.getElementById('tab'+NumTab+'DateHeureMin'+Numligne)))
  {
    var div = document.getElementById("tab"+NumTab+"DateHeureMinParent"+Numligne);

    var dateHeureMinLabel=document.createElement('label');
    dateHeureMinLabel.setAttribute('id',"tab"+NumTab+"LabelDateHeureMin"+Numligne);
    dateHeureMinLabel.setAttribute('for',"tab"+NumTab+"DateHeureMin"+Numligne);
    if (lang=="FR") {
      dateHeureMinLabel.innerHTML = "Date et Heure minimum :";}
    else {
      dateHeureMinLabel.innerHTML = "Minimum Date and Hour :";}
    

    var dateHeureMin=document.createElement('input');
    dateHeureMin.setAttribute('type','text');
    dateHeureMin.setAttribute('class','form-control required');
    dateHeureMin.setAttribute('id',"tab"+NumTab+"DateHeureMin"+Numligne);
    dateHeureMin.setAttribute('onchange',"validationDateHeure("+NumTab+","+Numligne+",\"DateHeureMin\" );");
    dateHeureMin.setAttribute('name',"tab"+NumTab+"DateHeureMin"+Numligne);
    dateHeureMin.innerHTML = " ";

    div.appendChild(dateHeureMinLabel);
    div.appendChild(dateHeureMin);
  }

  if(!(document.getElementById('tab'+NumTab+'DateHeureMax'+Numligne)))
  {
    var div2 = document.getElementById("tab"+NumTab+"DateHeureMaxParent"+Numligne);

    var dateHeureMaxLabel=document.createElement('label');
    dateHeureMaxLabel.setAttribute('id',"tab"+NumTab+"LabelDateHeureMax"+Numligne);
    dateHeureMaxLabel.setAttribute('for',"tab"+NumTab+"DateHeureMax"+Numligne);
    if (lang=="FR") {
      dateHeureMaxLabel.innerHTML = "Date et Heure maximum :";}
    else {
      dateHeureMaxLabel.innerHTML = "Maximum Date and Hour  :";}

    var dateHeureMax=document.createElement('input');
    dateHeureMax.setAttribute('type','text');
    dateHeureMax.setAttribute('class','form-control required');
    dateHeureMax.setAttribute('id',"tab"+NumTab+"DateHeureMax"+Numligne);
    dateHeureMax.setAttribute('onchange',"validationDateHeure("+NumTab+","+Numligne+",\"DateHeureMax\" );");
    dateHeureMax.setAttribute('name',"tab"+NumTab+"DateHeureMax"+Numligne);
    dateHeureMax.innerHTML = " ";

    div2.appendChild(dateHeureMaxLabel);
    div2.appendChild(dateHeureMax);
  }
}
function SupChampsDateHeure(NumTab,Numligne){//Supprime les champs de la fonction dateHeure
  if((document.getElementById('tab'+NumTab+'DateHeureMax'+Numligne)) && (document.getElementById('tab'+NumTab+'DateHeureMin'+Numligne)))
  {
      var parentElement = document.getElementById('tab'+NumTab+"DateHeureMaxParent"+Numligne);
      var Element = document.getElementById("tab"+NumTab+"DateHeureMax"+Numligne);
      parentElement.removeChild(Element);
      Element = document.getElementById("tab"+NumTab+"LabelDateHeureMax"+Numligne);
      parentElement.removeChild(Element);
      parentElement = document.getElementById("tab"+NumTab+"DateHeureMinParent"+Numligne);
      Element = document.getElementById("tab"+NumTab+"LabelDateHeureMin"+Numligne);
      parentElement.removeChild(Element);
      Element = document.getElementById("tab"+NumTab+"DateHeureMin"+Numligne);
      parentElement.removeChild(Element);
  }
}
function AjoutChampsCodeArticle(NumTab,Numligne){//Ajoute le champ masque des données CodeArticle
  if(!(document.getElementById('tab'+NumTab+'Masque'+Numligne)))
  {
    var div = document.getElementById("tab"+NumTab+"MasqueParent"+Numligne);

    var masqueLabel=document.createElement('label');
    masqueLabel.setAttribute('id',"tab"+NumTab+"LabelMasque"+Numligne);
    masqueLabel.setAttribute('for',"tab"+NumTab+"Masque"+Numligne);
    if (lang=="FR") {
      masqueLabel.innerHTML = "Masque de l'identifiant :";}
    else {
      masqueLabel.innerHTML = "Identifier mask :";}

    var masque=document.createElement('input');
    masque.setAttribute('type','text');
    masque.setAttribute('class','form-control');
    masque.setAttribute('id',"tab"+NumTab+"Masque"+Numligne);
    masque.setAttribute('onchange',"validationCodeArticle("+NumTab+","+Numligne+",\"Masque\" );");
    masque.setAttribute('name',"tab"+NumTab+"Masque"+Numligne);
    masque.innerHTML = " ";

    div.appendChild(masqueLabel);
    div.appendChild(masque);
  }
}
function SupChampsCodeArticle(NumTab,Numligne){//Supprime les ajouts de la fonction CodeArticle
  if(document.getElementById('tab'+NumTab+'Masque'+Numligne))
  {
      var parentElement = document.getElementById('tab'+NumTab+"MasqueParent"+Numligne);
      var Element = document.getElementById("tab"+NumTab+"Masque"+Numligne);
      parentElement.removeChild(Element);
      Element = document.getElementById("tab"+NumTab+"LabelMasque"+Numligne);
      parentElement.removeChild(Element);
  }
}
function AjoutChampsNull(NumTab,Numligne){ //Ajoute le champ NULL
  if(!(document.getElementById('tab'+NumTab+'LesNull'+Numligne)))
  {
    var div = document.getElementById("tab"+NumTab+"LesNullParent"+Numligne); 

    var lesNullLabel=document.createElement('label');
    lesNullLabel.setAttribute('id',"tab"+NumTab+"LabelLesNull"+Numligne);
    lesNullLabel.setAttribute('for',"tab"+NumTab+"LesNull"+Numligne);
    lesNullLabel.innerHTML = "&nbsp;Null&nbsp;:&nbsp;";

    var lesNull=document.createElement('input');
    lesNull.setAttribute('type',"text");
    lesNull.setAttribute('class',"form-control");
    lesNull.setAttribute('name',"tab"+NumTab+"LesNull"+Numligne);
    lesNull.setAttribute('id',"tab"+NumTab+"LesNull"+Numligne);
    lesNull.setAttribute('onchange',"nullLigne("+NumTab+","+Numligne+");");
    lesNull.innerHTML = " ";

    div.appendChild(lesNullLabel);
    div.appendChild(lesNull);
  }
}
function SupChampsNull(NumTab,Numligne){ //Supprime le champ NULL
  if(document.getElementById('tab'+NumTab+'LesNull'+Numligne))
  {
    var parentElement = document.getElementById('tab'+NumTab+"LesNullParent"+Numligne);
    var Element = document.getElementById("tab"+NumTab+"LesNull"+Numligne);
    parentElement.removeChild(Element);
    Element = document.getElementById("tab"+NumTab+"LabelLesNull"+Numligne);
    parentElement.removeChild(Element);
  }
}
function RAZExemples(){ //Fontion de remise à zero des différentes tables et champs d'un projet de génération
  nombrebTable = document.getElementById("tables").childElementCount;
  var i;
  var j;
  if((document.getElementById("BoutonEnvois").hasAttribute("disabled"))){
    document.getElementById("BoutonEnvois").disabled = false;
  }
  document.getElementById("formulaire").reset();
  for(i = nombrebTable ; i >= 0 ; i--){ //On commence par les dernières tables 
    if(i==0){
      nombreLigne = document.getElementById("tab"+i+"Lignes").childElementCount-2;
      for(j = nombreLigne ; j > 0 ; j--){ //Pour la première on ne supprime que les lignes
        console.log(j);
        DelRow(i,j);
      }
    }else{
      delTable(i);
    }
  }    
}
function EchangeFeuille(NomEnfant,NumTab,NumLigne,NouveauNumTab,NouveauNumLigne){ //Fonction permettant de modifier les feuilles d'un element parent
  if(document.getElementById('tab'+NumTab+NomEnfant+'Parent'+NumLigne).children.length>0){ //Si il y a des feuilles chez le parent
    document.getElementById('tab'+NumTab+'Label'+NomEnfant+NumLigne).attributes.for.nodeValue = 'tab'+NouveauNumTab+NomEnfant+NouveauNumLigne; //Modification de l'attribut for
    document.getElementById('tab'+NumTab+'Label'+NomEnfant+NumLigne).id = 'tab'+NouveauNumTab+'Label'+NomEnfant+NouveauNumLigne; //Modification de l'id

    if(NomEnfant=="Min"||NomEnfant=="Max"||NomEnfant=="NbChiffres"||NomEnfant=="Suffixe"){ //Modification des fonctions de validation
      document.getElementById('tab'+NumTab+NomEnfant+NumLigne).attributes.onchange.nodeValue = "numLigne("+NouveauNumTab+","+NouveauNumLigne+",'"+NomEnfant+"');";                      //Les nombres
    }else if(NomEnfant=="Unite"||NomEnfant=="Prefixe"){
      document.getElementById('tab'+NumTab+NomEnfant+NumLigne).attributes.onchange.nodeValue = "nomLigne("+NouveauNumTab+","+NouveauNumLigne+",'"+NomEnfant+"');";                      //Les noms
    }else if(NomEnfant=="LesNull"){
      document.getElementById('tab'+NumTab+NomEnfant+NumLigne).attributes.onchange.nodeValue = "nullLigne("+NouveauNumTab+","+NouveauNumLigne+");";                                     //La valeur NULL
    }else if(NomEnfant=="DateHeureMin"||NomEnfant=="DateHeureMax"){
      document.getElementById('tab'+NumTab+NomEnfant+NumLigne).attributes.onchange.nodeValue = "validationDateHeure("+NouveauNumTab+","+NouveauNumLigne+",'"+NomEnfant+"');";           //Les dates/heures
    }else if(NomEnfant=="Masque"){
      document.getElementById('tab'+NumTab+NomEnfant+NumLigne).attributes.onchange.nodeValue = "validationCodeArticle("+NouveauNumTab+","+NouveauNumLigne+",'"+NomEnfant+"');";         //Le Masque
    }else if(NomEnfant=="Formule"){
      document.getElementById('tab'+NumTab+NomEnfant+NumLigne).attributes.onchange.nodeValue = "validation"+NomEnfant+"("+NouveauNumTab+","+NouveauNumLigne+",'"+NomEnfant+"');";       //La formule
    }
    document.getElementById('tab'+NumTab+NomEnfant+NumLigne).name = 'tab'+NouveauNumTab+NomEnfant+NouveauNumLigne;
    document.getElementById('tab'+NumTab+NomEnfant+NumLigne).id = 'tab'+NouveauNumTab+NomEnfant+NouveauNumLigne;
  }
}
function EchangeDico(NomEnfant,NumTab,NumLigne,NouveauNumTab,NouveauNumLigne){
  if(document.getElementById('tab'+NumTab+NomEnfant+'Parent'+NumLigne).children.length>0){
    document.getElementById('tab'+NumTab+'Label'+NomEnfant+NumLigne).attributes.for.nodeValue = 'tab'+NouveauNumTab+NomEnfant+NouveauNumLigne; //Modification de l'attribut for
    document.getElementById('tab'+NumTab+'Label'+NomEnfant+NumLigne).id = 'tab'+NouveauNumTab+'Label'+NomEnfant+NouveauNumLigne; //Modification de l'id
    valeur = document.getElementById('tab'+NumTab+'LabelDependance'+NumLigne);
    if(valeur!='undefined'&&valeur!=null){
      document.getElementById('tab'+NumTab+'LabelDependance'+NumLigne).attributes.for.nodeValue = 'tab'+NouveauNumTab+'SelectDependance'+NouveauNumLigne;
      document.getElementById('tab'+NumTab+'LabelDependance'+NumLigne).id = 'tab'+NouveauNumTab+'LabelDependance'+NouveauNumLigne;
    }
    valeur = document.getElementById('tab'+NumTab+'SelectDependance'+NumLigne);
    if(valeur!='undefined'&&valeur!=null){
      document.getElementById('tab'+NumTab+'SelectDependance'+NumLigne).name = 'tab'+NouveauNumTab+'SelectDependance'+NouveauNumLigne;
      document.getElementById('tab'+NumTab+'SelectDependance'+NumLigne).id = 'tab'+NouveauNumTab+'SelectDependance'+NouveauNumLigne;
    }
    valeur = document.getElementById('tab'+NumTab+'LabelMajuscule'+NumLigne);
    if(valeur!='undefined'&&valeur!=null){
      document.getElementById('tab'+NumTab+'LabelMajuscule'+NumLigne).attributes.for.nodeValue = 'tab'+NouveauNumTab+'SelectMajuscule'+NouveauNumLigne;
      document.getElementById('tab'+NumTab+'LabelMajuscule'+NumLigne).id = 'tab'+NouveauNumTab+'LabelMajuscule'+NouveauNumLigne;
    }
    valeur = document.getElementById('tab'+NumTab+'SelectMajuscule'+NumLigne);
    if(valeur!='undefined'&&valeur!=null){
      document.getElementById('tab'+NumTab+'SelectMajuscule'+NumLigne).name = 'tab'+NouveauNumTab+'SelectMajuscule'+NouveauNumLigne;
      document.getElementById('tab'+NumTab+'SelectMajuscule'+NumLigne).id = 'tab'+NouveauNumTab+'SelectMajuscule'+NouveauNumLigne;
    }
    valeur = document.getElementById('tab'+NumTab+'Dictionnaire'+NumLigne);
    if(valeur!='undefined'&&valeur!=null){
      document.getElementById('tab'+NumTab+'Dictionnaire'+NumLigne).name = 'tab'+NouveauNumTab+'Dictionnaire'+NouveauNumLigne;
      document.getElementById('tab'+NumTab+'Dictionnaire'+NumLigne).attributes.onchange.nodeValue = "champMultiple("+NouveauNumTab+","+NouveauNumLigne+");champMajuscule("+NouveauNumTab+","+NouveauNumLigne+");";
      document.getElementById('tab'+NumTab+'Dictionnaire'+NumLigne).id = 'tab'+NouveauNumTab+'Dictionnaire'+NouveauNumLigne;
    }
  }
}
function EchangeReference(NomEnfant,NumTab,NumLigne,NouveauNumTab,NouveauNumLigne){
  if(document.getElementById('tab'+NumTab+'ReferenceParent'+NumLigne).children.length>0){
    document.getElementById('tab'+NumTab+'Label'+NomEnfant+NumLigne).id = 'tab'+NouveauNumTab+'Label'+NomEnfant+NouveauNumLigne;
    document.getElementById('tab'+NumTab+NomEnfant+NumLigne).name = 'tab'+NouveauNumTab+NomEnfant+NouveauNumLigne;
    document.getElementById('tab'+NumTab+NomEnfant+NumLigne).attributes.onchange.nodeValue = "Validation"+NomEnfant+"("+NouveauNumTab+","+NouveauNumLigne+");";
    document.getElementById('tab'+NumTab+NomEnfant+NumLigne).id = 'tab'+NouveauNumTab+NomEnfant+NouveauNumLigne;
  }
}
function EchangeLigne(NumTab,NumLigne,NouveauNumTab,NouveauNumLigne){ //Fonction permettant de modifier la position d'une ligne (son tableau et sa ligne)
  if(document.getElementById('tab'+NumTab+'Ligne'+NumLigne))
  {
    //LABEL
    document.getElementById('tab'+NumTab+'Label'+NumLigne).name = 'tab'+NouveauNumTab+'Label'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'Label'+NumLigne).attributes.onchange.nodeValue = "nomLigne("+NouveauNumTab+","+NouveauNumLigne+",'Label');";
    document.getElementById('tab'+NumTab+'Label'+NumLigne).id = 'tab'+NouveauNumTab+'Label'+NouveauNumLigne;

    //TYPE DE DONNES
    document.getElementById('tab'+NumTab+'TypeDeDonnees'+NumLigne).name = 'tab'+NouveauNumTab+'TypeDeDonnees'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'TypeDeDonnees'+NumLigne).attributes.onchange.nodeValue = "GestionOptionTDD("+NouveauNumTab+","+NouveauNumLigne+");";
    document.getElementById('tab'+NumTab+'TypeDeDonnees'+NumLigne).id = 'tab'+NouveauNumTab+'TypeDeDonnees'+NouveauNumLigne; 

    //MODE DE GENERATION
    document.getElementById('tab'+NumTab+'ModeDeGeneration'+NumLigne).name = 'tab'+NouveauNumTab+'ModeDeGeneration'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'ModeDeGeneration'+NumLigne).attributes.onchange.nodeValue = "GestionOptionMDG("+NouveauNumTab+","+NouveauNumLigne+");";
    document.getElementById('tab'+NumTab+'ModeDeGeneration'+NumLigne).id = 'tab'+NouveauNumTab+'ModeDeGeneration'+NouveauNumLigne;

    //BOUTON DE SUPPRESSION
    document.getElementById('tab'+NumTab+'BoutonSuppression'+NumLigne).attributes.onclick.nodeValue = 'DelRow('+NouveauNumTab+','+NouveauNumLigne+');';
    document.getElementById('tab'+NumTab+'BoutonSuppression'+NumLigne).id = 'tab'+NouveauNumTab+'BoutonSuppression'+NouveauNumLigne;

    //LES DIFFERENTES FEUILLES

    //PREFIXE
    EchangeFeuille('Prefixe',NumTab,NumLigne,NouveauNumTab,NouveauNumLigne);
    //SUFFIXE
    EchangeFeuille('Suffixe',NumTab,NumLigne,NouveauNumTab,NouveauNumLigne);
    //NBCHIFFRES
    EchangeFeuille('NbChiffres',NumTab,NumLigne,NouveauNumTab,NouveauNumLigne);
    //MINIMUM
    EchangeFeuille('Min',NumTab,NumLigne,NouveauNumTab,NouveauNumLigne);
    //MAXIMUM
    EchangeFeuille('Max',NumTab,NumLigne,NouveauNumTab,NouveauNumLigne);
    //UNITE
    EchangeFeuille('Unite',NumTab,NumLigne,NouveauNumTab,NouveauNumLigne);
    //LES NULL
    EchangeFeuille('LesNull',NumTab,NumLigne,NouveauNumTab,NouveauNumLigne);
    //DICTIONNAIRE
    EchangeDico('Dico',NumTab,NumLigne,NouveauNumTab,NouveauNumLigne);
    //DATE HEURE MIN
    EchangeFeuille('DateHeureMin',NumTab,NumLigne,NouveauNumTab,NouveauNumLigne);
    //DATE HEURE MAX
    EchangeFeuille('DateHeureMax',NumTab,NumLigne,NouveauNumTab,NouveauNumLigne);
    //MASQUE
    EchangeFeuille('Masque',NumTab,NumLigne,NouveauNumTab,NouveauNumLigne);
    //TABLE REFERENCE
    EchangeReference('TableReference',NumTab,NumLigne,NouveauNumTab,NouveauNumLigne);
    //COLONNE REFERENCE
    EchangeReference('ColonneReference',NumTab,NumLigne,NouveauNumTab,NouveauNumLigne);
    //FORMULE
    EchangeFeuille('Formule',NumTab,NumLigne,NouveauNumTab,NouveauNumLigne);

    //LES DIFFERENTS TYPES
    document.getElementById('tab'+NumTab+'MinParent'+NumLigne).id = 'tab'+NouveauNumTab+'MinParent'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'MaxParent'+NumLigne).id = 'tab'+NouveauNumTab+'MaxParent'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'PasSeqParent'+NumLigne).id = 'tab'+NouveauNumTab+'PasSeqParent'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'DicoParent'+NumLigne).id = 'tab'+NouveauNumTab+'DicoParent'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'FormuleParent'+NumLigne).id = 'tab'+NouveauNumTab+'FormuleParent'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'CodageParent'+NumLigne).id = 'tab'+NouveauNumTab+'CodageParent'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'ReferenceParent'+NumLigne).id = 'tab'+NouveauNumTab+'ReferenceParent'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'PrefixeParent'+NumLigne).id = 'tab'+NouveauNumTab+'PrefixeParent'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'SuffixeParent'+NumLigne).id = 'tab'+NouveauNumTab+'SuffixeParent'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'UniteParent'+NumLigne).id = 'tab'+NouveauNumTab+'UniteParent'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'DateHeureMinParent'+NumLigne).id = 'tab'+NouveauNumTab+'DateHeureMinParent'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'DateHeureMaxParent'+NumLigne).id = 'tab'+NouveauNumTab+'DateHeureMaxParent'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'MasqueParent'+NumLigne).id = 'tab'+NouveauNumTab+'MasqueParent'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'NbChiffresParent'+NumLigne).id = 'tab'+NouveauNumTab+'NbChiffresParent'+NouveauNumLigne;
    document.getElementById('tab'+NumTab+'LesNullParent'+NumLigne).id = 'tab'+NouveauNumTab+'LesNullParent'+NouveauNumLigne;

    //ID LIGNE
    document.getElementById('tab'+NumTab+'Ligne'+NumLigne).id = 'tab'+NouveauNumTab+'Ligne'+NouveauNumLigne;
  }
}
function OrdonnerLesLignes(NumTab){ //Fonction permettant de trier les lignes desordonnées dans le cas d'une suppression de ligne
  nombreLigne = document.getElementById("tab"+NumTab+"Lignes").childElementCount-2; //On commence à 0
  parent = document.getElementById("tab"+NumTab+"Lignes");
  for(i=0;i<=nombreLigne;i++) //Pour chaque ligne du tableau NumTab
  {
    enfant = document.getElementById("tab"+NumTab+"Ligne"+i); //On récupere l'élément ligne
    if(Array.prototype.indexOf.call(parent.children[i+1], enfant) == -1) //On verifie si la ligne est bien placée sinon
    {
      idAModifie = parent.children[i+1].id; //On recupere son id
      var NumTabNumLigne = idAModifie.split(/(\d)/); //On recupere son numero de tableau et son numero de ligne
      EchangeLigne(NumTabNumLigne[1],NumTabNumLigne[3],NumTab,i); //On echange avec la ligne qu'elle devrait être
    }
  }
}