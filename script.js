let altTheme = localStorage.getItem("altTheme");

const altThemeToggle = document.getElementById("koby-jones");

const enableAltTheme = () => {
    document.body.classList.add("alt-color-mode");
    localStorage.setItem("altTheme", "active");
}

const disableAltTheme = () => {
    document.body.classList.remove("alt-color-mode");
    localStorage.setItem("altTheme", null);
}

if (altTheme === "active") {
    enableAltTheme();
}

altThemeToggle.addEventListener("click", () => {
    altTheme = localStorage.getItem("altTheme");
    altTheme !== 'active'? enableAltTheme() : disableAltTheme();
});