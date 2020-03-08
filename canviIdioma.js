var idioma = "idCA";
var paramstr = window.location.search.substr(1);
var paramarr = paramstr.split("&");

for (var i = 0; i < paramarr.length; i++) {
    var tmparr = paramarr[i].split("=");
}
if (tmparr[0]) {
    // alert('El valor del parámetro variable es: ' + tmparr[1]);
    idioma = tmparr[1];
} else {
    // alert('No se envió el parámetro variable');
    idioma = "idCA";
}

/*
<script type="text/javascript">
var paramstr = window.location.search.substr(1);
var paramarr = paramstr.split ("&");
var params = {};

for ( var i = 0; i < paramarr.length; i++) {
    var tmparr = paramarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
}
// variable és el nom de la variable que es passa
if (params['variable']) {
   console.log('El valor del parámetro variable es: '+params['variable']);
} else {
   console.log('No se envió el parámetro variable');
}
</script>
*/



filterSelection(idioma);

function filterSelection(c) {
    var x = document.getElementById(c).value;
    document.getElementById(c).selected = true;

    var x, i;
    x = document.getElementsByClassName("filterLanguage");
    if (x.length = 0) {
        filterLanguage == "idCA";
        x = document.getElementsByClassName("filterLanguage");
    }

    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


// option select onchange
function canviIdioma() {
    /* Per obtenir el valor */
    var OpcioEscollida = document.getElementById("idIdioma").value;
    /* Per oblenir el text */
    var mcombo = document.getElementById("idIdioma");
    var oPcioSelected = mcombo.options[mcombo.selectedIndex].text;
    filterSelection(OpcioEscollida);
}

// canvi pagina
function canviPagina(pagina) {
    var OpcioEscollida = document.getElementById("idIdioma").value;
    var obrirPagina = pagina + "?idioma=" + OpcioEscollida;
    setTimeout(function() { document.location.href = obrirPagina; }, 5);
}