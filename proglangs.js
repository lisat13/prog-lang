function print(selectobj) {
var e_proglangs = document.getElementById("proglangs");
var e_output = document.getElementById("output");
e_output.innerHTML = "Du har valgt progarmeringsspråket " + e_proglangs.options[selectobj.selectedIndex].text;
}
