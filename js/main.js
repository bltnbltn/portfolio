const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.nav_menu');
const navbar = document.querySelector('.navbar');

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) {
    navbar.style.padding = '14px 0px 0px 0px';
  } else {
    navbar.style.padding = '14px 0px';
  }
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var images = document.getElementsByClassName('myLogos');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function (evt) {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

// Get the <span> element that closes the modal

modal.addEventListener('click', (e) => {
  modal.style.display = 'none';
});
