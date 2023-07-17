var btn = document.getElementById("theme-button");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme() {
    let lightTheme = "./assets/css/light.css";
    let darkTheme = "./assets/css/dark.css";

    let currTheme = link.getAttribute("href");
    let theme = "";

    if (currTheme == lightTheme) {
        currTheme = darkTheme;
        theme = "dark";
    }
    else {
        currTheme = lightTheme;
        theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}

function Save(theme) {
    let now = new Date();
    let time = now.getTime();
    let expireTime = time + 86400e3;
    now.setTime(expireTime);
    document.cookie = "theme=" + theme + "; expires=" + now.toUTCString();
}