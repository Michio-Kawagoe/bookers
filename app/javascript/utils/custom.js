document.addEventListener('DOMContentLoaded', function() {
  var titleInput = document.getElementById('book_title');
  if (titleInput.value.trim() === '') {
    titleInput.classList.add('error-input');
  }
  var bodyInput = document.getElementById('book_body');
  if (bodyInput.value.trim() === '') {
    bodyInput.classList.add('error-input');
  }
});