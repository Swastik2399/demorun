document.addEventListener("DOMContentLoaded", function() {
    let lastX = 0, lastY = 0, lastZ = 0;
    let shakeThreshold = 15; // Adjust if needed

    // REMOVE ALL CLICK EVENTS FROM THE CAKE
    let cake = document.getElementById("cake");
    if (cake) {
        cake.onclick = null;  // Remove any inline onclick
        cake.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            console.log("Click prevented");  // Debugging log
        });
    }

    // BLOCK ALL CLICKS ON THE ENTIRE DOCUMENT
    document.body.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("Global click prevented");  // Debugging log
    }, true);

    // Detect phone shake
    window.addEventListener("devicemotion", function(event) {
        let acceleration = event.accelerationIncludingGravity;
        if (!acceleration) return;

        let deltaX = Math.abs(acceleration.x - lastX);
        let deltaY = Math.abs(acceleration.y - lastY);
        let deltaZ = Math.abs(acceleration.z - lastZ);

        if (deltaX + deltaY + deltaZ > shakeThreshold) {
            cutCake();
        }

        lastX = acceleration.x;
        lastY = acceleration.y;
        lastZ = acceleration.z;
    });
});

function cutCake() {
    let slice = document.getElementById("slice");
    let flame = document.getElementById("flame");
    let message = document.getElementById("message");
    let balloonsContainer = document.getElementById("balloons");

    // Show the cake slice
    slice.style.opacity = "1";
    slice.style.animation = "cutCake 1s ease-in-out";

    // Make the flame disappear
    flame.style.animation = "fadeOut 0.5s ease-in-out";
    setTimeout(() => { flame.style.opacity = "0"; }, 500);

    // Display balloons
    for (let i = 0; i < 30; i++) {
        let balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        balloonsContainer.appendChild(balloon);
    }

    // Show the message
    setTimeout(() => {
        message.classList.remove("hidden");
        message.style.animation = "fadeInText 3s ease forwards";
    }, 1000);

    // Redirect after 15 seconds
    setTimeout(() => {
        window.location.href = "nextpage.html";
    }, 18000);
        }
