var lockgenerer = 0;
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

function UnLockGenerer(){
    if(lockgenerer>0){
        lockgenerer--;
    }
    if(lockgenerer >= 0){
        document.getElementById("BoutonEnvois").removeAttribute("disabled");
    }
}
function LockGenerer(){
    if(lockgenerer>=0){
        lockgenerer++;
    }
    if(!(document.getElementById("BoutonEnvois").hasAttribute("disabled"))){
        document.getElementById("BoutonEnvois").setAttribute("disabled","disabled");
    }
}
function ValidationInputProjet(id){
    var inputVal = document.getElementById(id).value;
    var reg = new RegExp("^[a-zA-Z0-9]+([\\sA-Za-z0-9]+)*$");
    if(lang == "FR")
    {
        if(!(reg.test(inputVal))) {
            LockGenerer();
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","N'utilisez que des caractères alphanumériques (a-z) ou (0-9) sans commencer par un espace");
        }else{
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).removeAttribute("title");
            document.getElementById(id).setAttribute("class","form-control");
            UnLockGenerer();
            document.getElementById("BoutonEnvois").removeAttribute("title");
        }
    }
    else if(lang == "EN")
    {
        if(!(reg.test(inputVal))) {
            LockGenerer();
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","Use only alphanumeric characters (a-z) or (0-9) without beginning with a space.");
        }else{
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).removeAttribute("title");
            document.getElementById(id).setAttribute("class","form-control");
            UnLockGenerer();
            document.getElementById("BoutonEnvois").removeAttribute("title");
        }
    }
}
function ValidationInputParametreTable(NumTab, NomId) {
    var id = NomId + NumTab;
    var inputVal = document.getElementById(id).value;
    if(!(inputVal == null)){
        if (NomId == "GRAINE" || NomId == "NombreDeLigne") {
            var reg = new RegExp("^[0-9]+([0-9]*)+([\\s0-9]+)*$");//récupère les entier entre 0 et 2147483647 (taille max pour un entier)
            if(lang == "FR")
            {
                if (((!(reg.test(inputVal))) || ((parseInt(inputVal) < 0) || (parseInt(inputVal) > 2147483647))) && (NomId == "GRAINE")) {
                    document.getElementById(id).removeAttribute("class");
                    document.getElementById(id).setAttribute("class", "form-control inputInvalid input-change");
                    document.getElementById(id).setAttribute("title", "La graine de génération doit être un entier compris entre 0 et 2147483647 sans  commencer par un espace");
                    LockGenerer();
                } else if (!(reg.test(inputVal))) {
                    document.getElementById(id).removeAttribute("class");
                    document.getElementById(id).setAttribute("class", "form-control inputInvalid input-change");
                    document.getElementById(id).setAttribute("title", "Veuillez entrer un entier sans espace");
                    LockGenerer();
                } else {
                    document.getElementById(id).removeAttribute("class");
                    document.getElementById(id).removeAttribute("title");
                    document.getElementById(id).setAttribute("class", "form-control input-change");
                    UnLockGenerer();
                    document.getElementById("BoutonEnvois").removeAttribute("title");
                }
            }
            else if(lang == "EN")
            {
                if (((!(reg.test(inputVal))) || ((parseInt(inputVal) < 0) || (parseInt(inputVal) > 2147483647))) && (NomId == "GRAINE")) {
                    document.getElementById(id).removeAttribute("class");
                    document.getElementById(id).setAttribute("class", "form-control inputInvalid input-change");
                    document.getElementById(id).setAttribute("title", "The generation seed must be an integer between 0 and 2147483647 without beginning with a space.");
                    LockGenerer();
                } else if (!(reg.test(inputVal))) {
                    document.getElementById(id).removeAttribute("class");
                    document.getElementById(id).setAttribute("class", "form-control inputInvalid input-change");
                    document.getElementById(id).setAttribute("title", "Please enter an integer without spaces");
                    LockGenerer();
                } else {
                    document.getElementById(id).removeAttribute("class");
                    document.getElementById(id).removeAttribute("title");
                    document.getElementById(id).setAttribute("class", "form-control input-change");
                    UnLockGenerer();
                    document.getElementById("BoutonEnvois").removeAttribute("title");
                }
            }
        } else {
            var inputVal = document.getElementById(id).value;
            var reg = new RegExp("^[a-zA-Z0-9]+([\\sA-Za-z0-9]+)*$");
            if(lang == "FR")
            {
                if (!(reg.test(inputVal))) {
                    document.getElementById(id).removeAttribute("class");
                    document.getElementById(id).setAttribute("class", "form-control inputInvalid input-change");
                    document.getElementById(id).setAttribute("title", "N'utilisez que des caractères alphanumériques (a-z) ou (0-9) sans  commencer par un espace");
                    LockGenerer();
                } else {
                    document.getElementById(id).removeAttribute("class");
                    document.getElementById(id).removeAttribute("title");
                    document.getElementById(id).setAttribute("class", "form-control input-change");
                    document.getElementById("BoutonEnvois").removeAttribute("title");
                    UnLockGenerer();
                }
            }
            else if(lang == "EN")
            {
                if (!(reg.test(inputVal))) {
                    document.getElementById(id).removeAttribute("class");
                    document.getElementById(id).setAttribute("class", "form-control inputInvalid input-change");
                    document.getElementById(id).setAttribute("title", "Use only alphanumeric characters (a-z) or (0-9) without beginning with a space.");
                    LockGenerer();
                } else {
                    document.getElementById(id).removeAttribute("class");
                    document.getElementById(id).removeAttribute("title");
                    document.getElementById(id).setAttribute("class", "form-control input-change");
                    document.getElementById("BoutonEnvois").removeAttribute("title");
                    UnLockGenerer();
                }
            }
        }
    }
}
function nomLigne(NumTab,NumLigne,nomid){
    var id = "tab"+NumTab+nomid+NumLigne;
    var inputVal = document.getElementById(id).value;
    if(nomid=="Prefixe") //Tolérance aux caractères spéciaux pour le prefixe d'IDS
        var reg = new RegExp("^[a-zA-Z0-9]+([\\sA-Za-z0-9]+)*.$");
    else
        var reg = new RegExp("^[a-zA-Z0-9]+([\\sA-Za-z0-9]+)*$");

    if(lang == "FR")
    {
        if(!(reg.test(inputVal))) {
            document.getElementById(id).removeAttribute("class");
            if(nomid=="Label"){ //Resolution de bug sur le premier champ
                document.getElementById(id).setAttribute("class","form-control inputInvalid col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement");
            }else{
                document.getElementById(id).setAttribute("class","form-control inputInvalid");
            }
            document.getElementById(id).setAttribute("title","N'utilisez que des caractères alphanumériques (a-z) ou (0-9) sans commencer par un espace");
            LockGenerer();
        }else{
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).removeAttribute("title");
            if(nomid=="Label"){ //Resolution de bug sur le premier champ
                document.getElementById(id).setAttribute("class","form-control col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement");
            }else{
                document.getElementById(id).setAttribute("class","form-control");
            }
            document.getElementById("BoutonEnvois").removeAttribute("title");
            UnLockGenerer();
        }
    }
    else if(lang == "EN")
    {
        if(!(reg.test(inputVal))) {
            document.getElementById(id).removeAttribute("class");
            if(nomid=="Label"){ //Resolution de bug sur le premier champ
                document.getElementById(id).setAttribute("class","form-control inputInvalid col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement");
            }else{
                document.getElementById(id).setAttribute("class","form-control inputInvalid");
            }
            document.getElementById(id).setAttribute("title","Use only alphanumeric characters (a-z) or (0-9) without beginning with a space.");
            LockGenerer();
        }else{
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).removeAttribute("title");
            if(nomid=="Label"){ //Resolution de bug sur le premier champ
                document.getElementById(id).setAttribute("class","form-control col-xs-2 col-sn-2 col-md-2 col-lg-2 espacement");
            }else{
                document.getElementById(id).setAttribute("class","form-control");
            }
            document.getElementById("BoutonEnvois").removeAttribute("title");
            UnLockGenerer();
        }
    }
}
function numLigne(NumTab,NumLigne,nomid){
    var id = "tab"+NumTab+nomid+NumLigne;
    var inputVal = document.getElementById(id).value;
    if(nomid=="Suffixe" || nomid=="NbChiffres")
        var reg = /^[0-9]*$/;
    else
        var reg = /^[0-9]+([,.][0-9]+)*$/;
    if(lang == "FR")
    {
        if(!(reg.test(inputVal))) {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            if(nomid=="Suffixe" || nomid=="NbChiffres")
                texte = "N'utilisez que des caractères numériques (0-9) sans espace ";
            else
                texte = "N'utilisez que des caractères numériques (0-9) ou \".\"/\",\"  sans espace ";
            document.getElementById(id).setAttribute("title",texte);
            LockGenerer();
        }else{
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).removeAttribute("title");
            document.getElementById(id).setAttribute("class","form-control");
            document.getElementById("BoutonEnvois").removeAttribute("title");
            UnLockGenerer();
        }
    }
    else if(lang == "EN")
    {
        if(!(reg.test(inputVal))) {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            if(nomid=="Suffixe" || nomid=="NbChiffres")
                texte = "Use only numeric characters (0-9) without spaces.";
            else
                texte = "Use only numeric characters (0-9) or \".\"/\",\" without spaces. ";
            document.getElementById(id).setAttribute("title",texte);
            LockGenerer();
        }else{
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).removeAttribute("title");
            document.getElementById(id).setAttribute("class","form-control");
            document.getElementById("BoutonEnvois").removeAttribute("title");
            UnLockGenerer();
        }
    }
}

function nullLigne(NumTab,NumLigne){
    var id = "tab"+NumTab+"LesNull"+NumLigne;
    var inputVal = document.getElementById(id).value;
    var re = /^((0|[1-9]\d?)(\.\d{1,2})?|100(\.00?)?)\%$/;
    var reg = /^[0-9]+([,.][0-9]+)*$/;
    if(lang == "FR")
    {
        if(inputVal !== '' && (!((re.test(inputVal))||(reg.test(inputVal)))||(parseInt(document.getElementById("NombreDeLigne"+NumTab).value)+1<=parseInt(inputVal)))) {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","N'utilisez que des caractères numériques (0-9) ou \".\"/\"%\" exemple 10 ou 100%.\nle nombre de valeur null (hors %) doit être inférieur au nombre de ligne.");
            LockGenerer();
        }else{
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).removeAttribute("title");
            document.getElementById(id).setAttribute("class","form-control");
            document.getElementById("BoutonEnvois").removeAttribute("title");
            UnLockGenerer();
        }
    }
    else if(lang == "EN")
    {
        if(inputVal !== '' && (!((re.test(inputVal))||(reg.test(inputVal)))||(parseInt(document.getElementById("NombreDeLigne"+NumTab).value)+1<=parseInt(inputVal)))) {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","Use only numeric characters (0-9) or \".\"/\"%\" example 10 or 100%.\nThe number of null values (excluding %) must be less than the number of lines.");
            LockGenerer();
        }else{
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).removeAttribute("title");
            document.getElementById(id).setAttribute("class","form-control");
            document.getElementById("BoutonEnvois").removeAttribute("title");
            UnLockGenerer();
        }
    }
}

function validationFormule(numTab,numLigne,nomId){ //Fonction de validation du type FORMULE
    var id = "tab"+numTab+nomId+numLigne;
    var inputVal = document.getElementById(id).value;
    var reg = /^[0-9]+([,.][0-9]+)*$/;
    // alert(LabelLigneExist(numTab, inputVal));
    if(lang == "FR")
    {
        if(!(LabelLigneExist(numTab, inputVal))){
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","Si vous entrez le nom d'une ligne respectez la casse");
            LockGenerer();
        }
        else if(!(FormuleConforme(inputVal)))
        {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","Vérifiez si vous n'avez pas oublié ou rajouté une parenthèse, un crochet ou une accolade");
            LockGenerer();
        }
        else if(!(operationsConforme(inputVal)))
        {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","Vérifiez si vous n'avez pas oublié de saisir un nom ou une constante après ou avant un opérateur ou si vous avez mis plusieurs espaces à la suite");
            LockGenerer();
        }
        else if(!(verificationOperation(inputVal)))
        {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","Vérifier si vous n'avez pas oublié de saisir un opérateur");
            LockGenerer();
        }
        else if(inputVal.length == 0)
        {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","La formule ne peut pas être vide");
            LockGenerer();
        }
        else
        {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).removeAttribute("title");
            document.getElementById(id).setAttribute("class","form-control");
            document.getElementById("BoutonEnvois").removeAttribute("title");
                UnLockGenerer();
        }
    }
    else if(lang == "EN")
    {
        if(!(LabelLigneExist(numTab, inputVal))){
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","If you enter the name of a line, it is case sensitive.");
            LockGenerer();
        }
        else if(!(FormuleConforme(inputVal)))
        {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","Check that you have not forgotten or added a parenthesis, a bracket or a brace.");
            LockGenerer();
        }
        else if(!(operationsConforme(inputVal)))
        {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","Check if you have not forgotten to enter a name or a constant after or before an operator or if you have put several spaces after it.");
            LockGenerer();
        }
        else if(!(verificationOperation(inputVal)))
        {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","Check if you have not forgotten to enter an operator");
            LockGenerer();
        }
        else if(inputVal.length == 0)
        {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","The formula can't be empty");
            LockGenerer();
        }
        else
        {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).removeAttribute("title");
            document.getElementById(id).setAttribute("class","form-control");
            document.getElementById("BoutonEnvois").removeAttribute("title");
                UnLockGenerer();
        }
    }
}

function FormuleConforme(inputVal)
{
    var pile = [];
    var tableauSeparateur = ["(","[","{",")","]","}"];

    for(var i = 0; i < inputVal.length; i++)
    {
        var valeurTmp;

        if(tableauSeparateur.indexOf(inputVal[i]) != -1)
        {
            pile.push(inputVal[i]);
        }

        valeurTmp = pile[pile.length - 1];
        switch(valeurTmp)
        {
            case ')' :
                if(pile[pile.length - 2] == '(')
                {
                    pile.pop();
                    pile.pop();
                }
                break;
            case ']' :
                if(pile[pile.length - 2] == '[')
                {
                    pile.pop();
                    pile.pop();
                }
                break;
            case '}' :
                if(pile[pile.length - 2] == '{')
                {
                    pile.pop();
                    pile.pop();
                }
                break;
        }
    }

    //console.log("Resultat : "+pile);

    if(pile.length == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function verificationOperation(inputVal)
{
    var regexTableauNomColonneFormule = /([a-z|A-Z]{1,})\b/i;
    var tableauNomColonneFormule = inputVal.split(regexTableauNomColonneFormule);
    var regexTableauOperateur = /[\+\-\*\/]/g;
    var indice = 0;
    var regDoubleMultiplication = /\*\*/g;
    var tableauConnaitreNombreDeDoubleMultiplication;
    tableauConnaitreNombreDeDoubleMultiplication = inputVal.match(regDoubleMultiplication);

    for(var i = 0 ;i < tableauNomColonneFormule.length;i++)
    {
        if(!regexTableauNomColonneFormule.test(tableauNomColonneFormule[i]))
        {
            tableauNomColonneFormule.splice(i,1);
        }
    }

    var tableauOperateur = inputVal.match(regexTableauOperateur);
    if(tableauOperateur == null && tableauNomColonneFormule.length > 1)
    {
        return false;
    }
    
    if(tableauOperateur != null)
    {
        var tailleTableauOperateur = tableauOperateur.length;
        tailleTableauOperateur = tailleTableauOperateur - tableauConnaitreNombreDeDoubleMultiplication.length;
    }

    
    for(var i = 1 ; i < tableauNomColonneFormule.length; i++)
    {

        if(tableauNomColonneFormule.length != tailleTableauOperateur+1)
        {
            return false;
        }
        if(inputVal.indexOf(tableauNomColonneFormule[i-1]) > inputVal.indexOf(tableauOperateur[indice]) && inputVal.indexOf(tableauNomColonneFormule[i]) < inputVal.indexOf(tableauOperateur[indice]))
        {
            return false;
        }
        indice++;
    }

    return true;
}

function validationDateHeure(numTab,numLigne,nomId){ //Fonction de validation du type DateHeure
    var id = "tab"+numTab+nomId+numLigne;
    var inputVal = document.getElementById(id).value;
    var reg = /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}$/;
    if(lang == "FR")
    {
        if(!(reg.test(inputVal))) {
        document.getElementById(id).removeAttribute("class");
        document.getElementById(id).setAttribute("class","form-control inputInvalid");
        document.getElementById(id).setAttribute("title","N'utilisez que des caractères numériques séparés par des \"-\" pour la date et des \":\" pour l'heure avec un T pour séparer les deux. (ex : A-M-JTH:M:S, 2019-11-06T16:00:00)");
        LockGenerer();
        }else{
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).removeAttribute("title");
            document.getElementById(id).setAttribute("class","form-control");
            document.getElementById("BoutonEnvois").removeAttribute("title");
            UnLockGenerer();
        }
    }
    else if(lang == "EN")
    {
        if(!(reg.test(inputVal))) {
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class","form-control inputInvalid");
            document.getElementById(id).setAttribute("title","Use only numeric characters separated by \"-\" for date and \"-\" for time, with a \"T\" to separate the two. (ex: A-M-JTH:M:S, 2019-11-06T16:00:00)");
            LockGenerer();
            }else{
                document.getElementById(id).removeAttribute("class");
                document.getElementById(id).removeAttribute("title");
                document.getElementById(id).setAttribute("class","form-control");
                document.getElementById("BoutonEnvois").removeAttribute("title");
                UnLockGenerer();
            }
    }
    
}

function validationCodeArticle(numTab,numLigne,nomId){ //Fonction de validation du type CODE ARTICLE
    var id = "tab"+numTab+nomId+numLigne;
    var inputVal = document.getElementById(id).value;

    if(lang == "FR")
    {
        if(inputVal==''){
        document.getElementById(id).removeAttribute("class");
        document.getElementById(id).setAttribute("class","form-control inputInvalid");
        document.getElementById(id).setAttribute("title","Utilisez n'importe quel caractère, X pour uniquement des lettres majuscules, y pour des lettres majuscules et minuscules, 9 pour des chiffres de 0 à 9, 1 pour des chiffres de 1 à 9, '?' pour rien (ex : Xy91???X)");
        LockGenerer();
        }else{
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).removeAttribute("title");
            document.getElementById(id).setAttribute("class","form-control");
            document.getElementById("BoutonEnvois").removeAttribute("title");
            UnLockGenerer();
        }
    }
    else if(lang == "EN")
    {
        if(inputVal==''){
        document.getElementById(id).removeAttribute("class");
        document.getElementById(id).setAttribute("class","form-control inputInvalid");
        document.getElementById(id).setAttribute("title","Use any character, X for upper case letters only, y for upper and lower case letters, 9 for numbers from 0 to 9, 1 for numbers from 1 to 9, '?' for nothing (example: Xy91???X).");
        LockGenerer();
        }else{
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).removeAttribute("title");
            document.getElementById(id).setAttribute("class","form-control");
            document.getElementById("BoutonEnvois").removeAttribute("title");
            UnLockGenerer();
        }
    }
    
}

function LabelLigneExist(numTab, inputVal){
    var tableauNomColonneNumerique = [];
    var reg = /([a-z]{1,})\b/i;
    var tableauNomColonneFormule = inputVal.split(reg);
    for(var i = 0 ;i < tableauNomColonneFormule.length;i++)
    {
        if(!reg.test(tableauNomColonneFormule[i]))
        {
            tableauNomColonneFormule.splice(i,1);
        }
    }
    for(var i = 0 ; i<= TabIndex[numTab];i++)
    {
        if(document.getElementById("tab"+numTab+"TypeDeDonnees"+i).value == "Numerique")
        {
            tableauNomColonneNumerique.push(document.getElementById("tab"+numTab+"Label"+i).value);
        }
    }


    for(var i = 0 ; i < tableauNomColonneFormule.length ;i++){
        for(var j = 0; j < tableauNomColonneNumerique.length; j++)
        {
            if(tableauNomColonneNumerique[j] == tableauNomColonneFormule[i])
            {
                tableauNomColonneFormule.splice(i,1);
                i--;
            }
        }
    }
    if(tableauNomColonneFormule.length == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function operationsConforme(inputVal)
{
    var reg = /[\+\-\*\/]/g;
    var tableauOperateur = [];
    tableauOperateur = inputVal.match(reg);

    if(tableauOperateur == null)
    {
        return true;
    }
    var tableauSeparateurOuvrant = ["(","[","{"];
    var tableauSeparateurFermant= [")","]","}"];
    var tableauRechercheOperateur = ["+","-","/"];

    for(var i = 0; i < tableauOperateur.length ; i++)
    {
        if(i == 0)
        {
            var index = inputVal.indexOf(tableauOperateur[i]);              //Au début on prend le premier opérateur
        }
        else
        {
            var index = inputVal.indexOf(tableauOperateur[i],indexAnterieur+1);        //Ensuite on prend l'opérateur à la suite du précèdent 
        }                                                                                                       //pour éviter de prendre le mauvais opérateur
        
        var indexAnterieur = index;
        var regexEspaceApresOperateur = /(\s){1,}[^a-zA-Z0-9\*\+\-\/]/;
        var regexEspaceAvantOperateur = /[^a-zA-Z0-9\*\+\-\/](\s){1,}/;

        if(tableauSeparateurOuvrant.indexOf(inputVal[index - 1]) != -1 || tableauSeparateurFermant.indexOf(inputVal[index + 1]) != -1)
        {
            return false;           //Cas pour vérifier si un opérateur est mit derrière un séparateur ouvrant ou mit devant un spérateur fermant
        }
        else if((regexEspaceApresOperateur.test(inputVal.substr(inputVal[index + 1]))) == true || (regexEspaceAvantOperateur.test(inputVal.substr(0,index)) == true))           //soucis
        {
            return false;           //Cas pour vérifier si il n'y a pas plusieurs espaces à la suite
        }
        else if(inputVal[index + 1] == null || inputVal[index - 1] == null)
        {
            return false;           //Cas pour vérifier si rien n'est rentré avant ou après un opérateur
        }
        else if((inputVal[index + 1] == " " && inputVal[index + 2] == null) || (inputVal[index - 1] == " " && inputVal[index - 2] == null))
        {
            return false;           //Cas pour vérifier si rien n'est rentré avant ou après un opérateur suivi d'un espace
        }
        else if(tableauRechercheOperateur.indexOf(inputVal[index-1]) != -1 || tableauRechercheOperateur.indexOf(inputVal[index-2]) != -1)
        {
            return false;           //Cas pour vérifier si deux opérateurs sont collé sans aucunes donnée entre les deux
        }
        
    }

    return true;
}

function validationEnvoi(){
    var mustfilled = document.getElementsByClassName("required");
    var dontSend = true;
    for (var i = 0; i < mustfilled.length; i++) {
        if(lang == "FR")
        {
            if(mustfilled[i].value ==""){
            dontSend = false;
            var id = mustfilled[i].getAttribute("id");
            document.getElementById(id).removeAttribute("class");
            document.getElementById(id).setAttribute("class", "form-control inputInvalid required");
            document.getElementById(id).setAttribute("title", "Veuillez remplir ce champ");
            LockGenerer();
            }
        }
        else if(lang == "EN")
        {
            if(mustfilled[i].value ==""){
                dontSend = false;
                var id = mustfilled[i].getAttribute("id");
                document.getElementById(id).removeAttribute("class");
                document.getElementById(id).setAttribute("class", "form-control inputInvalid required");
                document.getElementById(id).setAttribute("title", "Please fill in this field");
                LockGenerer();
                }
        }
        
    }
    if(dontSend){
       return true;
    }
    else
        return false;
}

function ValidationTableReference(NumTabl,Numligne){

    var tableReference = document.getElementById("tab"+NumTabl+"TableReference"+Numligne);
    var valeurTableReference = tableReference.value; // On récupère la valeur du input

    // Puis on va comparer cette valeur avec le nom de toutes les tables voir si ça correspond

    var tableFound = -1; // Par défaut on va considérer que la table nommé "xxxxxxx" existe pas

    for(var i = 0; i < TabIndex.length && tableFound == -1; i++){

        var nomTable = document.getElementById("NomTable"+i).value;
        if(valeurTableReference == nomTable && valeurTableReference != ""){
            tableFound = i;
        }

    }
    if(lang == "FR")
    {
        if(tableFound == -1){
        tableReference.removeAttribute("class");
        tableReference.setAttribute("class","form-control inputInvalid");
        tableReference.setAttribute("title", "Vous tentez de faire réference à une table qui n'existe pas");
        LockGenerer();
        }else{
            tableReference.removeAttribute("class");
            tableReference.removeAttribute("title");
            tableReference.setAttribute("class","form-control");
            tableReference.removeAttribute("title");
            UnLockGenerer();
        }
    }
    else if(lang == "EN")
    {
        if(tableFound == -1){
            tableReference.removeAttribute("class");
            tableReference.setAttribute("class","form-control inputInvalid");
            tableReference.setAttribute("title", "You're trying to refer to a table that doesn't exist");
            LockGenerer();
            }else{
                tableReference.removeAttribute("class");
                tableReference.removeAttribute("title");
                tableReference.setAttribute("class","form-control");
                tableReference.removeAttribute("title");
                UnLockGenerer();
            }
    }
    

    return tableFound;
    
}

function ValidationColonneReference(NumTabl,Numligne){

    var colonneReference = document.getElementById("tab"+NumTabl+"ColonneReference"+Numligne);
    var valeurColonneReference = colonneReference.value; // On récupère la valeur du input
    var colonneFound = false;

    var tableReference = ValidationTableReference(NumTabl, Numligne);

    if(tableReference > -1){

        for(var i = 0; i < TabIndex[tableReference] + 1 && !colonneFound; i++){

            var nomColonne = document.getElementById("tab"+tableReference+"Label"+i).value;
            if(valeurColonneReference == nomColonne && valeurColonneReference != ""){
                colonneFound = true;
            }

        }

    }

    if(lang == "FR")
    {
        if(!colonneFound){
        colonneReference.removeAttribute("class");
        colonneReference.setAttribute("class","form-control inputInvalid");
        colonneReference.setAttribute("title", "Vous tentez de faire réference à une colonne introuvable");
        LockGenerer();
        }else{
            colonneReference.removeAttribute("class");
            colonneReference.removeAttribute("title");
            colonneReference.setAttribute("class","form-control");
            colonneReference.removeAttribute("title");
            UnLockGenerer();
        }
    }
    else if(lang == "EN")
    {
        if(!colonneFound){
            colonneReference.removeAttribute("class");
            colonneReference.setAttribute("class","form-control inputInvalid");
            colonneReference.setAttribute("title", "You're trying to refer to a column you can't find.");
            LockGenerer();
            }else{
                colonneReference.removeAttribute("class");
                colonneReference.removeAttribute("title");
                colonneReference.setAttribute("class","form-control");
                colonneReference.removeAttribute("title");
                UnLockGenerer();
            }
    }
    

}
function deRequire(elClass) { //Permet de selectionner au moins une checkbox
    el=document.getElementsByClassName(elClass);

    var atLeastOneChecked=false;//Au moins une des checkBox est selectionnée 
    for (i=0; i<el.length; i++) {
        if (el[i].checked === true) {
            atLeastOneChecked=true;
        }
    }

    if (atLeastOneChecked === true) {
        for (i=0; i<el.length; i++) {
            el[i].required = false;
        }
    } else {
        for (i=0; i<el.length; i++) {
            el[i].required = true;
        }
    }
}
function validationNomTable(numTab){ //On verifie qu'un autre table n'a pas le même nom
    nombrebTable = document.getElementById("tables").childElementCount;
    if(nombrebTable>1){
        nomTable = document.getElementById("NomTable"+numTab).value;

        if(nomTable!=""){
            id = "NomTable"+numTab;

            tabExiste = false;
            for(i=0;i<nombrebTable;i++){ //On parcourt les tableaux sauf celui que l'on compare
                if(i!=numTab && document.getElementById("NomTable"+i).value == nomTable){
                    tabExiste = true;
                }
            }

            if(lang == "FR")
            {
                if(tabExiste == true){
                document.getElementById(id).removeAttribute("class");
                document.getElementById(id).setAttribute("class", "form-control inputInvalid input-change");
                document.getElementById(id).setAttribute("title", "Il existe déjà une table de ce nom");
                LockGenerer();
                } else {
                    document.getElementById(id).removeAttribute("class");
                    document.getElementById(id).removeAttribute("title");
                    document.getElementById(id).setAttribute("class", "form-control input-change");
                    UnLockGenerer();
                    document.getElementById("BoutonEnvois").removeAttribute("title");
                }
            }
            else if(lang == "EN")
            {
                if(tabExiste == true){
                    document.getElementById(id).removeAttribute("class");
                    document.getElementById(id).setAttribute("class", "form-control inputInvalid input-change");
                    document.getElementById(id).setAttribute("title", "There is already a table with this name");
                    LockGenerer();
                } 
                else 
                {
                    document.getElementById(id).removeAttribute("class");
                    document.getElementById(id).removeAttribute("title");
                    document.getElementById(id).setAttribute("class", "form-control input-change");
                    UnLockGenerer();
                    document.getElementById("BoutonEnvois").removeAttribute("title");
                }
            }
            
        }
    }
}