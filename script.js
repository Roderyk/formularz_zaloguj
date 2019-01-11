const zaloguj = document.querySelector(".zaloguj")
const form = document.querySelector(".myform")
const wyloguj = document.querySelector(".wyloguj")

zaloguj.onclick = Fzaloguj
wyloguj.onclick = Fwyloguj
function Fzaloguj() {
    var login = document.querySelector(".login")
    var loginTekst = login.value;
    var powitanie = document.querySelector("#komunikatPowitalny");
    var drugiEkran = document.querySelector(".drugiEkran");
    drugiEkran.style.display = "inline";
    powitanie.innerHTML = "Witaj użytkowniku " + loginTekst;
    form.style.display = "none";
    login.value = null;
}
function Fwyloguj() {
    var drugiEkran = document.querySelector(".drugiEkran");
    drugiEkran.style.display = "none";
    form.style.display = "inline";
}