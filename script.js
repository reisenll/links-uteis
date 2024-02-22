function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const transition = document.querySelector("body")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adiicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    transition.setAttribute("style", "transition: all 2s ease;")
  } else {
    //se tiver sem light mode, manter a imagem original
    img.setAttribute("src", "./assets/avatar.png")
    transition.setAttribute("style", "transition: none;")
  }
}
