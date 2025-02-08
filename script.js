document.getElementById("cake").addEventListener("click", function() {
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
        window.location.href = "nextpage.html"; // Ensure this file exists
    }, 18000); // 3s animation + 15s delay
});
