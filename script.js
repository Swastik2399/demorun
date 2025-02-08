document.getElementById("cake").addEventListener("click", function() {
    let slice = document.getElementById("slice");
    let cake = document.getElementById("cake");
    let flame = document.getElementById("flame");

    // Show the cake slice
    slice.style.opacity = "1";
    slice.style.animation = "cutCake 1s ease-in-out";

    // Make the flame disappear (simulate blowing out the candle)
    flame.style.animation = "fadeOut 0.5s ease-in-out";
    setTimeout(() => { flame.style.opacity = "0"; }, 500);

    // Redirect to the next page after animation
    setTimeout(() => {
        window.location.href = "nextpage.html"; 
    }, 1500);
});
