/* endrer innholdet i output */
function print(selectobj) {
var e_proglangs = document.getElementById("proglangs");
var e_output = document.getElementById("output");
e_output.innerHTML = "Du har valgt progarmeringsspråket " + e_proglangs.options[selectobj.selectedIndex].text;
}

/* fjerner liste elemnetet som har verdi null(velg språk) */
function removeoption() {  
var select=document.getElementById('proglangs');

for (i=0;i<select.length;  i++) {
   if (select.options[i].value=='null') {
     select.remove(i);
   }
}
}
/*endrer innholdet i output til at nettsiden er under utvikling*/
function dev(selectobj) {
var e_proglangs = document.getElementById("proglangs");
var e_output = document.getElementById("output");
e_output.innerHTML = "Denne delen av siden er under utvikling";
}
