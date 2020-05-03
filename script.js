function insertVer(text){
  document.getElementById("version").innerHTML = text;
}

function dark_mode_flip(){
  if (sessionStorage.getItem("theme") === "dark"){
    sessionStorage.setItem("theme", "light");
    [].forEach.call(document.getElementsByClassName("themed"), function(v,i,a){
      v.classList.add("light_mode");
      v.classList.remove("dark_mode");
    });
    [].forEach.call(document.getElementsByClassName("themeb"), function(v,i,a){
      v.classList.remove("dark_mode_a");
    })
    console.log("set to light");
  } else {
    sessionStorage.setItem("theme", "dark");
    [].forEach.call(document.getElementsByClassName("themed"), function(v,i,a){
      v.classList.add("dark_mode");
      v.classList.remove("light_mode");
    });
    [].forEach.call(document.getElementsByClassName("themeb"), function(v,i,a){
      v.classList.add("dark_mode_a")
    })
    console.log("set to dark");
  }
}
if (sessionStorage.getItem("theme") === "dark") {
  sessionStorage.setItem("theme", "light");
  dark_mode_flip();
} else {
  sessionStorage.setItem("theme", "dark");
  dark_mode_flip();
};
insertVer(0.5)