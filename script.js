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
    const style = "color: #ff4081; font-size:16px; font-weight:bold;";
    console.log("%cThanks for respecting our work ❤️", style);
})();


// 📊 Analytical facts (short + stat-style)
const facts = [
    "40,000+ Palestinians killed",
    "15,000+ children killed",
    "90,000+ injured",
    "1.7–2 million displaced (most of Gaza’s population)",
    "60–70% of homes damaged or destroyed",
    "300+ schools damaged/destroyed",
    "90% of population facing food insecurity",
    "Famine risk reported in northern Gaza",
    "Thousands still missing under rubble.",
    "Hundreds of aid workers and journalists killed"
];

let index = 0;

// ⏰ Show alert every 30 seconds
setInterval(() => {
    alert(facts[index])
    index = (index + 1) % facts.length;
}, 60000);
