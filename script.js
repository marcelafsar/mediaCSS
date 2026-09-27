let neymarImg = document.querySelector("img")

document.addEventListener("mousemove",function(event){
    let dx = event.pageX - window.innerWidth/2;
    let dy = event.pageY - window.innerHeight/2;

    let angleX = 80 * dx / window.innerWidth/2;
    let angleY = 80* dy/window.innerHeight/2;

    neymarImg.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`
})