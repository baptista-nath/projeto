function toggleMode() {

  const html= document.documentElement
  html.classList.toggle("light")
//substituir a img
const img = document.querySelector("#profile img")

//se tiver light mode, adicionar a img light
 if(html.classList.contains('light')){
  img.setAttribute("src","./assets/avatar-light.png")
   
  }else{
    img.setAttribute("src","./assets/avatar.png")

  }

    //se tiver sem light mode, manter img original
   
  

  
}
