

function ChampSimple(){ //EXEMPLE D'UNE TABLE SIMPLE

    var table = 0; //Table Initiale
    var ligne = 0; //Ligne Initiale

    RAZExemples();

    //TABLE SIMPLE 1/1

    document.getElementById("NomFeuilleDeDonnees").value ="Exemple Simple";
    document.getElementById("NomTable"+table).value ="Simple";
    document.getElementById("NombreDeLigne"+table).value ="1000";
    document.getElementById("GRAINE"+table).value ="0413221995";

    document.getElementById("CSV"+table).checked="true";
    document.getElementById("SQL"+table).checked="true";
    document.getElementById("XML"+table).checked="true";
    document.getElementById("JSON"+table).checked="true";
    deRequire('formatSortie'+table);

    //LIGNE 0

    document.getElementById("tab"+table+"label"+ligne).value = "IDPersonne";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "IDS";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Prefixe"+ligne).value = "PERS-";
    document.getElementById("tab"+table+"Suffixe"+ligne).value = "100";
    document.getElementById("tab"+table+"NbChiffres"+ligne).value = "10";
    document.getElementById("tab"+table+"ModeDeGeneration"+ligne).setAttribute("disabled","disabled");

    //LIGNE 1

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="Prenom";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Dictionnaire";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Dictionnaire"+ligne).value = "Prenoms";
    champMajuscule(table,ligne);
    document.getElementById("tab"+table+"SelectMajuscule"+ligne).value = "non";

    //LIGNE 2

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="Noms";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Dictionnaire";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Dictionnaire"+ligne).value = "noms";
    champMajuscule(table,ligne);
    document.getElementById("tab"+table+"SelectMajuscule"+ligne).value = "oui";

    //LIGNE 3

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="Age";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Numerique";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Min"+ligne).value = "18";
    document.getElementById("tab"+table+"Max"+ligne).value = "80";
    document.getElementById("tab"+table+"LesNull"+ligne).value = "1%";
    document.getElementById("tab"+table+"Unite"+ligne).value = "ans";
}
function ChampMultiTables(){ //EXEMPLE DE MULTIPLES TABLES

    var table = 0; //Table Initiale
    var ligne = 0; //Ligne Initiale table 1

    RAZExemples();

    //TABLE ARTICLES 1/3

    document.getElementById("NomFeuilleDeDonnees").value ="Exemple Tables Multiples";
    document.getElementById("NomTable"+table).value ="Articles";
    document.getElementById("NombreDeLigne"+table).value ="10";
    document.getElementById("GRAINE"+table).value ="11276666";

    document.getElementById("SQL"+table).checked="true";
    deRequire('formatSortie'+table);

    //LIGNE 0

    document.getElementById("tab"+table+"label"+ligne).value ="idArticle";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "id";
    GestionOptionTDD(table,ligne);

    document.getElementById("tab"+table+"ModeDeGeneration"+ligne).setAttribute("disabled","disabled");

    //LIGNE 1

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="refArticle";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "CodeArticle";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Masque"+ligne).value = "XXXyy-991";

    //TABLE VENDEURS 2/3

    addTable();
    table++;
    ligne = 0; //Ligne Initiale table 2

    document.getElementById("NomTable"+table).value ="Vendeurs";
    document.getElementById("NombreDeLigne"+table).value ="3";
    document.getElementById("GRAINE"+table).value ="10276663";

    document.getElementById("SQL"+table).checked="true";
    deRequire('formatSortie'+table);

    //LIGNE 0

    document.getElementById("tab"+table+"label"+ligne).value ="idVendeur";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "id";
    GestionOptionTDD(table,ligne);

    //LIGNE 1

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="prenomVendeur";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Dictionnaire";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Dictionnaire"+ligne).value = "Prenoms";
    champMajuscule(table,ligne);
    document.getElementById("tab"+table+"SelectMajuscule"+ligne).value = "non";

    //LIGNE 2

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="refVendeur";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Numerique";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Min"+ligne).value = "1";
    document.getElementById("tab"+table+"Max"+ligne).value = "10000";

    //TABLE VENTES 3/3

    addTable();
    table++;
    ligne = 0; //Ligne Initiale table 3

    document.getElementById("NomTable"+table).value ="Ventes";
    document.getElementById("NombreDeLigne"+table).value ="15";
    document.getElementById("GRAINE"+table).value ="102766666";

    document.getElementById("SQL"+table).checked="true";
    deRequire('formatSortie'+table);

    //LIGNE 0

    document.getElementById("tab"+table+"label"+ligne).value ="idVentes";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "id";
    GestionOptionTDD(table,ligne);

    //LIGNE 1

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="codeArticle";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Reference";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"TableReference"+ligne).value = "Articles";
    document.getElementById("tab"+table+"ColonneReference"+ligne).value = "refArticle";

    //LIGNE 2

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="mois";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Numerique";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Min"+ligne).value = "1";
    document.getElementById("tab"+table+"Max"+ligne).value = "12";

    //LIGNE 3

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="annee";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Numerique";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Min"+ligne).value = "2010";
    document.getElementById("tab"+table+"Max"+ligne).value = "2018";

    //LIGNE 4

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="codeVendeur";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Reference";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"TableReference"+ligne).value = "Vendeurs";
    document.getElementById("tab"+table+"ColonneReference"+ligne).value = "idVendeur";

}
function ChampFormule(){ //EXEMPLE DE FORMULE

    var table = 0; //Table Initiale
    var ligne = 0; //Ligne Initiale

    RAZExemples();

    //TABLE Exemple Formule 1/1

    document.getElementById("NomFeuilleDeDonnees").value ="Exemple Formule";
    document.getElementById("NomTable"+table).value ="Temperatures";
    document.getElementById("NombreDeLigne"+table).value ="1000";
    document.getElementById("GRAINE"+table).value ="0413221995";

    document.getElementById("CSV"+table).checked="true";
    deRequire('formatSortie'+table);

    //LIGNE 0

    document.getElementById("tab"+table+"label"+ligne).value ="idTemp";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "id";
    GestionOptionTDD(table,ligne);    

    //LIGNE 1

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="Celsius";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Numerique";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Min"+ligne).value = "0";
    document.getElementById("tab"+table+"Max"+ligne).value = "100";

    //LIGNE 2

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="Temperatures en Fahrenheit";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Formule";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Formule"+ligne).value = "Celsius * 1.8 + 32";
}
function Codage() { //EXEMPLE DE CODAGE

    var table = 0; //Table Initiale
    var ligne = 0; //Ligne Initiale

    RAZExemples();

    //TABLE Exemple codage 1/1

    document.getElementById("NomFeuilleDeDonnees").value ="Exemple Codage";
    document.getElementById("NomTable"+table).value ="Personne";
    document.getElementById("NombreDeLigne"+table).value ="1000";
    document.getElementById("GRAINE"+table).value ="0413221995";

    document.getElementById("CSV"+table).checked="true";
    deRequire('formatSortie'+table);

    //LIGNE 0

    document.getElementById("tab"+table+"label"+ligne).value ="Prenom";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Dictionnaire";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Dictionnaire"+ligne).value = "Prenoms";
    champMajuscule(table,ligne);
    document.getElementById("tab"+table+"SelectMajuscule"+ligne).value = "non";

    //LIGNE 1 

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="Noms";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Dictionnaire";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Dictionnaire"+ligne).value = "noms";
    champMajuscule(table,ligne);
    document.getElementById("tab"+table+"SelectMajuscule"+ligne).value = "oui";

    //LIGNE 2

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="Main";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Numerique";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"ModeDeGeneration"+ligne).value = "Codage";
    GestionOptionMDG(table,ligne);
    document.getElementById("tab"+table+"Min"+ligne).value = "1";
    document.getElementById("tab"+table+"Max"+ligne).value = "2";
    document.getElementById("tab"+table+"CodageForm"+ligne).value = "1;Droitier;2;Gaucher";
}
function DonneeCoherente() { //EXEMPLE DE DONNEE COHERENTE

    var table = 0; //Table Initiale
    var ligne = 0; //Ligne Initiale

    RAZExemples();

    //TABLE Exemple coherence 1/1

    document.getElementById("NomFeuilleDeDonnees").value ="Exemple Coherence";
    document.getElementById("NomTable"+table).value ="Coherence";
    document.getElementById("NombreDeLigne"+table).value ="1000";
    document.getElementById("GRAINE"+table).value ="0413221995";

    document.getElementById("CSV"+table).checked="true";
    deRequire('formatSortie'+table);

    //LIGNE 0

    document.getElementById("tab"+table+"label"+ligne).value ="Prenom";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Dictionnaire";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Dictionnaire"+ligne).value = "Prenoms";
    champMultiple(table,ligne);
    document.getElementById("tab"+table+"SelectDependance"+ligne).value = "True";
    champMajuscule(table,ligne);
    document.getElementById("tab"+table+"SelectMajuscule"+ligne).value = "non";

    //LIGNE 1

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="Noms";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Dictionnaire";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Dictionnaire"+ligne).value = "noms";
    champMajuscule(table,ligne);
    document.getElementById("tab"+table+"SelectMajuscule"+ligne).value = "oui";

    //LIGNE 2

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="Ville actuelle";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Dictionnaire";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Dictionnaire"+ligne).value = "villes";
    champMultiple(table,ligne);
    document.getElementById("tab"+table+"SelectDependance"+ligne).value = "True";
    champMajuscule(table,ligne);
    document.getElementById("tab"+table+"SelectMajuscule"+ligne).value = "oui";

}

function DateHeure(){

    var table = 0; //Table Initiale
    var ligne = 0; //Ligne Initiale

    RAZExemples();

    //TABLE Exemple Train 1/1

    document.getElementById("NomFeuilleDeDonnees").value ="Exemple Trains";
    document.getElementById("NomTable"+table).value ="Horaires";
    document.getElementById("NombreDeLigne"+table).value ="10";
    document.getElementById("GRAINE"+table).value ="666";

    document.getElementById("SQL"+table).checked="true";
    document.getElementById("XML"+table).checked="true";
    document.getElementById("CSV"+table).checked="true";
    document.getElementById("JSON"+table).checked="true";
    deRequire('formatSortie'+table);

    //LIGNE 0
    /* BUG SQL CLEE PRIMAIRE
    document.getElementById("tab0label0").value = "IDPersonne";
    document.getElementById("tab0label0").onchange();
    document.getElementById("tab0TypeDeDonnees0").value = "IDS";
    GestionOptionTDD(0,0);
    document.getElementById("tab0Prefixe0").value = "PERS-";
    document.getElementById("tab0Prefixe0").onchange();
    document.getElementById("tab0Suffixe0").value = "100";
    document.getElementById("tab0Suffixe0").onchange();
    document.getElementById("tab0NbChiffres0").value = "10";
    document.getElementById("tab0NbChiffres0").onchange();
    document.getElementById("tab0ModeDeGeneration0").setAttribute("disabled","disabled");
    */

    document.getElementById("tab"+table+"label"+ligne).value = "NomTrain";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "IDS";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Prefixe"+ligne).value = "SNCF-";
    document.getElementById("tab"+table+"Suffixe"+ligne).value = "100";
    document.getElementById("tab"+table+"NbChiffres"+ligne).value = "10";
    document.getElementById("tab"+table+"ModeDeGeneration"+ligne).setAttribute("disabled","disabled");

    //LIGNE 1

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="VilleDepart";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Dictionnaire";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Dictionnaire"+ligne).value = "capitales_europeennes";
    champMajuscule(table,ligne);
    document.getElementById("tab"+table+"SelectMajuscule"+ligne).value = "non";

    //LIGNE 2

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="horaireDepart";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "DateHeure";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"DateHeureMin"+ligne).value = "2019-11-06T10:00:00";
    document.getElementById("tab"+table+"DateHeureMax"+ligne).value = "2019-11-06T14:00:00";

    //LIGNE 3

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="VilleArrivee";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "Dictionnaire";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"Dictionnaire"+ligne).value = "capitales_europeennes";
    champMajuscule(table,ligne);
    document.getElementById("tab"+table+"SelectMajuscule"+ligne).value = "oui";

    //LIGNE 4

    addRow(table);
    ligne++;
    document.getElementById("tab"+table+"label"+ligne).value ="horaireArrivee";
    document.getElementById("tab"+table+"TypeDeDonnees"+ligne).value = "DateHeure";
    GestionOptionTDD(table,ligne);
    document.getElementById("tab"+table+"DateHeureMin"+ligne).value = "2019-11-06T16:00:00";
    document.getElementById("tab"+table+"DateHeureMax"+ligne).value = "2019-11-06T18:00:00";

}