const eyeBall = document.getElementById("eyeBall");

document.addEventListener("mousemove" , (event)=>
{
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    
    // Update the element's position based on the mouse coordinates
    eyeBall.style.transition = "0s";
    eyeBall.style.left = x;
    eyeBall.style.top = y;
})

document.addEventListener("mouseout" , (event) => 
{
    eyeBall.style.transition = "0.7s";
    eyeBall.style.left = "50%";
    eyeBall.style.top = "50%";
})