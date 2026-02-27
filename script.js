const button = document.querySelector(".contact");

button.addEventListener("click", () => {
    console.log("scrolling....");
    
    window.scrollTo({
    top:  document.body.scrollHeight,
    behavior: 'smooth'
  })
})