var extendBtn = document.querySelector('#extendBtn');
var closeBtn = document.querySelector('#closeBtn');

extendBtn.addEventListener('click', extendNavbar);
closeBtn.addEventListener('click', closeNavbar);

function extendNavbar(){
  let tmpNavbar = document.querySelector('nav ul');
  tmpNavbar.style.display = 'flex';
  closeBtn.style.display = 'block';
  extendBtn.style.display = 'none';
}
function closeNavbar(){
  let tmpNavbar = document.querySelector('nav ul');
  tmpNavbar.style.display = 'none';
  closeBtn.style.display = 'none';
  extendBtn.style.display = 'block';
}
