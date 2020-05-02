var profileInfo = JSON.parse(profileInfo)
var photos = JSON.parse(photos)

function addPhoto(photo){
  const div = document.createElement('div');
  div.className = "photocont";
  div.innerHTML = '<div class="photocont"><img src="resources/' + photos[photo] + '.jpg"></div>';
  document.getElementById('photos').appendChild(div);
}

function insertText(text, element){
  document.getElementById(element).innerHTML = text;
}

function addProfilePic(photo){
  const img = document.createElement('img')
  div.id = "profilepic"
  div.src = photo + ".jpg"
  document.getElementById("photocont").appendChild(img)
}

function assembleHTML(){
  insertText(profileInfo.name, "name")
  insertText(profileInfo.username, "username")
  for(var i = 0; i < photos.length; i++){
      addPhoto(i);
  };
}

//Main
//assembleHTML()
