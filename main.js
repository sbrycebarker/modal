// Get modal element

var modal = document.getElementById('simpleModal')

var modalbtn = document.getElementById('modalbtn')

var closebtn= document.getElementById('closebtn');

modalbtn.addEventListener('click', openModal);

closebtn.addEventListener('click', closeModal);

window.addEventListener('click', outside)

function openModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none';
}

function outside(e) {
  if(e.target == modal) {
    modal.style.display = "none"
  }
}
