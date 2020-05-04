function insertVer(text){
  document.getElementById("version").innerHTML = text;
}

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {   
  document.cookie = name+'=; Max-Age=-99999999;';  
}


function dark_mode_flip(){
  if (getCookie("theme") == "dark"){
    setCookie("theme", "light");
    [].forEach.call(document.getElementsByClassName("themed"), function(v,i,a){
      v.classList.add("light_mode");
      v.classList.remove("dark_mode");
    });
    [].forEach.call(document.getElementsByClassName("themeb"), function(v,i,a){
      v.classList.remove("dark_mode_a");
    })
    console.log("set to light");
  } else {
    setCookie("theme", "dark");
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



if (getCookie("theme") == "dark") {
  setCookie("theme", "light");
  dark_mode_flip();
} else {
  setCookie("theme", "dark");
  dark_mode_flip();
};

insertVer(0.5)