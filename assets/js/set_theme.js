function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
let theme = getCookie("theme");
if(theme == undefined){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = "dark";
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        theme = "light";
    }
    else
        theme = "dark";
}
let currTheme = "./assets/css/"+theme+".css";
let link = document.getElementById("theme-link");
link.setAttribute("href", currTheme);