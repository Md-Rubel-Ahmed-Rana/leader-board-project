const applyDarkMode = () => {
    const body = document.getElementById("body");
    const header = document.getElementById("header");
    const playersContainer = document.getElementById("players-container");
    const players = document.getElementById("players");
    const latestCourses = document.getElementById("latest-courses");
    const darkBtn = document.getElementById("dark-mode-btn")
    if (body.classList.contains("darkMode") && header.classList.contains("darkMode") && playersContainer.classList.contains("darkMode") && players.classList.contains("darkMode") && latestCourses.classList.contains("darkMode") && darkBtn.classList.contains("dark-btn")) {
        body.classList.remove("darkMode")
        header.classList.remove("darkMode");
        playersContainer.classList.remove("darkMode");
        players.classList.remove("darkMode");
        latestCourses.classList.remove("darkMode");
        darkBtn.classList.remove("dark-btn");
    } else{
    body.classList.add("darkMode")
    header.classList.add("darkMode");
    playersContainer.classList.add("darkMode");
    players.classList.add("darkMode");
    latestCourses.classList.add("darkMode");
    darkBtn.classList.add("dark-btn");
    }
}