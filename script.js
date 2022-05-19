
let paletteColor = window.document.querySelectorAll('div.color')
for(let i = 0;i<paletteColor.length;i++){
    paletteColor[i].addEventListener('click' ,clicouMudou);
}
function clicouMudou(click){
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    click.target.classList.add("selected")

}


//com a ajuda do Gabriel da turma 19 
 let pixelList = window.document.querySelectorAll('div.pixel')
 for(let i = 0;i<pixelList.length;i++){
    pixelList[i].addEventListener('click' ,botandoCor);

 }
 function botandoCor(click){
     let colocandoCor = document.querySelector('.selected')
     console.log(colocandoCor)
 let mudanca = window.getComputedStyle(colocandoCor).getPropertyValue("background-color");

click.target.style.backgroundColor=mudanca;
 
} 
//com a ajuda da Tuana Turma 19
let botao = document.querySelector("#clear-board")
function limpando(){
    let limpou = document.getElementsByClassName("pixel")
    for(let j = 0;j<limpou.length;j++){
    limpou[j].style.backgroundColor="white"
}
}
botao.addEventListener('click',limpando)



