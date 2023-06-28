const menu = [...window.document.querySelectorAll("menu > img")]
const nav = window.document.getElementById("nav")

/*Background-slide variantes loja */


const backgroundloja = window.document.getElementById("loja")
const setas = [...window.document.querySelectorAll(".seta >img")]

/* Menu */

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

/* Background slide  loja*/


for(let i = 0; i< setas.length; i++){


    setas[i].addEventListener("click", ()=>{

        if(setas[i] == setas[0]){
            window.alert("Não tem imagens")

        } else if(setas[i] == setas[1]){
            loja.style.backgroundImage = "url('https://images3.alphacoders.com/673/thumb-1920-673056.png')"
            
            setas[1].style.display="none"
            setas[0].style.display="block"
            setas[3].style.display="block"
            setas[4].style.display="none"
            
            
            window.alert("Voltou para imagem 1")
            

        }
            else if (setas[i] == setas[3]) {
                loja.style.backgroundImage = "url('https://th.bing.com/th/id/R.0d470c76e7ae047f2dfa5b376de59271?rik=Ke88yFe96DG%2bRw&pid=ImgRaw&r=0')"
            setas[0].style.display="none"
            setas[3].style.display="none"

            setas[1].style.display="block"
            setas[4].style.display="block"
            window.alert("imagem-2-inserida")
    

            

        } else if (setas[i] == setas[4]){
            loja.style.backgroundImage = "url('https://th.bing.com/th/id/R.257b6ae3d434a3766d65679dcda7f623?rik=nXZnd02wr8Owdw&pid=ImgRaw&r=0')"
            setas[1].style.display="none"
            setas[4].style.display="none"
            setas[2].style.display="block"
            setas[5].style.display="block"

            window.alert("imagem-3-inserida")
        } else if(setas[i] == setas[2]){
            loja.style.backgroundImage = "url('https://th.bing.com/th/id/R.0d470c76e7ae047f2dfa5b376de59271?rik=Ke88yFe96DG%2bRw&pid=ImgRaw&r=0')"
            setas[1].style.display="block"
            setas[4].style.display="block"

            setas[2].style.display="none"
            setas[5].style.display="none"
            window.alert("voltou imagem-2")
        }
        else{
            window.alert("Não tem imagem")
        }


    })
}





