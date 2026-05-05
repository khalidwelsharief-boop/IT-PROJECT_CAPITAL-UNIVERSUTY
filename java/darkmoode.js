//بسم الله دي فكره الجافا في كيف اعمل الثيم يتفير 



let darkmode = localStorage.getItem("darkmode");
const thmeSwitch = document.getElementById("theme-switch");
//كيف اشغل الثيم 
const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkmode", "active");
}
//كيف اقفل الثيم 
const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkmode", "null");
} 
//اتشغل الثيم لو اللاب مفعل مظلم من الاول
if (darkmode === "active") {
    enableDarkMode();
}

//كيفيه تفعيل وتعطيل الثيم
thmeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode != "active") {
        enableDarkMode();
    } 
    else {
        disableDarkMode();
    }
});

