let neymarImg = document.querySelector("img")

document.addEventListener("mousemove",function(event){
    let dx = event.pageX - window.innerWidth/2;
    let dy = event.pageY - window.innerHeight/2;

    let angleX = 20 * dx / window.innerWidth/2;
    let angleY = 20* dy/window.innerHeight/2;

    block.style.transform = `rotateX(${angleyY}deg) rotateY(${angleX}deg)`
})