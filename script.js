


const ideasContainer = document.getElementById('ideas-container');
const ideaForm = document.getElementById('idea-form');
const ideaInput = document.getElementById('idea-input');
const regExName = /^[a-zA-ZА-Яа-я\s]{1,3}$/
const nameInput = document.querySelector('.knop');
ideaForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const ideaText = ideaInput.value;
  
  const newIdea = document.createElement('div');
  newIdea.textContent = ideaText;
  ideasContainer.appendChild(newIdea);
  
  ideaInput.value = '';

});








function likeVideo() {
  var likeButton = document.getElementById("likeButton");
  if (likeButton.classList.contains("liked")) {
      likeButton.style.color = "black";
      likeButton.classList.remove("liked");
  } else {
      likeButton.style.color = "red";
      likeButton.classList.add("liked");
  }
  


} 