//filter

filterObjects('all');

function filterObjects(c) {
  var x, i;
  x = document.getElementsByClassName('work__card');
  if (c == 'all') c = '';
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], 'show');
    if (x[i].className.indexOf(c) > -1) addClass(x[i], 'show');
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

// https://youtu.be/HRpjAGT7X4Y

// filter activation

const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
  linkWork.forEach((l) => l.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach((l) => l.addEventListener('click', activeWork));

// https://youtu.be/U1sEN3ELIHY

//modal

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('work__img')) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector('.portfolio__popup').classList.toggle('open');
}

document
  .querySelector('.portfolio__popup-close')
  .addEventListener('click', togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector('.pp__thumbnail').innerHTML =
    portfolioItem.querySelector('.pp__details_img').innerHTML;

  document.querySelector('.portfolio__popup-subtitle span').innerHTML =
    portfolioItem.querySelector('.work__title').innerHTML;

  document.querySelector('.portfolio__popup-body').innerHTML =
    portfolioItem.querySelector('.portfolio__item-details').innerHTML;
}

// https://youtu.be/U1sEN3ELIHY

// prevent body from scrolling

const modal = document.querySelector('.portfolio__popup');
const body = document.querySelector('body');

function showModal() {
  if (!modal.classList.contains('open')) {
    // Disable scroll
    body.style.overflowY = 'hidden';
  } else {
    // Enable scroll
    body.style.overflowY = 'auto';
  }
}

//https://www.geeksforgeeks.org/how-to-prevent-body-from-scrolling-when-a-modal-is-opened-using-jquery/

//copy to clipboard
function myFunction() {
  var copyText = document.getElementById('myInput');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById('myTooltip');
  tooltip.innerHTML = 'Copied';
}

function outFunc() {
  var tooltip = document.getElementById('myTooltip');
  tooltip.innerHTML = 'Copy to clipboard';
}

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_copy_clipboard2
