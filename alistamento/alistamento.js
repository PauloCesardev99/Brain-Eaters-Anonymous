const menu = [...window.document.querySelectorAll("menu > img")]
const nav = window.document.getElementById("nav")


const botaocadastro = window.document.getElementById("botão-cadastro")


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
 /* Botão cadastro*/

 botaocadastro.addEventListener("click", ()=>{
    /* Alistamento*/
    const nome = window.document.getElementById("nome")
    const idade = window.document.getElementById("number")
    const sexo = window.document.getElementById("sexo")
    

    if(nome.value == "" || idade.value == "" || sexo.value == ""){
        window.alert("Preencha todos os campos")
    } else{
        window.alert(`Seja bem-vindo soldado ao seu novo lar! ${nome.value}`)
    }


 })


