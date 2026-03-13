// Disable right click
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    console.warn("Right click disabled.");
});

// Prevent common devtool shortcuts
document.addEventListener("keydown", (e) => {

    const blocked =
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I","C","J"].includes(e.key)) ||
        (e.ctrlKey && e.key === "u");

    if (blocked) {
        e.preventDefault();
        console.warn("Developer tools shortcut blocked.");
    }

});

// Friendly console message
(function () {

    const style =
    "color: #ff4081; font-size:16px; font-weight:bold;";

    console.log("%cThanks for respecting our work ❤️", style);

})();