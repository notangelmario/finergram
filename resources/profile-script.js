var profileInfo = JSON.parse(profileInfo)
var photos = JSON.parse(photos)
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;


function addPhoto(photo,username){
  const div = document.createElement('div');
  div.className = "photocont";
  div.innerHTML = '<img class="photo" src="resources/profileres/' + username + "/" + photos[photo] + '.jpg">';
  document.getElementById('photos').appendChild(div);
}

function insertText(text, element){
  document.getElementById(element).innerHTML = text;
}

function addProfilePic(photo, username){
  document.getElementById("profilepic").src = "resources/profileres/"+ username+ "/" + photo + ".jpg"
}

function assembleHTML(){
  addProfilePic(profileInfo.picture, profileInfo.username)
  insertText(profileInfo.name, "name")
  insertText(profileInfo.username, "username")
  insertText(profileInfo.followers, "followers")
  insertText(profileInfo.following, "following")
  for(var i = 0; i < photos.length; i++){
      addPhoto(i, profileInfo.username);
  };
}

//Main
assembleHTML()
