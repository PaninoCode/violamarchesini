//Scripts per il modal

function openModal(url){
    document.getElementById('modal_iframe').src = url;
    var modal = new bootstrap.Modal(document.getElementById('modal'), {});
    modal.show();
}

//Scripts per la data
const d = new Date();

var giorno = ["Lunedì, ", "Martedì, ", "Mercoledì, ", "Giovedì, ", "Venerdì, ", "Sabato, ", "Domenica, "];
var mese = [" Gennaio ", " Febbraio ", " Marzo ", " Aprile ", " Maggio ", " Giugno ", " Luglio ", " Agosto ", " Settembre ", " Ottobre ", " Novembre ", " Dicembre "];

document.getElementById('data').innerHTML = giorno[d.getDay() - 1] + d.getDate() + mese[d.getMonth()] + d.getFullYear();

//Scripts per il sito in dark mode

var current_theme = "dark";
updatePageStyle("dark");

document.getElementById('theme_changer').addEventListener('click', event => {
    switch(current_theme){
        case "dark":
            updatePageStyle("light");
            current_theme = "light";
            break;
        case "light":
            updatePageStyle("dark");
            current_theme = "dark";
            break;
    }
});

function updatePageStyle(theme){
    switch(theme){
        case "dark":
            document.getElementById('lightmode_icon').style.display = "none";
            document.getElementById('darkmode_icon').style.display = "block";
            document.getElementsByTagName('body')[0].style.backgroundColor = "#3E4349";
            document.getElementById('sidebar').classList.add('bg-dark', 'text-light');
            document.getElementById('sidebar').classList.remove('bg-light', 'text-dark');
            document.getElementById('footer').classList.add('bg-dark', 'text-light');
            document.getElementById('footer').classList.remove('bg-light', 'text-dark');
            document.getElementById('navbar').classList.add('navbar-dark', 'bg-dark');
            document.getElementById('navbar').classList.remove('navbar-light', 'bg-light', 'border-bottom');
            for (let i = document.querySelectorAll('.card').length; i > 0; i--){
                if(document.getElementsByClassName('card')[i - 1].id == "lightcard"){
                    document.getElementsByClassName('card')[i - 1].classList.add('bg-light', 'text-dark');   
                }else{
                    document.getElementsByClassName('card')[i - 1].classList.add('bg-dark', 'text-white');
                    document.getElementsByClassName('card')[i - 1].classList.remove('bg-light', 'text-dark');
                }
            }
            for (let i = document.querySelectorAll('a').length; i > 0; i--){
                document.getElementsByTagName('a')[i - 1].style.color = "#FFFFFF";
            }
            break;
        case "light":
            document.getElementById('lightmode_icon').style.display = "block";
            document.getElementById('darkmode_icon').style.display = "none";
            document.getElementsByTagName('body')[0].style.backgroundColor = "#FFFFFF";
            document.getElementById('sidebar').classList.remove('bg-dark', 'text-light');
            document.getElementById('sidebar').classList.add('bg-light', 'text-dark');
            document.getElementById('footer').classList.remove('bg-dark', 'text-light');
            document.getElementById('footer').classList.add('bg-light', 'text-dark');
            document.getElementById('navbar').classList.remove('navbar-dark', 'bg-dark');
            document.getElementById('navbar').classList.add('navbar-light', 'bg-light', 'border-bottom');
            for (let i = document.querySelectorAll('.card').length; i > 0; i--){
                document.getElementsByClassName('card')[i - 1].classList.remove('bg-dark', 'text-white');
                document.getElementsByClassName('card')[i - 1].classList.add('bg-light', 'text-dark');
            }
            for (let i = document.querySelectorAll('a').length; i > 0; i--){
                document.getElementsByTagName('a')[i - 1].style.color = "#3E4349";
            }
            break;
    }
};