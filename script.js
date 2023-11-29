



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function toggleAnswer(questionNumber) {
  var answer = document.getElementById('answer' + questionNumber);
  if (answer.style.display === 'block') {
    answer.style.display = 'none';
  } else {
    answer.style.display = 'block';
  }
}

// creating the hamburger


let menu = document.querySelector('#bar-icon');
let menuList = document.querySelector('.main-menu');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  menuList.classList.toggle('open');
};



// when window is on sroll


window.onscroll = () => {
  menu.classList.add('bx-menu-alt-left'); // add the hamburger icon
  menuList.classList.remove('open'); // remove the X icon and replace with hamburger icon
  menu.classList.remove('bx-x'); //remove the X a
}; 