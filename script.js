var profileInfo = JSON.parse(profileInfo)
var photos = JSON.parse(photos)

function addPhoto(photo){
  const div = document.createElement('div');
  div.className = "photocont";
  div.innerHTML = '<div class="photocont"><img src="' + photos[photo] + '.jpg"></div>';
  document.getElementById('photos').appendChild(div);
}

function insertText(text, element){
  document.getElementById(element).innerHTML = text;
}

function addProfilePic(photo){
  document.getElementById("profilepic").src = photo + ".jpg"
}

function assembleHTML(){
  addProfilePic(profileInfo.picture)
  insertText(profileInfo.name, "name")
  insertText(profileInfo.username, "username")
  insertText(profileInfo.followers, "followers")
  insertText(profileInfo.following, "following")
  for(var i = 0; i < photos.length; i++){
      addPhoto(i);
  };
}

//Main
assembleHTML()
