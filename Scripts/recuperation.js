function GestionImportFichier() {

    document.getElementById('btnOpen').onclick = function() {
        if ('FileReader' in window) {
            document.getElementById('AcceptInput').click();
        } else {
            alert('Your browser does not support the HTML5 FileReader.');
        }
    };

    document.getElementById('AcceptInput').onchange = function(event) {
        var fileToLoad = event.target.files[0];
        var reader = new FileReader();
        var parser = new DOMParser();

        if (getExtension(fileToLoad.name) == "txt" || getExtension(fileToLoad.name) == "sql") {

            reader.onload = function (fileLoadedEvent) {

                var textFromFileLoaded = fileLoadedEvent.target.result;


                jQuery.ajax({
                    type: "POST",
                    url: '../Generateur/SQLversXML.php',
                    data: {sqlTexte: textFromFileLoaded},

                    success: function (data) {


                        data = data.substring(data.indexOf("\n", 5));
                        var envoi = data.substring(0,data.indexOf("\n", 5))+data.substring(data.indexOf("\n", 5)+1);




                        envoi=envoi.trim();
                        xmlDoc = parser.parseFromString(envoi, "text/xml");


                        interpreter(xmlDoc);


                    },
                    error: function (msg) {

                        alert("Error !: " + msg);
                    }
                });



            };

        } else if(getExtension(fileToLoad.name) == "xml"){

            reader.onload = function (fileLoadedEvent) {
                var textFromFileLoaded = fileLoadedEvent.target.result;
                // parser = new DOMParser();

                xmlDoc = parser.parseFromString(textFromFileLoaded, "text/xml");

                interpreter(xmlDoc);
            };

        }

        reader.readAsText(fileToLoad, 'UTF-8');
        //  }
    };
}


function interpreter(xmlDoc){
    var i, j, k, l ;
    tables = xmlDoc.getElementsByTagName("Table");
    document.getElementById("NomFeuilleDeDonnees").value = "NomProjet";

    for(i = 0; i < tables.length ; i++){
        if(document.getElementById("table"+i) == null){
            addTable();
        }
        for(l = 0; l < tables[i].children.length; l++){
            if(tables[i].children[l].tagName == "Champs"){
                tabDonnees = tables[i].children[l].children ;
                for(j=0; j < tabDonnees.length; j++) {
                    if (document.getElementById("tab" + i + "Ligne" + j) == null) {
                        addRow(i);
                    }

                    document.getElementById("tab" + i + "Label" + j).value = tabDonnees[j].getAttribute("NomColonne");
                    document.getElementById("tab" + i + "TypeDeDonnees" + j).value = tabDonnees[j].getAttribute("Type");
                    GestionOptionTDD(i, j);
                    
                    switch(tabDonnees[j].getAttribute("Type")){
                        case "Dictionnaire":
                            document.getElementById("tab"+i+"Dictionnaire"+j).value = tabDonnees[j].getAttribute("NomDictionnaire");
                            champMultiple(i,j);
                            champMajuscule(i,j);
                            if(tabDonnees[j].getAttribute("GenererDependance") == "True"){
                                document.getElementById("tab"+i+"SelectDependance"+j).value = "oui" ;
                            }

                            if(tabDonnees[j].getAttribute("EnMajuscules") == "True"){
                                document.getElementById("tab"+i+"SelectMajuscule"+j).value = "oui" ;
                            }
                            break;
                        case "Numerique":
                            document.getElementById("tab"+i+"Min"+j).value = tabDonnees[j].getAttribute("Min");
                            document.getElementById("tab"+i+"Max"+j).value = tabDonnees[j].getAttribute("Max");
                            document.getElementById("tab"+i+"Unite"+j).value = tabDonnees[j].getAttribute("Unite");
                            break;
                        case "Reference":
                            document.getElementById("tab"+i+"TableReference"+j).value = tabDonnees[j].getAttribute("TableReference");
                            document.getElementById("tab"+i+"ColonneReference"+j).value = tabDonnees[j].getAttribute("ColonneReference");
                            break;
                        case "Formule":
                            document.getElementById("tab"+i+"Formule"+j).value = tabDonnees[j].getAttribute("Formule");
                            break;
                        case "IDS":
                            document.getElementById("tab"+i+"Prefixe"+j).value = tabDonnees[j].getAttribute("Prefixe");
                            document.getElementById("tab"+i+"Suffixe"+j).value = tabDonnees[j].getAttribute("Suffixe");
                            document.getElementById("tab"+i+"NbChiffres"+j).value = tabDonnees[j].getAttribute("NbChiffres");
                            break;
                        case "DateHeure":
                            document.getElementById("tab"+i+"DateHeureMax"+j).value = tabDonnees[j].getAttribute("DateHeureMax");
                            document.getElementById("tab"+i+"DateHeureMin"+j).value = tabDonnees[j].getAttribute("DateHeureMin");
                            break;
                        case "CodeArticle":
                            document.getElementById("tab"+i+"Masque"+j).value = tabDonnees[j].getAttribute("Masque");
                            break;
                        }

                    if(tabDonnees[j].getAttribute("Null") != null){
                        document.getElementById("tab"+i+"LesNull"+j).value = tabDonnees[j].getAttribute("Null");
                    }

                }

            }

            if(tables[i].children[l].tagName == "Parametres"){
                tabChildParametres = tables[i].children[l].children ;
                for(k=0; k < tabChildParametres.length; k++){
                    switch(tabChildParametres[k].tagName){
                        case "NomTable":
                            document.getElementById("NomTable"+i).value = tabChildParametres[k].getAttribute("nom");
                            break;
                        case "NbLigne":
                            document.getElementById("NombreDeLigne"+i).value = tabChildParametres[k].getAttribute("valeur");
                            break;
                        case "Sortie":
                            if(tabChildParametres[k].getAttribute("XML") == "oui"){
                                document.getElementById("XML"+i).checked="true";
                            }
                            if(tabChildParametres[k].getAttribute("CSV") == "oui"){
                                document.getElementById("CSV"+i).checked="true";
                            }
                            if(tabChildParametres[k].getAttribute("SQL") == "oui"){
                                document.getElementById("SQL"+i).checked="true";
                            }
                            if(tabChildParametres[k].getAttribute("JSON") == "oui"){
                                document.getElementById("JSON"+i).checked="true";
                            }
                            if(tabChildParametres[k].attributes.length>0){ //Forcer les Sorties à non required
                                deRequire('formatSortie'+i);
                            }
                            break;
                        case "Graine":
                            document.getElementById("GRAINE"+i).value = tabChildParametres[k].getAttribute("valeur");
                            break;
                    }

                }
            }

        }

    }

}

function getExtension(filename)
{
    var parts = filename.split(".");
    return (parts[(parts.length-1)]);
}