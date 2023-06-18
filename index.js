const menu = [...window.document.querySelectorAll("menu > img")]
const nav = window.document.getElementById("nav")


for(let i = 0; i < menu.length; i++){
    menu[i].addEventListener("click", function abrirFecharMenu(){
        if (menu[i] == menu[0]){
            menu[0].style.display ="none"
            menu[1].style.display ="inline-block"
           nav.style.display = "block"
        } else{
            menu[1].style.display ="none"
            menu[0].style.display ="inline-block"
           nav.style.display = "none"
        }
    })
 }


